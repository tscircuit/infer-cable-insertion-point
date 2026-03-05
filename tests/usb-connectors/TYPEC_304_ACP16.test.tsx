import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { Circuit } from "tscircuit"
import { addCableInsertNoteRect } from "../../lib"
import { TYPEC_304_ACP16 as ImportedUsb } from "../../imports/TYPEC_304_ACP16"

test("TYPEC_304_ACP16 cable insertion center", async () => {
  const circuit = new Circuit()
  circuit.add(<ImportedUsb name="U1" />)
  await circuit.renderUntilSettled()

  const circuitJson = await circuit.getCircuitJson()
  const { circuitJsonWithNote } = addCableInsertNoteRect(circuitJson, {
    idPrefix: "TYPEC_304_ACP16",
    noteWidth: 1.2,
    noteHeight: 1.2,
  })

  const pcbSvg = convertCircuitJsonToPcbSvg(circuitJsonWithNote, {
    matchBoardAspectRatio: true,
    backgroundColor: "#0e1015",
  })

  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path)
})
