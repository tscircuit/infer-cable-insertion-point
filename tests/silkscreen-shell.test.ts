import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { guessCableInsertCenter } from "../lib"

/**
 * Pads clustered on a small component, with the USB-style shell drawn as a
 * silkscreen rect hanging off the -Y side. Without counting that rect, the
 * non-pad margins are tiny and the insertion side is ambiguous.
 */
const shellCircuit = (
  shell: { kind: "rect" } | { kind: "circle" } | { kind: "line" },
): AnyCircuitElement[] => {
  const shellElms: AnyCircuitElement[] =
    shell.kind === "rect"
      ? [
          {
            type: "pcb_silkscreen_rect",
            pcb_silkscreen_rect_id: "shell",
            pcb_component_id: "pcb_j1",
            layer: "top",
            center: { x: 0, y: -3 },
            width: 4,
            height: 4,
            stroke_width: 0.15,
          } as AnyCircuitElement,
        ]
      : shell.kind === "circle"
        ? [
            {
              type: "pcb_silkscreen_circle",
              pcb_silkscreen_circle_id: "shell",
              pcb_component_id: "pcb_j1",
              layer: "top",
              center: { x: 0, y: -4 },
              radius: 2,
              stroke_width: 0.15,
            } as AnyCircuitElement,
          ]
        : [
            {
              type: "pcb_silkscreen_line",
              pcb_silkscreen_line_id: "shell",
              pcb_component_id: "pcb_j1",
              layer: "top",
              x1: -2,
              y1: -6,
              x2: 2,
              y2: -6,
              stroke_width: 0.2,
            } as AnyCircuitElement,
          ]

  return [
    {
      type: "pcb_component",
      pcb_component_id: "pcb_j1",
      source_component_id: "source_j1",
      center: { x: 0, y: 0 },
      width: 1,
      height: 1,
      rotation: 0,
      layer: "top",
      obstructs_within_bounds: true,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pad_1",
      pcb_component_id: "pcb_j1",
      layer: "top",
      shape: "rect",
      x: -0.3,
      y: 0,
      width: 0.2,
      height: 0.2,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pad_2",
      pcb_component_id: "pcb_j1",
      layer: "top",
      shape: "rect",
      x: 0.3,
      y: 0,
      width: 0.2,
      height: 0.2,
    },
    ...shellElms,
  ] as AnyCircuitElement[]
}

test("silkscreen rect shells count toward the cable-insert side", () => {
  const inferred = guessCableInsertCenter(shellCircuit({ kind: "rect" }))
  expect(inferred.side).toBe("bottom")
  expect(inferred.y).toBeLessThan(-3)
})

test("silkscreen circle shells count toward the cable-insert side", () => {
  const inferred = guessCableInsertCenter(shellCircuit({ kind: "circle" }))
  expect(inferred.side).toBe("bottom")
  expect(inferred.y).toBeLessThan(-4)
})

test("silkscreen line shells count toward the cable-insert side", () => {
  const inferred = guessCableInsertCenter(shellCircuit({ kind: "line" }))
  expect(inferred.side).toBe("bottom")
  expect(inferred.y).toBeLessThan(-5)
})
