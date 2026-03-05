import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"]
} as const

export const U254_051T_4BH83_F1S = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C397452"
  ]
}}
      manufacturerPartNumber="U254_051T_4BH83_F1S"
      footprint={<footprint>
        <hole pcbX="1.9999959999998964mm" pcbY="0.5500179999999091mm" diameter="0.5000243999999999mm" />
<hole pcbX="-1.99999600000001mm" pcbY="0.5500179999999091mm" diameter="0.5000243999999999mm" />
<platedhole  portHints={["pin8"]} pcbX="-2.830067999999983mm" pcbY="-1.7999900000000935mm" holeWidth="0.9000235999999999mm" holeHeight="1.4000225999999998mm" outerWidth="1.499997mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="2.8300679999998692mm" pcbY="-1.7999900000000935mm" holeWidth="0.9000235999999999mm" holeHeight="1.4000225999999998mm" outerWidth="1.499997mm" outerHeight="1.9999959999999999mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-1.2999720000000252mm" pcbY="0.8499919999999292mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6499860000001263mm" pcbY="0.8499919999999292mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="0.8499919999999292mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6499860000000126mm" pcbY="0.8499919999999292mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.2999719999999115mm" pcbY="0.8499919999999292mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="3.1000700000000734mm" pcbY="0.7499159999999847mm" width="2.0999958mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-3.1000700000000734mm" pcbY="0.7499159999999847mm" width="2.0999958mm" height="1.5999967999999998mm" shape="rect" />
<silkscreenpath route={[{"x":-3.8199822000000268,"y":-3.974992000000043},{"x":-3.8199822000000268,"y":-4.044994400000064},{"x":-4.059986800000047,"y":-4.284998999999971},{"x":4.0899842000000035,"y":-4.284998999999971},{"x":4.0899842000000035,"y":-4.254976200000101},{"x":3.8099999999999454,"y":-3.974992000000043}]} />
<silkscreenpath route={[{"x":3.8099999999999454,"y":-0.2811715999999933},{"x":3.8099999999999454,"y":-3.974992000000043},{"x":-3.629990199999952,"y":-3.974992000000043},{"x":-3.8199822000000268,"y":-3.974992000000043},{"x":-3.8199822000000268,"y":-0.4150042000001122}]} />
<silkscreenpath route={[{"x":-1.731111599999963,"y":1.1750104000000192},{"x":-1.910003799999913,"y":1.1750104000000192}]} />
<silkscreenpath route={[{"x":1.731111599999963,"y":1.1750104000000192},{"x":1.8188432000000603,"y":1.1750104000000192}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c0341940de5248859679066b0cadacb5&pn=C397452",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.1969940000001316, z: -1.049989999999991 },
      }}
      {...props}
    />
  )
}