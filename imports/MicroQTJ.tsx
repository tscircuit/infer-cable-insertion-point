import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["SH1"],
  pin7: ["SH2"],
  pin8: ["SH3"],
  pin9: ["SH4"]
} as const

export const MicroQTJ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C404968"
  ]
}}
      manufacturerPartNumber="MicroQTJ"
      footprint={<footprint>
        <hole pcbX="1.9997419999999693mm" pcbY="0.5479922999998053mm" diameter="0.5500116mm" />
<hole pcbX="-2.0002500000001646mm" pcbY="0.5479922999998053mm" diameter="0.5500116mm" />
<smtpad portHints={["pin8"]} pcbX="3.199891999999977mm" pcbY="-1.6023717000000488mm" width="1.9999959999999999mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-3.1998920000000908mm" pcbY="-1.6023717000000488mm" width="1.9999959999999999mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-3.1998920000000908mm" pcbY="0.7517002999999249mm" width="1.5999967999999998mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="3.199891999999977mm" pcbY="0.7517002999999249mm" width="1.5999967999999998mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.3004800000002206mm" pcbY="1.3023723000000018mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6502400000000534mm" pcbY="1.3023723000000018mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.1368683772161603e-13mm" pcbY="1.3023723000000018mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6502399999998261mm" pcbY="1.3023723000000018mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.3004799999997658mm" pcbY="1.3023723000000018mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<silkscreenpath route={[{"x":3.9903399999999465,"y":-4.018673700000136},{"x":4.376419999999939,"y":-4.437773700000093},{"x":4.0843199999998205,"y":-4.437773700000093},{"x":3.877563999999893,"y":-4.231017700000166},{"x":-3.9461440000001176,"y":-4.231017700000166},{"x":-4.20370000000014,"y":-4.488573699999961},{"x":-4.368800000000192,"y":-4.488573699999961},{"x":-4.368800000000192,"y":-4.437773700000093},{"x":-4.01066000000003,"y":-4.018673700000136}]} />
<silkscreenpath route={[{"x":-4.000500000000102,"y":1.4828392999999096},{"x":-1.757680000000164,"y":1.4828392999999096}]} />
<silkscreenpath route={[{"x":1.7576799999999366,"y":1.4828392999999096},{"x":4.0004999999998745,"y":1.4828392999999096}]} />
<silkscreenpath route={[{"x":4.0004999999998745,"y":-2.548166100000117},{"x":4.0004999999998745,"y":-4.140822300000082}]} />
<silkscreenpath route={[{"x":-4.000500000000102,"y":-2.548166100000117},{"x":-4.000500000000102,"y":-4.0188007000000425}]} />
<silkscreenpath route={[{"x":-4.000500000000102,"y":-2.548166100000117},{"x":-4.000500000000102,"y":-2.4834215000000768}]} />
<silkscreenpath route={[{"x":-4.000500000000102,"y":-0.7211187000000336},{"x":-4.000500000000102,"y":0.07059929999991255}]} />
<silkscreenpath route={[{"x":-4.000500000000102,"y":1.4328774999997904},{"x":-4.000500000000102,"y":1.4828392999999096}]} />
<silkscreenpath route={[{"x":4.0004999999998745,"y":-2.548166100000117},{"x":4.0004999999998745,"y":-2.4834215000000768}]} />
<silkscreenpath route={[{"x":4.0004999999998745,"y":-0.7211187000000336},{"x":4.0004999999998745,"y":0.07059929999991255}]} />
<silkscreenpath route={[{"x":4.0004999999998745,"y":1.4328774999997904},{"x":4.0004999999998745,"y":1.4828392999999096}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5c05e70db3db4f61a22a4806b6a829fa&pn=C404968",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.1368683772161603e-13, y: -1.6300069000001258, z: -1.5023703000000068 },
      }}
      {...props}
    />
  )
}