import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { Circuit } from "tscircuit"
import { addCableInsertNoteRect } from "../../lib"
import { KH_TYPE_C_16P as ImportedUsb } from "../../imports/KH_TYPE_C_16P"

test("KH_TYPE_C_16P cable insertion center", async () => {
  const circuit = new Circuit()
  circuit.add(<ImportedUsb name="U1" />)
  await circuit.renderUntilSettled()

  const circuitJson = await circuit.getCircuitJson()
  const { circuitJsonWithNote } = addCableInsertNoteRect(circuitJson, {
    idPrefix: "KH_TYPE_C_16P",
    noteWidth: 1.2,
    noteHeight: 1.2,
  })

  const pcbSvg = convertCircuitJsonToPcbSvg(circuitJsonWithNote, {
    matchBoardAspectRatio: true,
    backgroundColor: "#0e1015",
  })

  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path)
})
