import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { guessCableInsertCenter } from "../lib"

const component = {
  type: "pcb_component",
  pcb_component_id: "pcb_j1",
  source_component_id: "source_j1",
  center: { x: 0, y: 0 },
  width: 1,
  height: 1,
  rotation: 0,
  layer: "top",
  obstructs_within_bounds: true,
  insertion_direction: "from_top",
} as AnyCircuitElement

const rotatedSmtPad = {
  type: "pcb_smtpad",
  shape: "rotated_rect",
  pcb_smtpad_id: "pad_1",
  pcb_component_id: "pcb_j1",
  pcb_port_id: "port_1",
  x: 0,
  y: 0,
  width: 4,
  height: 1,
  ccw_rotation: 90,
  layer: "top",
} as AnyCircuitElement

const rotatedPlatedHole = {
  type: "pcb_plated_hole",
  shape: "oval",
  pcb_plated_hole_id: "hole_1",
  pcb_component_id: "pcb_j1",
  pcb_port_id: "port_1",
  x: 0,
  y: 0,
  outer_width: 4,
  outer_height: 1,
  hole_width: 3,
  hole_height: 0.5,
  ccw_rotation: 90,
  layers: ["top", "bottom"],
} as AnyCircuitElement

test("rotated pads and holes contribute rotated bounds", () => {
  for (const geometry of [rotatedSmtPad, rotatedPlatedHole]) {
    const inferred = guessCableInsertCenter([component, geometry])

    expect(inferred.side).toBe("top")
    expect(inferred.x).toBe(0)
    expect(inferred.y).toBeCloseTo(2.4)
  }
})
