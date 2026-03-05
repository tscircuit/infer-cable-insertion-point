import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EP1"],
  pin8: ["EP2"],
  pin9: ["A5"],
  pin10: ["B5"],
  pin11: ["A9"],
  pin12: ["B9"],
  pin13: ["B12"],
  pin14: ["A12"]
} as const

export const TYPE_C_6PLTH6_8_DJ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5156600"
  ]
}}
      manufacturerPartNumber="TYPE_C_6PLTH6_8_DJ"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="4.320031999999969mm" pcbY="0.8150542000000769mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="1.1999975999999999mm" outerHeight="2.2999954mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="-4.320031999999969mm" pcbY="0.8150542000000769mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="1.1999975999999999mm" outerHeight="2.2999954mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="-0.5001260000000229mm" pcbY="-0.0650557999999819mm" width="0.6999986mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.5001259999999093mm" pcbY="-0.0650557999999819mm" width="0.6999986mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.5011400000000776mm" pcbY="-0.0650557999999819mm" width="0.7599934mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.5008860000000368mm" pcbY="-0.0650557999999819mm" width="0.7599934mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-2.750058000000081mm" pcbY="-0.0650557999999819mm" width="0.7999983999999999mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.7500579999999673mm" pcbY="-0.0650557999999819mm" width="0.7999983999999999mm" height="1.5999967999999998mm" shape="rect" />
<silkscreenpath route={[{"x":-5.019979800000101,"y":-0.21852260000002843},{"x":-5.019979800000101,"y":-0.5849938000000066},{"x":-3.3999932000001536,"y":-0.5849938000000066}]} />
<silkscreenpath route={[{"x":-5.019979800000101,"y":2.724981800000023},{"x":-5.019979800000101,"y":1.8486310000000685}]} />
<silkscreenpath route={[{"x":4.989982400000031,"y":-0.2559114000000591},{"x":4.989982400000031,"y":-0.5849938000000066},{"x":3.3299908000000187,"y":-0.5849938000000066}]} />
<silkscreenpath route={[{"x":-5.019979800000101,"y":2.724981800000023},{"x":4.989982400000031,"y":2.724981800000023},{"x":4.989982400000031,"y":1.8860197999999855}]} />
<silkscreenpath route={[{"x":-2.113127600000098,"y":-0.4926140000000032},{"x":-2.1188679999999067,"y":-0.4926140000000032}]} />
<silkscreenpath route={[{"x":2.1188679999999067,"y":-0.4926140000000032},{"x":2.1131275999999843,"y":-0.4926140000000032}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=03ce1836141c4a779190e43b84ea4e47&pn=C5156600",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.1368683772161603e-13, y: 1.0589703999999074, z: -0.06505420000003137 },
      }}
      {...props}
    />
  )
}