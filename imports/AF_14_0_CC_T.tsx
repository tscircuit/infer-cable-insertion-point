import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["SHLD1"],
  pin6: ["pin5_alt1"],
  pin7: ["pin5_alt1"]
} as const

export const AF_14_0_CC_T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C456020"
  ]
}}
      manufacturerPartNumber="AF_14_0_CC_T"
      footprint={<footprint>
        <platedhole  portHints={["pin4"]} pcbX="-2.1100795999999917mm" pcbY="3.9750111000000032mm" outerDiameter="1.199896mm" holeDiameter="0.7999983999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-0.7100315999999793mm" pcbY="3.9750111000000032mm" outerDiameter="1.199896mm" holeDiameter="0.7999983999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0.6900163999999904mm" pcbY="3.9750111000000032mm" outerDiameter="1.199896mm" holeDiameter="0.7999983999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="2.090064400000003mm" pcbY="3.9750111000000032mm" outerDiameter="1.199896mm" holeDiameter="0.7999983999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-2.73999959999999mm" pcbY="1.9750150999999931mm" holeWidth="2.0000213999999996mm" holeHeight="1.3000228mm" outerWidth="2.4999949999999997mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin6"]} pcbX="2.7399996000000044mm" pcbY="1.9750150999999931mm" holeWidth="2.0000213999999996mm" holeHeight="1.3000228mm" outerWidth="2.4999949999999997mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-0.020167599999993513mm" pcbY="-3.674960900000002mm" outerDiameter="1.7999964mm" holeDiameter="1.199896mm" shape="circle" />
<silkscreenpath route={[{"x":-3.0100015999999954,"y":5.074577099999999},{"x":2.9899864000000065,"y":5.074577099999999}]} />
<silkscreenpath route={[{"x":-3.0100015999999954,"y":-8.9253949},{"x":2.9899864000000065,"y":-8.9253949}]} />
<silkscreenpath route={[{"x":2.9998924000000216,"y":5.074577099999999},{"x":3.500018400000002,"y":5.074577099999999}]} />
<silkscreenpath route={[{"x":3.500018400000002,"y":5.074577099999999},{"x":3.500018400000002,"y":2.924467100000001}]} />
<silkscreenpath route={[{"x":3.262477600000011,"y":2.9171010999999964},{"x":3.500018400000002,"y":2.9145611000000002}]} />
<silkscreenpath route={[{"x":-3.2925003999999944,"y":2.9171010999999964},{"x":-3.528415599999988,"y":2.912021100000004}]} />
<silkscreenpath route={[{"x":-3.528415599999988,"y":2.912021100000004},{"x":-3.528415599999988,"y":5.062131100000002}]} />
<silkscreenpath route={[{"x":-3.0282895999999795,"y":5.072037100000003},{"x":-3.528415599999988,"y":5.072037100000003}]} />
<silkscreenpath route={[{"x":2.9899864000000065,"y":5.074577099999999},{"x":2.9899864000000065,"y":3.2133413000000104}]} />
<silkscreenpath route={[{"x":2.9899864000000065,"y":0.7376794999999987},{"x":2.9899864000000065,"y":-8.9253949}]} />
<silkscreenpath route={[{"x":-3.0100015999999954,"y":5.074577099999999},{"x":-3.0100015999999954,"y":3.2133413000000104}]} />
<silkscreenpath route={[{"x":-3.0100015999999954,"y":0.7376794999999987},{"x":-3.0100015999999954,"y":-8.9253949}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e772aa9a87a34643bc4f31db0be4b05f&pn=C456020",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.010007599999994454, y: -1.8749899000000028, z: -3.774959100000001 },
      }}
      {...props}
    />
  )
}