import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["GND6"],
  pin14: ["GND5"],
  pin15: ["GND4"],
  pin16: ["GND3"],
  pin17: ["B1A12"],
  pin18: ["B4A9"],
  pin19: ["B5"],
  pin20: ["A8"],
  pin21: ["B6"],
  pin22: ["A7"],
  pin23: ["A6"],
  pin24: ["B7"],
  pin25: ["A5"],
  pin26: ["B8"],
  pin27: ["A4B9"],
  pin28: ["A1B12"]
} as const

export const TYPEC_304J_BCP16 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2835315"
  ]
}}
      manufacturerPartNumber="TYPEC_304J_BCP16"
      footprint={<footprint>
        <hole pcbX="2.890139000000204mm" pcbY="0.9561893999999711mm" diameter="0.6499860000000001mm" />
<hole pcbX="-2.889884999999822mm" pcbY="0.9561893999999711mm" diameter="0.6499860000000001mm" />
<platedhole  portHints={["pin16"]} pcbX="4.324985000000083mm" pcbY="-2.743828600000029mm" holeWidth="0.5999987999999999mm" holeHeight="1.499997mm" outerWidth="0.9999979999999999mm" outerHeight="1.8999962mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="-4.32498499999997mm" pcbY="-2.743828600000029mm" holeWidth="0.5999987999999999mm" holeHeight="1.499997mm" outerWidth="0.9999979999999999mm" outerHeight="1.8999962mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="4.324985000000083mm" pcbY="1.4560613999999532mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin13"]} pcbX="-4.32498499999997mm" pcbY="1.4560613999999532mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="3.200019000000111mm" pcbY="2.2188234000000193mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.399919000000068mm" pcbY="2.2188234000000193mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.7499330000001692mm" pcbY="2.2188234000000193mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="1.250061000000187mm" pcbY="2.2188234000000193mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.7499350000001641mm" pcbY="2.2188234000000193mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="0.2500630000000683mm" pcbY="2.2188234000000193mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.2498089999999138mm" pcbY="2.2188234000000193mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-0.7499349999999367mm" pcbY="2.2188234000000193mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-1.2498069999998052mm" pcbY="2.2188234000000193mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-1.749932999999828mm" pcbY="2.2188234000000193mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.3999189999999544mm" pcbY="2.2188234000000193mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-3.20001899999977mm" pcbY="2.2188234000000193mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<silkscreenpath route={[{"x":4.399991200000159,"y":-1.5666148000001385},{"x":4.399991200000159,"y":0.17879699999980403}]} />
<silkscreenpath route={[{"x":4.399991200000159,"y":-5.3438996000001},{"x":4.399991200000159,"y":-3.921194800000194}]} />
<silkscreenpath route={[{"x":-4.399991199999931,"y":-1.5666148000001385},{"x":-4.399991199999931,"y":0.17879699999980403}]} />
<silkscreenpath route={[{"x":-4.399991199999931,"y":-5.3438996000001},{"x":-4.399991199999931,"y":-3.921194800000194}]} />
<silkscreenpath route={[{"x":-4.399991199999931,"y":-5.3438996000001},{"x":4.399991200000159,"y":-5.3438996000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=940ff860f93e40919354956f39674985&pn=C2835315",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 2.2737367544323206e-13, y: -1.4124876000000768, z: -1.9938285999999834 },
      }}
      {...props}
    />
  )
}