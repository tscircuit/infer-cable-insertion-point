import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["EH1"],
  pin6: ["EH2"]
} as const

export const AF_QTZB1_0 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C668590"
  ]
}}
      manufacturerPartNumber="AF_QTZB1_0"
      footprint={<footprint>
        <hole pcbX="-2.499867999999992mm" pcbY="-2.1250021000000743mm" diameter="1.3000228mm" />
<hole pcbX="2.500122000000033mm" pcbY="-2.1250021000000743mm" diameter="1.3000228mm" />
<smtpad portHints={["pin1"]} pcbX="-3.4998659999999973mm" pcbY="1.5750158999999258mm" width="1.0999978mm" height="3.7999924mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.9999979999997777mm" pcbY="1.5750158999999258mm" width="1.0999978mm" height="3.7999924mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.999998000000005mm" pcbY="1.5750158999999258mm" width="1.0999978mm" height="3.7999924mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="3.499866000000111mm" pcbY="1.5750158999999258mm" width="1.0999978mm" height="3.7999924mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="7.150100000000066mm" pcbY="-1.475016099999948mm" width="1.7999964mm" height="3.9999919999999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-7.150099999999952mm" pcbY="-1.475016099999948mm" width="1.7999964mm" height="3.9999919999999998mm" shape="rect" />
<silkscreenpath route={[{"x":4.2811446000000615,"y":1.5499968999998828},{"x":6.600012200000037,"y":1.5499968999998828}]} />
<silkscreenpath route={[{"x":1.7811496000000488,"y":1.5499968999998828},{"x":2.7188414000000876,"y":1.5499968999998828}]} />
<silkscreenpath route={[{"x":-0.21884639999996125,"y":1.5499968999998828},{"x":0.21884640000018862,"y":1.5499968999998828}]} />
<silkscreenpath route={[{"x":-2.71884139999986,"y":1.5499968999998828},{"x":-1.7811495999999352,"y":1.5499968999998828}]} />
<silkscreenpath route={[{"x":-6.600012199999924,"y":0.7561452999998437},{"x":-6.600012199999924,"y":1.5499968999998828},{"x":-4.281144599999834,"y":1.5499968999998828}]} />
<silkscreenpath route={[{"x":6.600012200000037,"y":-3.706126700000027},{"x":6.600012200000037,"y":-12.450000500000101},{"x":-6.600012199999924,"y":-12.450000500000101},{"x":-6.600012199999924,"y":-3.706126700000027}]} />
<silkscreenpath route={[{"x":6.600012200000037,"y":1.5499968999998828},{"x":6.600012200000037,"y":0.7561452999998437}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=1f2a309de3e2426f861aa4ef1d53669b&pn=C668590",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 1.1368683772161603e-13, y: -5.049989900000014, z: -2.6750120999999583 },
      }}
      {...props}
    />
  )
}