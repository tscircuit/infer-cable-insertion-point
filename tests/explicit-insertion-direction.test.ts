import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { guessCableInsertCenter } from "../lib"

const circuitJson = (
  insertionDirection?:
    | "from_left"
    | "from_right"
    | "from_top"
    | "from_bottom"
    | "from_above"
    | "from_below"
    | "from_front"
    | "from_back",
): AnyCircuitElement[] =>
  [
    {
      type: "pcb_component",
      pcb_component_id: "pcb_j1",
      source_component_id: "source_j1",
      center: { x: 0, y: 0 },
      width: 5,
      height: 5,
      rotation: 0,
      layer: "top",
      obstructs_within_bounds: true,
      insertion_direction: insertionDirection,
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "hole_1",
      pcb_component_id: "pcb_j1",
      pcb_port_id: "port_1",
      outer_diameter: 2,
      hole_diameter: 1,
      shape: "circle",
      x: -2,
      y: -2,
      layers: ["top", "bottom"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "hole_2",
      pcb_component_id: "pcb_j1",
      pcb_port_id: "port_2",
      outer_diameter: 2,
      hole_diameter: 1,
      shape: "circle",
      x: 2,
      y: 2,
      layers: ["top", "bottom"],
    },
    {
      type: "pcb_silkscreen_path",
      pcb_silkscreen_path_id: "outline",
      pcb_component_id: "pcb_j1",
      layer: "top",
      stroke_width: 0.2,
      route: [
        { x: -2, y: 2 },
        { x: 2, y: 10 },
      ],
    },
  ] as AnyCircuitElement[]

test("explicit planar insertion direction overrides the geometry guess", () => {
  expect(guessCableInsertCenter(circuitJson()).side).toBe("top")
  expect(guessCableInsertCenter(circuitJson("from_left")).side).toBe("left")
  expect(guessCableInsertCenter(circuitJson("from_right")).side).toBe("right")
  // `from_top` is +Y, matching core, circuit-json-util and checks.
  expect(guessCableInsertCenter(circuitJson("from_top")).side).toBe("top")
  expect(guessCableInsertCenter(circuitJson("from_bottom")).side).toBe("bottom")
  // Deprecated spellings of from_top/from_bottom.
  expect(guessCableInsertCenter(circuitJson("from_front")).side).toBe("top")
  expect(guessCableInsertCenter(circuitJson("from_back")).side).toBe("bottom")
})

test("from_above keeps the insertion point centered in the footprint bounds", () => {
  const inferred = guessCableInsertCenter(circuitJson("from_above"))

  expect(inferred.side).toBe("above")
  expect(inferred.x).toBe(0)
  expect(inferred.y).toBe(3.5)
})
