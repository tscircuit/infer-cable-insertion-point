import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EH1"],
  pin2: ["pin1_alt1"],
  pin3: ["B12"],
  pin4: ["B9"],
  pin5: ["A5"],
  pin6: ["B5"],
  pin7: ["A9"],
  pin8: ["A12"]
} as const

export const TYPE_C_6P_LTH6_5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5187463"
  ]
}}
      manufacturerPartNumber="TYPE_C_6P_LTH6_5"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="4.320032000000083mm" pcbY="-0.792479999999955mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-4.320032000000083mm" pcbY="-0.792479999999955mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-2.7000199999998813mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.4998699999998735mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.4998719999999821mm" pcbY="0mm" width="0.6999986mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.5001260000000229mm" pcbY="0mm" width="0.6999986mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.5001240000001417mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.7000200000001087mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<silkscreenpath route={[{"x":3.331133799999975,"y":0.5074920000000702},{"x":4.450003800000104,"y":0.5074920000000702}]} />
<silkscreenpath route={[{"x":-4.44997839999985,"y":0.5074920000000702},{"x":-3.3311337999998614,"y":0.5074920000000702}]} />
<silkscreenpath route={[{"x":-4.462627600000019,"y":-1.900555000000054},{"x":-4.396952607410071,"y":-2.1360234466010297},{"x":-4.2669786740456175,"y":-2.3430629854387917},{"x":-4.0834557770529045,"y":-2.5045496420880227},{"x":-3.8615628596046463,"y":-2.6071270625210445},{"x":-3.61965239999995,"y":-2.6423111999999946}]} />
<silkscreenpath route={[{"x":4.463338799999974,"y":-1.9005296000000271},{"x":4.3976690943082986,"y":-2.13600411302059},{"x":4.267697413986298,"y":-2.3430502886490103},{"x":4.084173938845424,"y":-2.5045429838405653},{"x":3.8622782091704266,"y":-2.6071248617720357},{"x":3.6203636000000188,"y":-2.6423111999999946}]} />
<silkscreenpath route={[{"x":-3.61965239999995,"y":-2.6423111999999946},{"x":3.6203636000000188,"y":-2.6423111999999946}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=b40c294dd0d44e0cb070d3fd13fd778e&pn=C5187463",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.0292588000000933, z: -0.199998000000005 },
      }}
      {...props}
    />
  )
}