import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["V_POS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["V_NEG"],
  pin6: ["SH2"],
  pin7: ["SH1"],
  pin8: ["SH0"],
  pin9: ["SH3"]
} as const

export const A_920_E52A2021S10100 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C10418"
  ]
}}
      manufacturerPartNumber="A_920_E52A2021S10100"
      footprint={<footprint>
        <platedhole  portHints={["pin6"]} pcbX="3.5999419999999986mm" pcbY="-1.5999903999999958mm" holeWidth="0.5000243999999999mm" holeHeight="1.3000227999999998mm" outerWidth="1.0999978mm" outerHeight="1.8999962mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-3.5999419999999986mm" pcbY="-1.5999903999999958mm" holeWidth="0.5000243999999999mm" holeHeight="1.3000227999999998mm" outerWidth="1.0999978mm" outerHeight="1.8999962mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="-2.4249379999999974mm" pcbY="1.0499916000000127mm" outerDiameter="1.1999975999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="2.424937999999983mm" pcbY="1.0499916000000127mm" outerDiameter="1.1999975999999999mm" holeDiameter="0.700024mm" shape="circle" />
<smtpad portHints={["pin5"]} pcbX="1.2999719999999968mm" pcbY="1.0247439999999983mm" width="0.39999919999999994mm" height="1.2500101999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6499859999999984mm" pcbY="1.0247439999999983mm" width="0.39999919999999994mm" height="1.2500101999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.4210854715202004e-14mm" pcbY="1.0247439999999983mm" width="0.39999919999999994mm" height="1.2500101999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6499859999999984mm" pcbY="1.0247439999999983mm" width="0.39999919999999994mm" height="1.2500101999999997mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.299972000000011mm" pcbY="1.0247439999999983mm" width="0.39999919999999994mm" height="1.2500101999999997mm" shape="rect" />
<silkscreenpath route={[{"x":3.7500051999999897,"y":-2.739002599999992},{"x":3.7500051999999897,"y":-3.7249544000000014}]} />
<silkscreenpath route={[{"x":3.1804355999999956,"y":1.324997400000015},{"x":3.7500051999999897,"y":1.324997400000015},{"x":3.7500051999999897,"y":-0.46097819999999956}]} />
<silkscreenpath route={[{"x":-3.7499798000000055,"y":-2.739002599999992},{"x":-3.7499798000000055,"y":-3.7249544000000014}]} />
<silkscreenpath route={[{"x":-3.18043560000001,"y":1.324997400000015},{"x":-3.7499798000000055,"y":1.324997400000015},{"x":-3.7499798000000055,"y":-0.46097819999999956}]} />
<silkscreenpath route={[{"x":-3.750056000000015,"y":-3.7249544000000014},{"x":-3.99999200000002,"y":-4.3749404},{"x":-3.750056000000015,"y":-4.3749404},{"x":-3.5001200000000097,"y":-3.774992400000002},{"x":-3.199993599999999,"y":-3.774992400000002},{"x":-3.099993800000007,"y":-3.9250047999999964},{"x":-3.1000700000000023,"y":-4.3749404},{"x":3.100069999999988,"y":-4.3749404},{"x":3.100069999999988,"y":-3.9748903999999925},{"x":3.1998919999999913,"y":-3.774992400000002},{"x":3.5001199999999955,"y":-3.774992400000002},{"x":3.800093999999987,"y":-4.3749404},{"x":3.9999919999999918,"y":-4.3749404},{"x":3.7500559999999865,"y":-3.7249544000000014}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=8d98bdb22dfe41cea8df3303517703a8&pn=C10418",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: -1.4210854715202004e-14, y: -1.5713645999999954, z: -0.8499904 },
      }}
      {...props}
    />
  )
}