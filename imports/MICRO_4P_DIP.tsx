import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["EH1"],
  pin7: ["pin6_alt1"],
  pin8: ["pin6_alt1"],
  pin9: ["pin6_alt1"]
} as const

export const MICRO_4P_DIP = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C456008"
  ]
}}
      manufacturerPartNumber="MICRO_4P_DIP"
      footprint={<footprint>
        <hole pcbX="-1.99999600000001mm" pcbY="0.3249867000000677mm" diameter="0.700024mm" />
<hole pcbX="1.9999959999998964mm" pcbY="0.3249867000000677mm" diameter="0.700024mm" />
<platedhole  portHints={["pin6"]} pcbX="3.5750499999999192mm" pcbY="1.6498507000001155mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-3.575050000000033mm" pcbY="1.6498507000001155mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="-3.575050000000033mm" pcbY="-1.7999773000000232mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="3.5750499999999192mm" pcbY="-1.7999773000000232mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-1.2999720000000252mm" pcbY="1.1499787000000197mm" width="0.39999919999999994mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6499860000001263mm" pcbY="1.1499787000000197mm" width="0.39999919999999994mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="1.1499787000000197mm" width="0.39999919999999994mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6499860000000126mm" pcbY="1.1499787000000197mm" width="0.39999919999999994mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.2999719999999115mm" pcbY="1.1499787000000197mm" width="0.39999919999999994mm" height="1.3999972mm" shape="rect" />
<silkscreenpath route={[{"x":2.7512517999999773,"y":2.0603147000001627},{"x":1.5920211999999765,"y":2.0603147000001627}]} />
<silkscreenpath route={[{"x":-3.574973800000066,"y":-3.9500364999998965},{"x":3.5749991999998656,"y":-3.9500364999998965}]} />
<silkscreenpath route={[{"x":-1.5920212000000902,"y":2.0603147000001627},{"x":-2.751251800000091,"y":2.0603147000001627}]} />
<silkscreenpath route={[{"x":-3.574973800000066,"y":-3.9500364999998965},{"x":-3.574973800000066,"y":-2.9312170999999125}]} />
<silkscreenpath route={[{"x":-3.574973800000066,"y":-0.6689406999998937},{"x":-3.574973800000066,"y":0.5187887000000728}]} />
<silkscreenpath route={[{"x":3.5749991999998656,"y":-3.9500364999998965},{"x":3.5749991999998656,"y":-2.9312170999999125}]} />
<silkscreenpath route={[{"x":3.5749991999998656,"y":-0.6689406999998937},{"x":3.5749991999998656,"y":0.5187887000000728}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=8a5c231ba06c4efda3fd512d6709d3fb&pn=C456008",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 0, y: -0.9450894999998809, z: -1.0499772999999777 },
      }}
      {...props}
    />
  )
}