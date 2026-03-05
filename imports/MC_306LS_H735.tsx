import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SHELL1"],
  pin2: ["SHELL2"],
  pin3: ["B12"],
  pin4: ["B9"],
  pin5: ["A5"],
  pin6: ["B5"],
  pin7: ["A9"],
  pin8: ["A12"]
} as const

export const MC_306LS_H735 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C6332266"
  ]
}}
      manufacturerPartNumber="MC_306LS_H735"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-4.320032000000083mm" pcbY="0.7797799999999597mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="4.320031999999969mm" pcbY="0.7797799999999597mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-2.700019999999995mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.4998699999999872mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.4998720000000958mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.5001260000000229mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.500124000000028mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.700019999999995mm" pcbY="0mm" width="0.7999983999999999mm" height="1.9999959999999999mm" shape="rect" />
<silkscreenpath route={[{"x":4.318050800000037,"y":1.8610834000000978},{"x":4.318050800000037,"y":2.8029153999999608},{"x":0.8890508000000636,"y":2.8029153999999608}]} />
<silkscreenpath route={[{"x":3.3311846000000287,"y":-0.7530846000000793},{"x":4.318050800000037,"y":-0.7530846000000793},{"x":4.318050800000037,"y":-0.301193200000057}]} />
<silkscreenpath route={[{"x":-4.31794919999993,"y":-0.301193200000057},{"x":-4.31794919999993,"y":-0.7530846000000793},{"x":-3.331083000000035,"y":-0.7530846000000793}]} />
<silkscreenpath route={[{"x":-0.7619492000000037,"y":2.8029153999999608},{"x":-4.31794919999993,"y":2.8029153999999608},{"x":-4.31794919999993,"y":1.8610834000000978}]} />
<silkscreenpath route={[{"x":-0.7619492000000037,"y":2.8029153999999608},{"x":0.8890508000000636,"y":2.8029153999999608}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=6f90a27cf104498487c9dbd4476020ba&pn=C6332266",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.00005079999993995443, y: 0.989888800000017, z: -0.199998000000005 },
      }}
      {...props}
    />
  )
}