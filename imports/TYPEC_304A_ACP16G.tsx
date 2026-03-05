import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin25: ["EH2"],
  pin26: ["EH1"],
  pin27: ["EH3"],
  pin28: ["EH4"],
  pin29: ["A12"],
  pin30: ["B1"],
  pin31: ["A9"],
  pin32: ["B4"],
  pin33: ["B5"],
  pin34: ["A8"],
  pin35: ["B6"],
  pin36: ["A7"],
  pin37: ["A6"],
  pin38: ["B7"],
  pin39: ["A5"],
  pin40: ["B8"],
  pin41: ["B9"],
  pin42: ["A4"],
  pin43: ["B12"],
  pin44: ["A1"]
} as const

export const TYPEC_304A_ACP16G = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2909608"
  ]
}}
      manufacturerPartNumber="TYPEC_304A_ACP16G"
      footprint={<footprint>
        <hole pcbX="-2.890011999999956mm" pcbY="1.045470400000113mm" diameter="0.6499860000000001mm" />
<hole pcbX="2.8900119999998424mm" pcbY="1.045470400000113mm" diameter="0.6499860000000001mm" />
<platedhole  portHints={["pin26"]} pcbX="4.320031999999969mm" pcbY="-2.63498960000004mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="4.320031999999969mm" pcbY="1.5450883999999405mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin27"]} pcbX="-4.320032000000083mm" pcbY="-2.63498960000004mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin28"]} pcbX="-4.320032000000083mm" pcbY="1.5450883999999405mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="3.350005999999894mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="3.0500319999999874mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="2.5499059999999645mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="2.2499319999999443mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="1.7500599999999622mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="1.2499339999999393mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="0.7500620000000708mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="0.2499360000000479mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-0.2499359999999342mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-0.7500620000000708mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-1.249934000000053mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-1.7500600000000759mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-2.2499319999999443mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-2.549906000000078mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-3.050032000000101mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-3.3500060000000076mm" pcbY="2.1099843999999166mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<silkscreenpath route={[{"x":4.470019000000093,"y":-1.5194724000000406},{"x":4.470019000000093,"y":0.2794825999999375}]} />
<silkscreenpath route={[{"x":4.470019000000093,"y":-5.234577999999942},{"x":4.470019000000093,"y":-3.750506800000039}]} />
<silkscreenpath route={[{"x":-4.469968199999926,"y":-1.5194470000001274},{"x":-4.469968199999926,"y":0.2794572000000244}]} />
<silkscreenpath route={[{"x":-4.469968199999926,"y":-5.234577999999942},{"x":-4.469968199999926,"y":-3.750532200000066}]} />
<silkscreenpath route={[{"x":-4.469968199999926,"y":-5.234577999999942},{"x":4.470019000000093,"y":-5.234577999999942}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=73862176508e4c58a6f64af27e8c7915&pn=C2909608",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 1.1368683772161603e-13, y: -1.4334680000000617, z: -1.8849895999999375 },
      }}
      {...props}
    />
  )
}