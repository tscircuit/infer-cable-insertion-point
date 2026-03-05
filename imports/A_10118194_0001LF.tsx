import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["Data_NEG"],
  pin3: ["Data_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["S1"],
  pin7: ["pin6_alt1"],
  pin8: ["pin6_alt1"],
  pin9: ["pin6_alt1"]
} as const

export const A_10118194_0001LF = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C132563"
  ]
}}
      manufacturerPartNumber="A_10118194_0001LF"
      footprint={<footprint>
        <platedhole  portHints={["pin6"]} pcbX="2.499995000000027mm" pcbY="1.0375075000000038mm" holeWidth="0.8500363999999998mm" holeHeight="0.5500115999999999mm" outerWidth="1.2500101999999997mm" outerHeight="0.9499853999999999mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-2.499994999999984mm" pcbY="1.0375075000000038mm" holeWidth="0.8500363999999998mm" holeHeight="0.5500115999999999mm" outerWidth="1.2500101999999997mm" outerHeight="0.9499853999999999mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="-3.4999929999999893mm" pcbY="-1.6625125000000054mm" holeWidth="0.4999735999999999mm" holeHeight="1.0499851999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.5500095999999999mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="3.4999930000000035mm" pcbY="-1.6625125000000054mm" holeWidth="0.4999735999999999mm" holeHeight="1.0499851999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.5500095999999999mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-0.00012699999997778377mm" pcbY="1.0375075000000038mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6501130000000188mm" pcbY="1.0375075000000038mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.3003530000000154mm" pcbY="1.0375075000000038mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6503669999999744mm" pcbY="1.0375075000000038mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.3006069999999852mm" pcbY="1.0375075000000038mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<silkscreenpath route={[{"x":4.099433000000005,"y":-1.1295188999999937},{"x":4.099433000000005,"y":0.5879275000000064}]} />
<silkscreenpath route={[{"x":4.099433000000005,"y":-3.811352499999998},{"x":4.099433000000005,"y":-2.195506100000003}]} />
<silkscreenpath route={[{"x":-3.3503869999999836,"y":1.286427500000002},{"x":-3.799966999999981,"y":1.286427500000002},{"x":-4.099686999999989,"y":0.9384475000000094},{"x":-4.099686999999989,"y":0.6387275000000017}]} />
<silkscreenpath route={[{"x":-4.099686999999989,"y":-1.1301284999999837},{"x":-4.099686999999989,"y":0.6387275000000017}]} />
<silkscreenpath route={[{"x":-4.099686999999989,"y":-3.8621525000000076},{"x":-4.099686999999989,"y":-2.1948964999999987}]} />
<silkscreenpath route={[{"x":-3.449446999999978,"y":-4.413332499999996},{"x":3.8100000000000023,"y":-4.413332499999996}]} />
<silkscreenpath route={[{"x":-4.099686999999989,"y":-3.8621525000000076},{"x":-4.099686999999989,"y":-4.413332499999996},{"x":-3.449446999999978,"y":-4.413332499999996}]} />
<silkscreenpath route={[{"x":4.099433000000005,"y":-3.811352499999998},{"x":4.099433000000005,"y":-4.413332499999996},{"x":3.700653000000017,"y":-4.413332499999996}]} />
<silkscreenpath route={[{"x":3.5990530000000263,"y":1.286427500000002},{"x":4.099433000000005,"y":1.286427500000002},{"x":4.099433000000005,"y":0.5879275000000064}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f4160fa25fe74ef4b93ccd5565bda7b1&pn=C132563",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 1.4210854715202004e-14, y: -1.567491099999998, z: -0.9125125000000025 },
      }}
      {...props}
    />
  )
}