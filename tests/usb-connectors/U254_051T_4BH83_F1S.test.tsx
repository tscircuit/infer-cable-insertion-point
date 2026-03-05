import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { Circuit } from "tscircuit"
import { addCableInsertNoteRect } from "../../lib"
import { U254_051T_4BH83_F1S as ImportedUsb } from "../../imports/U254_051T_4BH83_F1S"

test("U254_051T_4BH83_F1S cable insertion center", async () => {
  const circuit = new Circuit()
  circuit.add(<ImportedUsb name="U1" />)
  await circuit.renderUntilSettled()

  const circuitJson = await circuit.getCircuitJson()
  const { circuitJsonWithNote } = addCableInsertNoteRect(circuitJson, {
    idPrefix: "U254_051T_4BH83_F1S",
    noteWidth: 1.2,
    noteHeight: 1.2,
  })

  const pcbSvg = convertCircuitJsonToPcbSvg(circuitJsonWithNote, {
    matchBoardAspectRatio: true,
    backgroundColor: "#0e1015",
  })

  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path)
})
