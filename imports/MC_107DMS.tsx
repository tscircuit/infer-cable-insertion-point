import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["EH1"],
  pin14: ["EH4"],
  pin15: ["EH3"],
  pin16: ["EH2"],
  pin17: ["B5"],
  pin18: ["A8"],
  pin19: ["B6"],
  pin20: ["A7"],
  pin21: ["A6"],
  pin22: ["B7"],
  pin23: ["A5"],
  pin24: ["B8"],
  pin25: ["A4/B9"],
  pin26: ["A1/B12"],
  pin27: ["B4/A9"],
  pin28: ["B1/A12"]
} as const

export const MC_107DMS = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3039295"
  ]
}}
      manufacturerPartNumber="MC_107DMS"
      footprint={<footprint>
        <hole pcbX="-2.8898849999999356mm" pcbY="1.0454703999999992mm" diameter="0.7500111999999999mm" />
<hole pcbX="2.8898850000000493mm" pcbY="1.0454703999999992mm" diameter="0.7500111999999999mm" />
<platedhole  portHints={["pin13"]} pcbX="-4.3199050000000625mm" pcbY="1.5450883999999405mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="4.3199050000000625mm" pcbY="1.5450883999999405mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="4.3199050000000625mm" pcbY="-2.63498960000004mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="-4.3199050000000625mm" pcbY="-2.63498960000004mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="1.7501870000000963mm" pcbY="2.1099844000000303mm" width="0.25001219999999996mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.2498069999999188mm" pcbY="2.1099844000000303mm" width="0.25001219999999996mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.7501889999999776mm" pcbY="2.1099844000000303mm" width="0.25001219999999996mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.2500629999999546mm" pcbY="2.1099844000000303mm" width="0.25001219999999996mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.2498089999999138mm" pcbY="2.1099844000000303mm" width="0.25001219999999996mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.7499349999999367mm" pcbY="2.1099844000000303mm" width="0.25001219999999996mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.2498069999999188mm" pcbY="2.1099844000000303mm" width="0.25001219999999996mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.7499330000000555mm" pcbY="2.1099844000000303mm" width="0.25001219999999996mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-2.3996649999999136mm" pcbY="2.1099844000000303mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-3.199764999999843mm" pcbY="2.1099844000000303mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="2.4001729999999952mm" pcbY="2.1099844000000303mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="3.200018999999884mm" pcbY="2.1099844000000303mm" width="0.5999987999999999mm" height="1.1500103999999998mm" shape="rect" />
<silkscreenpath route={[{"x":4.500092600000016,"y":-1.526457399999913},{"x":4.500092600000016,"y":0.28646760000003724}]} />
<silkscreenpath route={[{"x":4.500092600000016,"y":-5.117509400000017},{"x":4.500092600000016,"y":-3.743521800000053}]} />
<silkscreenpath route={[{"x":-4.499889399999915,"y":-1.5264065999998593},{"x":-4.499889399999915,"y":0.2864168000000973}]} />
<silkscreenpath route={[{"x":-4.499889399999915,"y":-5.117509400000017},{"x":-4.499889399999915,"y":-3.743572599999993}]} />
<silkscreenpath route={[{"x":4.500092600000016,"y":-5.117509400000017},{"x":-4.499889399999915,"y":-5.117509400000017}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2d7ba6d538474931a3a1f32f98706003&pn=C3039295",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.1368683772161603e-13, y: -1.4625001999999085, z: -1.8849895999999944 },
      }}
      {...props}
    />
  )
}