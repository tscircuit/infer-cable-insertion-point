import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["SHELL2"],
  pin6: ["SHELL1"]
} as const

export const AF_10_0_HC6_3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C456017"
  ]
}}
      manufacturerPartNumber="AF_10_0_HC6_3"
      footprint={<footprint>
        <platedhole  portHints={["pin6"]} pcbX="6.449948999999947mm" pcbY="-1.1250612000000046mm" holeWidth="0.7999983999999999mm" holeHeight="2.2999954000000002mm" outerWidth="1.2999973999999999mm" outerHeight="2.7999944mm" shape="pill" />
<platedhole  portHints={["pin5"]} pcbX="-6.449948999999947mm" pcbY="-1.1250612000000046mm" holeWidth="0.7999983999999999mm" holeHeight="2.2999954000000002mm" outerWidth="1.2999973999999999mm" outerHeight="2.7999944mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="3.4999930000000177mm" pcbY="0.37506279999990966mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.0001250000000255mm" pcbY="0.37506279999990966mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.999870999999871mm" pcbY="0.37506279999990966mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-3.4999930000001314mm" pcbY="0.37506279999990966mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<silkscreenpath route={[{"x":4.496155599999838,"y":0.6410515999998552},{"x":6.604000000000042,"y":0.6410515999998552}]} />
<silkscreenpath route={[{"x":1.996160600000053,"y":0.6410515999998552},{"x":2.5038304000000835,"y":0.6410515999998552}]} />
<silkscreenpath route={[{"x":-0.0038354000000708766,"y":0.6410515999998552},{"x":0.0038353999999571897,"y":0.6410515999998552}]} />
<silkscreenpath route={[{"x":-2.468879999999899,"y":0.6410515999998552},{"x":-1.9961605999999392,"y":0.6410515999998552}]} />
<silkscreenpath route={[{"x":-6.604000000000042,"y":0.49261399999988953},{"x":-6.604000000000042,"y":0.6410515999998552},{"x":-4.531156800000076,"y":0.6410515999998552}]} />
<silkscreenpath route={[{"x":6.604000000000042,"y":-2.7424823999999717},{"x":6.604000000000042,"y":-9.645948400000066},{"x":-6.604000000000042,"y":-9.645948400000066},{"x":-6.604000000000042,"y":-2.7424823999999717}]} />
<silkscreenpath route={[{"x":6.604000000000042,"y":0.6410515999998552},{"x":6.604000000000042,"y":0.49261399999988953}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=04000b8622674591b096b581dc6d16ab&pn=C456017",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.000025400000026820635, y: -4.374991200000068, z: -0.3750611999999591 },
      }}
      {...props}
    />
  )
}