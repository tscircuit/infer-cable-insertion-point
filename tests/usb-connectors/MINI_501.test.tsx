import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { Circuit } from "tscircuit"
import { addCableInsertNoteRect } from "../../lib"
import { MINI_501 as ImportedUsb } from "../../imports/MINI_501"

test("MINI_501 cable insertion center", async () => {
  const circuit = new Circuit()
  circuit.add(<ImportedUsb name="U1" />)
  await circuit.renderUntilSettled()

  const circuitJson = await circuit.getCircuitJson()
  const { circuitJsonWithNote } = addCableInsertNoteRect(circuitJson, {
    idPrefix: "MINI_501",
    noteWidth: 1.2,
    noteHeight: 1.2,
  })

  const pcbSvg = convertCircuitJsonToPcbSvg(circuitJsonWithNote, {
    matchBoardAspectRatio: true,
    backgroundColor: "#0e1015",
  })

  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path)
})
