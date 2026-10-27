import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { addCableInsertNoteRect, guessCableInsertCenter } from "../lib"
import usbA from "./fixtures/am3352-usb-a.json"

// Actual J_USB0 geometry from the AM3352 six-layer routing proof. The pad
// bounds alone suggest left entry; the rectangular body extends toward +Y.
const fixture = usbA as AnyCircuitElement[]

for (const [rotation, side] of [
  [0, "top"],
  [90, "left"],
  [180, "bottom"],
  [270, "right"],
] as const) {
  test(`USB-A rectangular body determines entry after ${rotation} degree rotation`, () => {
    const angle = (rotation * Math.PI) / 180
    const transform = (x: number, y: number) => ({
      x: x * Math.cos(angle) - y * Math.sin(angle),
      y: x * Math.sin(angle) + y * Math.cos(angle),
    })
    const rotated = fixture.map((element) => {
      if (element.type === "pcb_component") {
        const quarterTurn = rotation === 90 || rotation === 270
        return {
          ...element,
          center: transform(element.center.x, element.center.y),
          width: quarterTurn ? element.height : element.width,
          height: quarterTurn ? element.width : element.height,
          rotation: element.rotation + rotation,
        }
      }
      if (element.type === "pcb_plated_hole") {
        return { ...element, ...transform(element.x, element.y) }
      }
      if (element.type === "pcb_silkscreen_rect") {
        return {
          ...element,
          center: transform(element.center.x, element.center.y),
          ccw_rotation: (element.ccw_rotation ?? 0) + rotation,
        }
      }
      return element
    })
    expect(guessCableInsertCenter(rotated).side).toBe(side)

    // The same outline must produce the same result as a silkscreen path,
    // including non-square rectangles at quarter turns.
    const paths: AnyCircuitElement[] = rotated.map((element) => {
      if (element.type !== "pcb_silkscreen_rect") return element
      const theta = ((element.ccw_rotation ?? 0) * Math.PI) / 180
      return {
        type: "pcb_silkscreen_path" as const,
        pcb_silkscreen_path_id: "body",
        pcb_component_id: element.pcb_component_id,
        layer: "top" as const,
        stroke_width: element.stroke_width,
        route: [
          [-1, -1],
          [-1, 1],
          [1, 1],
          [1, -1],
        ].map(([x, y]) => ({
          x:
            element.center.x +
            (x! * element.width * Math.cos(theta) -
              y! * element.height * Math.sin(theta)) /
              2,
          y:
            element.center.y +
            (x! * element.width * Math.sin(theta) +
              y! * element.height * Math.cos(theta)) /
              2,
        })),
      }
    })
    expect(guessCableInsertCenter(rotated)).toEqual(
      guessCableInsertCenter(paths),
    )
  })
}

test("explicit insertion direction still overrides a rectangular body", () => {
  const explicit = fixture.map((element) =>
    element.type === "pcb_component"
      ? { ...element, insertion_direction: "from_right" as const }
      : element,
  )
  expect(guessCableInsertCenter(explicit).side).toBe("right")
})

test("AM3352 USB-A insertion point is at the socket opening", async () => {
  const { circuitJsonWithNote } = addCableInsertNoteRect(fixture)
  await expect(
    convertCircuitJsonToPcbSvg(circuitJsonWithNote),
  ).toMatchSvgSnapshot(import.meta.path)
})
