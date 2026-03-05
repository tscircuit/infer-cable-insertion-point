import fs from "node:fs"
import path from "node:path"

const importsDir = path.join(process.cwd(), "imports")
const outDir = path.join(process.cwd(), "tests", "usb-connectors")

fs.mkdirSync(outDir, { recursive: true })

for (const file of fs
  .readdirSync(importsDir)
  .filter((f) => f.endsWith(".tsx"))
  .sort()) {
  const fullPath = path.join(importsDir, file)
  const source = fs.readFileSync(fullPath, "utf8")
  const match = source.match(/export const\s+([A-Za-z0-9_]+)\s*=/)
  if (!match) continue

  const exportName = match[1]
  const baseName = file.replace(/\.tsx$/, "")

  const testCode = `import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { Circuit } from "tscircuit"
import { addCableInsertNoteRect } from "../../lib"
import { ${exportName} as ImportedUsb } from "../../imports/${baseName}"

test("${baseName} cable insertion center", async () => {
  const circuit = new Circuit()
  circuit.add(<ImportedUsb name="U1" />)
  await circuit.renderUntilSettled()

  const circuitJson = await circuit.getCircuitJson()
  const { circuitJsonWithNote } = addCableInsertNoteRect(circuitJson, {
    idPrefix: "${baseName}",
    noteWidth: 1.2,
    noteHeight: 1.2,
  })

  const pcbSvg = convertCircuitJsonToPcbSvg(circuitJsonWithNote, {
    matchBoardAspectRatio: true,
    backgroundColor: "#0e1015",
  })

  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path)
})
`

  fs.writeFileSync(path.join(outDir, `${baseName}.test.tsx`), testCode)
}

console.log("Generated USB connector snapshot tests")
