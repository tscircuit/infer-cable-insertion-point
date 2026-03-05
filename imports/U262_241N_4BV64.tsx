import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["B12"],
  pin6: ["B11"],
  pin7: ["B10"],
  pin8: ["B9"],
  pin9: ["B8"],
  pin10: ["B7"],
  pin11: ["B6"],
  pin12: ["B5"],
  pin13: ["B4"],
  pin14: ["B3"],
  pin15: ["B2"],
  pin16: ["B1"],
  pin17: ["A12"],
  pin18: ["A11"],
  pin19: ["A10"],
  pin20: ["A9"],
  pin21: ["A8"],
  pin22: ["A7"],
  pin23: ["A6"],
  pin24: ["A5"],
  pin25: ["A4"],
  pin26: ["A3"],
  pin27: ["A2"],
  pin28: ["A1"]
} as const

export const U262_241N_4BV64 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C388660"
  ]
}}
      manufacturerPartNumber="U262_241N_4BV64"
      footprint={<footprint>
        <hole pcbX="-3.4000440000000935mm" pcbY="0.3499294999999165mm" diameter="0.5000243999999999mm" />
<hole pcbX="3.400043999999866mm" pcbY="0.3499294999999165mm" diameter="0.5000243999999999mm" />
<platedhole  portHints={["pin1"]} pcbX="-4.191000000000031mm" pcbY="1.6798734999997578mm" holeWidth="1.3000228mm" holeHeight="1.700022mm" outerWidth="1.7999964mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-4.320032000000083mm" pcbY="-2.8499625000000606mm" holeWidth="1.7999964mm" holeHeight="0.5999987999999999mm" outerWidth="2.3999951999999998mm" outerHeight="1.1999975999999999mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="4.320031999999969mm" pcbY="-2.8499625000000606mm" holeWidth="1.7999964mm" holeHeight="0.5999987999999999mm" outerWidth="2.3999951999999998mm" outerHeight="1.1999975999999999mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="4.190999999999917mm" pcbY="1.6798734999997578mm" holeWidth="1.3000228mm" holeHeight="1.700022mm" outerWidth="1.7999964mm" outerHeight="2.1999956mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-2.8750260000001617mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.374900000000025mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.875028000000043mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.37490200000002mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.8750300000001516mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.37515799999994215mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.12496799999985342mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.62509399999999mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.1249659999999722mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.625091999999995mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.124963999999977mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="2.6250899999998865mm" pcbY="1.0502074999998285mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.8750259999999344mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.3748999999999114mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.8750279999999293mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="1.3749019999999064mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.8750300000000379mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="0.374904000000015mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.12496800000008079mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-0.6250940000001037mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-1.1249660000000858mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-1.624838000000068mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.1249640000002046mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-2.6248359999999593mm" pcbY="2.399963499999899mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-2.9264356000001044,"y":2.450001499999871},{"x":-3.6216082000000824,"y":2.450001499999871}]} />
<silkscreenpath route={[{"x":-4.499991000000136,"y":0.36100389999990057},{"x":-4.499991000000136,"y":-1.3481367000001683}]} />
<silkscreenpath route={[{"x":-4.469053800000097,"y":-5.550007900000196},{"x":4.473295599999915,"y":-5.550007900000196},{"x":4.5000164000000495,"y":-5.523287100000061}]} />
<silkscreenpath route={[{"x":4.5000164000000495,"y":-5.523287100000061},{"x":4.5000164000000495,"y":-4.2626851000001125}]} />
<silkscreenpath route={[{"x":4.5000164000000495,"y":0.3883342999998831},{"x":4.5000164000000495,"y":-1.4273085000002084}]} />
<silkscreenpath route={[{"x":3.148202999999853,"y":2.450001499999871},{"x":3.613861199999974,"y":2.450001499999871}]} />
<silkscreenpath route={[{"x":-4.469053800000097,"y":-5.550007900000196},{"x":-4.469053800000097,"y":-4.289024900000186}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2f728cc7b6344648ac1a54fe6cfd8e47&pn=C388660",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: -1.1368683772161603e-13, y: -1.5250223000001597, z: -2.0999624999999584 },
      }}
      {...props}
    />
  )
}