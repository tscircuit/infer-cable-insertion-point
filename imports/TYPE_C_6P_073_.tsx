import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH1"],
  pin8: ["pin7_alt1"],
  pin9: ["pin7_alt1"],
  pin10: ["pin7_alt1"],
  pin11: ["A12"],
  pin12: ["A9"],
  pin13: ["B5"],
  pin14: ["A5"],
  pin15: ["B9"],
  pin16: ["B12"]
} as const

export const TYPE_C_6P_073_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C668623"
  ]
}}
      manufacturerPartNumber="TYPE_C_6P_073_"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="-4.3199050000000625mm" pcbY="1.4000035999998772mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="4.319904999999949mm" pcbY="1.4000035999998772mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="-4.3199050000000625mm" pcbY="-2.4000904000000673mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin10"]} pcbX="4.319904999999949mm" pcbY="-2.4000904000000673mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="2.7500579999999673mm" pcbY="1.850091599999928mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.5199867999999697mm" pcbY="1.850091599999928mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.4999990000000025mm" pcbY="1.850091599999928mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.49999899999988884mm" pcbY="1.850091599999928mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.519986799999856mm" pcbY="1.850091599999928mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-2.749930999999947mm" pcbY="1.850091599999928mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<silkscreenpath route={[{"x":3.331083000000035,"y":1.8000281999998151},{"x":3.540810800000031,"y":1.8000281999998151}]} />
<silkscreenpath route={[{"x":-3.329101800000103,"y":1.8000281999998151},{"x":-3.3309814000000415,"y":1.8000281999998151}]} />
<silkscreenpath route={[{"x":3.3291525999999294,"y":1.8000281999998151},{"x":3.540810800000031,"y":1.8000281999998151}]} />
<silkscreenpath route={[{"x":-3.5406838000000107,"y":1.8000281999998151},{"x":-3.329101800000103,"y":1.8000281999998151}]} />
<silkscreenpath route={[{"x":-4.499940200000083,"y":0.20000599999980295},{"x":-4.499940200000083,"y":0.2421191999999337}]} />
<silkscreenpath route={[{"x":-4.499940200000083,"y":0.20000599999980295},{"x":-4.499940200000083,"y":-1.2422568000001775}]} />
<silkscreenpath route={[{"x":4.500067199999876,"y":-1.1999658000000863},{"x":4.500067199999876,"y":0.25009479999994255}]} />
<silkscreenpath route={[{"x":-4.500676800000065,"y":-3.6011802000000444},{"x":-4.500676800000065,"y":-3.5783202000000074},{"x":-4.500676800000065,"y":-5.000745600000073},{"x":4.501057800000012,"y":-5.000745600000073},{"x":4.501057800000012,"y":-3.6011802000000444}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5572357f2a5242b0b12e4512f7b213ab&pn=C668623",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.00005080000005364127, y: -1.4679612000001043, z: -1.650090399999965 },
      }}
      {...props}
    />
  )
}