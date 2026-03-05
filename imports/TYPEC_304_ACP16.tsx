import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1B12"],
  pin2: ["A4B9"],
  pin3: ["B4A9"],
  pin4: ["B1A12"],
  pin5: ["B8"],
  pin6: ["A5"],
  pin7: ["B7"],
  pin8: ["A6"],
  pin9: ["A7"],
  pin10: ["B6"],
  pin11: ["A8"],
  pin12: ["B5"],
  pin13: ["EP1"],
  pin14: ["EP2"],
  pin15: ["EP3"],
  pin16: ["EP4"]
} as const

export const TYPEC_304_ACP16 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2982555"
  ]
}}
      manufacturerPartNumber="TYPEC_304_ACP16"
      footprint={<footprint>
        <hole pcbX="-2.899917999999957mm" pcbY="0.97739839999997mm" diameter="0.6499860000000001mm" />
<hole pcbX="2.8999180000000706mm" pcbY="0.9875584000001254mm" diameter="0.6499860000000001mm" />
<platedhole  portHints={["pin13"]} pcbX="-4.320031999999969mm" pcbY="1.477524399999993mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="4.320032000000083mm" pcbY="1.477524399999993mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="-4.320031999999969mm" pcbY="-2.6725816000000577mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="4.320032000000083mm" pcbY="-2.6725816000000577mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-3.2001459999999042mm" pcbY="2.147576400000048mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.400045999999975mm" pcbY="2.147576400000048mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="2.400046000000202mm" pcbY="2.147576400000048mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="3.1998920000000908mm" pcbY="2.147576400000048mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.7500599999998485mm" pcbY="2.147576400000048mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.2499339999999393mm" pcbY="2.147576400000048mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.7500619999999572mm" pcbY="2.147576400000048mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.2499359999999342mm" pcbY="2.147576400000048mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.24993600000016158mm" pcbY="2.147576400000048mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.7500620000000708mm" pcbY="2.147576400000048mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.2499339999999393mm" pcbY="2.147576400000048mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.7500600000000759mm" pcbY="2.147576400000048mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<silkscreenpath route={[{"x":-4.550028999999995,"y":-3.8025259999999435},{"x":-4.550028999999995,"y":-5.402522799999929},{"x":4.549952800000028,"y":-5.402522799999929},{"x":4.549952800000028,"y":-3.8525131999999758}]} />
<silkscreenpath route={[{"x":4.549952800000028,"y":-3.8712584000001016},{"x":1.5999460000000454,"y":-3.8712584000001016}]} />
<silkscreenpath route={[{"x":1.5999460000000454,"y":-1.4525180000000546},{"x":4.549952800000028,"y":-1.4525180000000546}]} />
<silkscreenpath route={[{"x":1.5999460000000454,"y":-1.4525180000000546},{"x":1.5999460000000454,"y":-3.751218000000108}]} />
<silkscreenpath route={[{"x":-4.250029599999834,"y":-1.4025308000000223},{"x":-2.0000467999998364,"y":-1.4025308000000223},{"x":-2.0000467999998364,"y":-3.8025259999999435},{"x":-4.550028999999995,"y":-3.8025259999999435}]} />
<silkscreenpath route={[{"x":1.550695399999995,"y":-0.25274899999999434},{"x":1.550695399999995,"y":-0.7528750000000173}]} />
<silkscreenpath route={[{"x":2.3507191999999577,"y":-0.25274899999999434},{"x":2.3507191999999577,"y":-0.7528750000000173}]} />
<silkscreenpath route={[{"x":1.0506963999998788,"y":-0.25274899999999434},{"x":1.0506963999998788,"y":-0.7528750000000173},{"x":2.800756400000182,"y":-0.7528750000000173},{"x":2.800756400000182,"y":-0.25274899999999434},{"x":1.1007598000001053,"y":-0.25274899999999434}]} />
<silkscreenpath route={[{"x":-3.1000446000000466,"y":-0.2525203999999803},{"x":-3.1000446000000466,"y":-0.7525193999999829},{"x":-1.3500354000000243,"y":-0.7525193999999829},{"x":-1.3500354000000243,"y":-0.2525203999999803},{"x":-3.0500319999999874,"y":-0.2525203999999803}]} />
<silkscreenpath route={[{"x":-1.8000471999999945,"y":-0.2525203999999803},{"x":-1.8000471999999945,"y":-0.7525193999999829}]} />
<silkscreenpath route={[{"x":-2.6000455999999303,"y":-0.2525203999999803},{"x":-2.6000455999999303,"y":-0.7525193999999829}]} />
<silkscreenpath route={[{"x":-4.550028999999995,"y":-0.2525203999999803},{"x":-4.550028999999995,"y":0.3285808000000543}]} />
<silkscreenpath route={[{"x":4.549952800000028,"y":-1.4836076000000276},{"x":4.549952800000028,"y":0.32860619999996743}]} />
<silkscreenpath route={[{"x":-4.550028999999995,"y":-0.2525203999999803},{"x":-4.550028999999995,"y":-1.4836076000000276}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=35beff8a356846508befd9cdc8a60fa9&pn=C2982555",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.3625004000001582, z: -1.9225816000000122 },
      }}
      {...props}
    />
  )
}