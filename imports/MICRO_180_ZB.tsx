import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["EH1"],
  pin7: ["pin6_alt1"]
} as const

export const MICRO_180_ZB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C668588"
  ]
}}
      manufacturerPartNumber="MICRO_180_ZB"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-1.2999720000000252mm" pcbY="0.49999899999988884mm" outerDiameter="0.8999982mm" holeDiameter="0.5999987999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.6499860000001263mm" pcbY="-0.4999990000000025mm" outerDiameter="0.8999982mm" holeDiameter="0.5999987999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="0.49999899999988884mm" outerDiameter="0.8999982mm" holeDiameter="0.5999987999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="0.6499860000000126mm" pcbY="-0.4999990000000025mm" outerDiameter="0.8999982mm" holeDiameter="0.5999987999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="1.2999719999999115mm" pcbY="0.49999899999988884mm" outerDiameter="0.8999982mm" holeDiameter="0.5999987999999999mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="3.5750499999999192mm" pcbY="0.28003499999988435mm" holeWidth="1.5000223999999998mm" holeHeight="0.5000243999999999mm" outerWidth="1.9999959999999999mm" outerHeight="0.9999979999999999mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-3.575050000000033mm" pcbY="0.28003499999988435mm" holeWidth="1.5000223999999998mm" holeHeight="0.5000243999999999mm" outerWidth="1.9999959999999999mm" outerHeight="0.9999979999999999mm" shape="pill" />
<silkscreenpath route={[{"x":-3.062122400000135,"y":1.2999973999999384},{"x":3.0620207999998,"y":1.2999973999999384}]} />
<silkscreenpath route={[{"x":3.4999930000000177,"y":-1.1999975999999606},{"x":3.4999930000000177,"y":-0.9472676000001456}]} />
<silkscreenpath route={[{"x":-3.4999930000001314,"y":-1.1999975999999606},{"x":-3.4999930000001314,"y":-0.9472676000001456}]} />
<silkscreenpath route={[{"x":-3.4999930000001314,"y":-1.1999975999999606},{"x":3.4999930000000177,"y":-1.1999975999999606}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=28841b5dd4ee44639f823b8db1a63c4f&pn=C668588",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0.39999919999991107, z: -0.14999809999995928 },
      }}
      {...props}
    />
  )
}