import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { guessCableInsertCenter } from "../lib"

test("includes rectangular and polygon plated hole pads and rotated SMT pads in overall bounds", () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_component",
      pcb_component_id: "pcb_j1",
      source_component_id: "source_j1",
      center: { x: 0, y: 0 },
      width: 2,
      height: 2,
      rotation: 0,
      layer: "top",
      obstructs_within_bounds: true,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pad_signal_1",
      pcb_component_id: "pcb_j1",
      layer: "top",
      shape: "rotated_rect",
      x: -1,
      y: 2,
      width: 0.6,
      height: 2,
      ccw_rotation: 90,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pad_signal_2",
      pcb_component_id: "pcb_j1",
      layer: "top",
      shape: "rotated_rect",
      x: 1,
      y: 2,
      width: 0.6,
      height: 2,
      ccw_rotation: 90,
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "shield_slot_left",
      pcb_component_id: "pcb_j1",
      shape: "pill_hole_with_rect_pad",
      hole_shape: "pill",
      pad_shape: "rect",
      x: -3,
      y: -2,
      hole_offset_x: 0,
      hole_offset_y: 0,
      hole_width: 1,
      hole_height: 2,
      rect_pad_width: 1.6,
      rect_pad_height: 6,
      layers: ["top", "bottom"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "shield_poly_right",
      pcb_component_id: "pcb_j1",
      shape: "hole_with_polygon_pad",
      hole_shape: "circle",
      hole_diameter: 1,
      hole_offset_x: 0,
      hole_offset_y: 0,
      x: 3,
      y: -2,
      pad_outline: [
        { x: -0.8, y: -3 },
        { x: 0.8, y: -3 },
        { x: 0.8, y: 3 },
        { x: -0.8, y: 3 },
      ],
      layers: ["top", "bottom"],
    },
  ]

  const inferred = guessCableInsertCenter(circuitJson)
  expect(inferred.side).toBe("bottom")
  expect(inferred.x).toBeCloseTo(0, 5)
  expect(inferred.y).toBeLessThan(-5)
})

test("infers cable insertion point for standalone footprint soup without a pcb_component wrapper", () => {
  const footprintSoup: AnyCircuitElement[] = [
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pad_1",
      layer: "top",
      shape: "rect",
      x: -1,
      y: 2,
      width: 0.8,
      height: 1.2,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pad_2",
      layer: "top",
      shape: "rect",
      x: 1,
      y: 2,
      width: 0.8,
      height: 1.2,
    },
    {
      type: "pcb_silkscreen_path",
      pcb_silkscreen_path_id: "body_outline",
      pcb_component_id: "footprint_1",
      layer: "top",
      stroke_width: 0.15,
      route: [
        { x: -3, y: 3 },
        { x: 3, y: 3 },
        { x: 3, y: -4 },
        { x: -3, y: -4 },
        { x: -3, y: 3 },
      ],
    },
  ]

  const inferred = guessCableInsertCenter(footprintSoup)
  expect(inferred.side).toBe("bottom")
  expect(inferred.x).toBeCloseTo(0, 5)
  expect(inferred.y).toBeLessThan(-4)
})
