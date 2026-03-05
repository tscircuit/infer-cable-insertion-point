import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND1"],
  pin6: ["GND2"],
  pin7: ["GND3"],
  pin8: ["pin6_alt1"],
  pin9: ["pin7_alt1"]
} as const

export const MICRO_QTZB5_5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2681557"
  ]
}}
      manufacturerPartNumber="MICRO_QTZB5_5"
      footprint={<footprint>
        <hole pcbX="-1.99999600000001mm" pcbY="0.5240718500001549mm" diameter="0.700024mm" />
<hole pcbX="1.99999600000001mm" pcbY="0.5240718500001549mm" diameter="0.700024mm" />
<smtpad portHints={["pin1"]} pcbX="-1.2999720000000252mm" pcbY="1.474031850000074mm" width="0.39999919999999994mm" height="1.524mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6499860000000126mm" pcbY="1.474031850000074mm" width="0.39999919999999994mm" height="1.524mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.1368683772161603e-13mm" pcbY="1.474031850000074mm" width="0.39999919999999994mm" height="1.524mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6499860000000126mm" pcbY="1.474031850000074mm" width="0.39999919999999994mm" height="1.524mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.2999719999999115mm" pcbY="1.474031850000074mm" width="0.39999919999999994mm" height="1.524mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-3.1498540000001185mm" pcbY="0.8240458500000614mm" width="0.9999979999999999mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="3.1501079999998183mm" pcbY="0.8240458500000614mm" width="0.9999979999999999mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-3.450082000000066mm" pcbY="-1.6260381499998857mm" width="1.499997mm" height="1.2199874mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="3.450081999999952mm" pcbY="-1.6260381499998857mm" width="1.499997mm" height="1.2199874mm" shape="rect" />
<silkscreenpath route={[{"x":3.700018,"y":1.549622250000084},{"x":3.700018,"y":1.5750222500000746},{"x":1.7311623999999028,"y":1.5750222500000746}]} />
<silkscreenpath route={[{"x":3.700018,"y":-0.7848409499998752},{"x":3.700018,"y":0.09841864999998506}]} />
<silkscreenpath route={[{"x":3.700018,"y":-4.175969549999877},{"x":3.700018,"y":-2.4671337499999026}]} />
<silkscreenpath route={[{"x":-3.69996720000006,"y":1.549622250000084},{"x":-3.69996720000006,"y":1.5750222500000746},{"x":-1.7311116000000766,"y":1.5750222500000746}]} />
<silkscreenpath route={[{"x":-3.69996720000006,"y":-0.7848155499998484},{"x":-3.69996720000006,"y":0.09841864999998506}]} />
<silkscreenpath route={[{"x":-3.69996720000006,"y":-4.175969549999877},{"x":-3.69996720000006,"y":-2.467108349999876}]} />
<silkscreenpath route={[{"x":3.700018,"y":-4.175969549999877},{"x":-3.69996720000006,"y":-4.175969549999877}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=b313fc44ea344d1cb5218f92d552fe47&pn=C2681557",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.1368683772161603e-13, y: -1.3620051499998453, z: -1.4360318499999607 },
      }}
      {...props}
    />
  )
}