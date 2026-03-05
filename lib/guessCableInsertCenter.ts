import type { AnyCircuitElement } from "circuit-json"

type Bounds = {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

export type CableInsertSide = "top" | "bottom" | "left" | "right"

export interface CableInsertCenter {
  x: number
  y: number
  side: CableInsertSide
  pcbComponentId?: string
}

const emptyBounds = (): Bounds => ({
  minX: Number.POSITIVE_INFINITY,
  maxX: Number.NEGATIVE_INFINITY,
  minY: Number.POSITIVE_INFINITY,
  maxY: Number.NEGATIVE_INFINITY,
})

const includePoint = (bounds: Bounds, x: number, y: number) => {
  bounds.minX = Math.min(bounds.minX, x)
  bounds.maxX = Math.max(bounds.maxX, x)
  bounds.minY = Math.min(bounds.minY, y)
  bounds.maxY = Math.max(bounds.maxY, y)
}

const includeRect = (
  bounds: Bounds,
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  includePoint(bounds, x - width / 2, y - height / 2)
  includePoint(bounds, x + width / 2, y + height / 2)
}

const hasBounds = (bounds: Bounds) =>
  Number.isFinite(bounds.minX) &&
  Number.isFinite(bounds.maxX) &&
  Number.isFinite(bounds.minY) &&
  Number.isFinite(bounds.maxY)

const getPrimaryPcbComponent = (circuitJson: AnyCircuitElement[]) =>
  circuitJson.find((elm) => elm.type === "pcb_component")

const getComponentPcbElements = (
  circuitJson: AnyCircuitElement[],
  pcbComponentId?: string,
) => {
  if (!pcbComponentId) return []
  return circuitJson.filter(
    (elm) =>
      "pcb_component_id" in elm && elm.pcb_component_id === pcbComponentId,
  )
}

const computeOverallBounds = (
  elements: AnyCircuitElement[],
  fallbackBounds: Bounds,
): Bounds => {
  const bounds = emptyBounds()

  for (const elm of elements) {
    if (elm.type === "pcb_smtpad") {
      if ("points" in elm) {
        for (const point of elm.points) includePoint(bounds, point.x, point.y)
      } else if (
        "x" in elm &&
        "y" in elm &&
        "width" in elm &&
        "height" in elm
      ) {
        includeRect(bounds, elm.x, elm.y, elm.width, elm.height)
      } else if ("x" in elm && "y" in elm && "radius" in elm) {
        includeRect(bounds, elm.x, elm.y, elm.radius * 2, elm.radius * 2)
      }
      continue
    }

    if (elm.type === "pcb_plated_hole") {
      if ("outer_width" in elm && "outer_height" in elm) {
        includeRect(bounds, elm.x, elm.y, elm.outer_width, elm.outer_height)
      } else if ("outer_diameter" in elm) {
        includeRect(
          bounds,
          elm.x,
          elm.y,
          elm.outer_diameter,
          elm.outer_diameter,
        )
      }
      continue
    }

    if (elm.type === "pcb_hole") {
      if ("hole_diameter" in elm) {
        includeRect(bounds, elm.x, elm.y, elm.hole_diameter, elm.hole_diameter)
      } else if ("hole_width" in elm && "hole_height" in elm) {
        includeRect(bounds, elm.x, elm.y, elm.hole_width, elm.hole_height)
      }
      continue
    }

    if (elm.type === "pcb_silkscreen_path") {
      for (const point of elm.route) includePoint(bounds, point.x, point.y)
      continue
    }

    if (elm.type === "pcb_component") {
      includeRect(bounds, elm.center.x, elm.center.y, elm.width, elm.height)
    }
  }

  return hasBounds(bounds) ? bounds : fallbackBounds
}

const computePadBounds = (
  elements: AnyCircuitElement[],
  fallbackBounds: Bounds,
): Bounds => {
  const bounds = emptyBounds()

  for (const elm of elements) {
    if (elm.type === "pcb_smtpad") {
      if ("x" in elm && "y" in elm) includePoint(bounds, elm.x, elm.y)
      if ("points" in elm) {
        for (const point of elm.points) includePoint(bounds, point.x, point.y)
      }
    }
    if (elm.type === "pcb_plated_hole" && elm.pcb_port_id)
      includePoint(bounds, elm.x, elm.y)
  }

  return hasBounds(bounds) ? bounds : fallbackBounds
}

export const guessCableInsertCenter = (
  circuitJson: AnyCircuitElement[],
): CableInsertCenter => {
  const pcbComponent = getPrimaryPcbComponent(circuitJson)

  if (!pcbComponent) {
    return {
      x: 0,
      y: 0,
      side: "bottom",
    }
  }

  const fallbackBounds: Bounds = {
    minX: pcbComponent.center.x - pcbComponent.width / 2,
    maxX: pcbComponent.center.x + pcbComponent.width / 2,
    minY: pcbComponent.center.y - pcbComponent.height / 2,
    maxY: pcbComponent.center.y + pcbComponent.height / 2,
  }

  const elements = getComponentPcbElements(
    circuitJson,
    pcbComponent.pcb_component_id,
  )
  const overallBounds = computeOverallBounds(elements, fallbackBounds)
  const padBounds = computePadBounds(elements, fallbackBounds)

  const sideMargins: Record<CableInsertSide, number> = {
    left: padBounds.minX - overallBounds.minX,
    right: overallBounds.maxX - padBounds.maxX,
    top: overallBounds.maxY - padBounds.maxY,
    bottom: padBounds.minY - overallBounds.minY,
  }

  const side = (Object.entries(sideMargins).sort(
    (a, b) => b[1] - a[1],
  )[0]?.[0] ?? "bottom") as CableInsertSide

  const width = overallBounds.maxX - overallBounds.minX
  const height = overallBounds.maxY - overallBounds.minY
  const offset = Math.max(0.4, Math.min(width, height) * 0.08)

  const centerX = (overallBounds.minX + overallBounds.maxX) / 2
  const centerY = (overallBounds.minY + overallBounds.maxY) / 2

  if (side === "top") {
    return {
      x: centerX,
      y: overallBounds.maxY + offset,
      side,
      pcbComponentId: pcbComponent.pcb_component_id,
    }
  }

  if (side === "left") {
    return {
      x: overallBounds.minX - offset,
      y: centerY,
      side,
      pcbComponentId: pcbComponent.pcb_component_id,
    }
  }

  if (side === "right") {
    return {
      x: overallBounds.maxX + offset,
      y: centerY,
      side,
      pcbComponentId: pcbComponent.pcb_component_id,
    }
  }

  return {
    x: centerX,
    y: overallBounds.minY - offset,
    side: "bottom",
    pcbComponentId: pcbComponent.pcb_component_id,
  }
}

export const addCableInsertNoteRect = (
  circuitJson: AnyCircuitElement[],
  opts?: {
    noteWidth?: number
    noteHeight?: number
    idPrefix?: string
  },
) => {
  const guess = guessCableInsertCenter(circuitJson)
  const noteRect = {
    type: "pcb_note_rect" as const,
    pcb_note_rect_id: `${opts?.idPrefix ?? "guess"}_cable_insert_center`,
    center: { x: guess.x, y: guess.y },
    width: opts?.noteWidth ?? 1,
    height: opts?.noteHeight ?? 1,
    stroke_width: 0.15,
    is_filled: false,
    has_stroke: true,
    is_stroke_dashed: true,
    color: "#33dd88",
    text: `cable-insert:${guess.side}`,
    pcb_component_id: guess.pcbComponentId,
  }

  return {
    guess,
    noteRect,
    circuitJsonWithNote: [...circuitJson, noteRect],
  }
}
