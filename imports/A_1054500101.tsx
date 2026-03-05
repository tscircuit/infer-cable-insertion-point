import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["A2"],
  pin3: ["A3"],
  pin4: ["A4"],
  pin5: ["A5"],
  pin6: ["A6"],
  pin7: ["A7"],
  pin8: ["A8"],
  pin9: ["A9"],
  pin10: ["A10"],
  pin11: ["A11"],
  pin12: ["A12"],
  pin13: ["B12"],
  pin14: ["B11"],
  pin15: ["B10"],
  pin16: ["B9"],
  pin17: ["B8"],
  pin18: ["B7"],
  pin19: ["B6"],
  pin20: ["B5"],
  pin21: ["B4"],
  pin22: ["B3"],
  pin23: ["B2"],
  pin24: ["B1"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"]
} as const

export const A_1054500101 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C134092"
  ]
}}
      manufacturerPartNumber="A_1054500101"
      footprint={<footprint>
        <platedhole  portHints={["pin25"]} pcbX="4.320031999999969mm" pcbY="2.2749573999999484mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin26"]} pcbX="-4.320032000000083mm" pcbY="2.2749573999999484mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin27"]} pcbX="-4.320032000000083mm" pcbY="-3.0849505999999565mm" holeWidth="0.5999987999999999mm" holeHeight="2.1999956mm" outerWidth="0.9999979999999999mm" outerHeight="2.5999947999999997mm" shape="pill" />
<platedhole  portHints={["pin28"]} pcbX="4.320031999999969mm" pcbY="-3.0849505999999565mm" holeWidth="0.5999987999999999mm" holeHeight="2.1999956mm" outerWidth="0.9999979999999999mm" outerHeight="2.5999947999999997mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-2.999994000000015mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.499867999999992mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.99999600000001mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.4998700000001008mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.9999979999998914mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.4998720000000958mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.5001260000000229mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.9999979999998914mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.5001239999999143mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.9999959999998964mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.5001219999999194mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.999994000000015mm" pcbY="2.7349514mm" width="0.29999939999999997mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-3.1000700000000734mm" pcbY="1.3849414000000024mm" width="0.9999979999999999mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-2.249932000000058mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.7500600000000759mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.249934000000053mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.7500619999999572mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-0.2499359999999342mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.24993599999982052mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.7500619999999572mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="1.2499339999999393mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="1.7500599999999622mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.249932000000058mm" pcbY="1.3849414000000024mm" width="0.29999939999999997mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="3.1000700000000734mm" pcbY="1.3849414000000024mm" width="0.9999979999999999mm" height="0.6999986mm" shape="rect" />
<silkscreenpath route={[{"x":4.319981200000029,"y":-4.855025800000021},{"x":-4.319981199999916,"y":-4.855025800000021}]} />
<silkscreenpath route={[{"x":-3.488893200000007,"y":2.299976400000105},{"x":-3.376371199999994,"y":2.299976400000105}]} />
<silkscreenpath route={[{"x":-0.12151360000007116,"y":2.299976400000105},{"x":0.12565380000000914,"y":2.299976400000105}]} />
<silkscreenpath route={[{"x":3.3784793999999465,"y":2.299976400000105},{"x":3.488893199999893,"y":2.299976400000105}]} />
<silkscreenpath route={[{"x":4.319981200000029,"y":0.9438196000000971},{"x":4.319981200000029,"y":-1.6038257999998677}]} />
<silkscreenpath route={[{"x":4.319981200000029,"y":-4.5660753999999315},{"x":4.319981200000029,"y":-4.855025800000021}]} />
<silkscreenpath route={[{"x":-4.319981199999916,"y":-4.855025800000021},{"x":-4.319981199999916,"y":-4.5660753999999315}]} />
<silkscreenpath route={[{"x":-4.319981199999916,"y":-1.6038257999998677},{"x":-4.319981199999916,"y":0.9438196000000971}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=753ec1c05a40429c836855bddae44cbc&pn=C134092",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 0, y: -1.1000168000000485, z: -2.334950599999968 },
      }}
      {...props}
    />
  )
}