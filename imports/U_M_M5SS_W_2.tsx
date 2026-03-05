import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["SHLD1"],
  pin7: ["SHLD2"],
  pin8: ["SHLD3"],
  pin9: ["SHLD4"]
} as const

export const U_M_M5SS_W_2 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C91144"
  ]
}}
      manufacturerPartNumber="U_M_M5SS_W_2"
      footprint={<footprint>
        <hole pcbX="-2.1996399999998175mm" pcbY="0.1497266500000478mm" diameter="0.9000236mm" />
<hole pcbX="2.199640000000045mm" pcbY="0.14998065000008864mm" diameter="0.9000236mm" />
<smtpad portHints={["pin6"]} pcbX="4.450080000000071mm" pcbY="-2.7999753499998405mm" width="1.4500098000000001mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-4.4500799999998435mm" pcbY="-2.7999753499998405mm" width="1.4500098000000001mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-4.4500799999998435mm" pcbY="2.7000136500000735mm" width="1.4500098000000001mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.448810000000094mm" pcbY="2.7000136500000735mm" width="1.4500098000000001mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.6103599999996732mm" pcbY="3.0499748500000123mm" width="0.49999899999999997mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.8102599999998574mm" pcbY="3.0499748500000123mm" width="0.49999899999999997mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.010159999999928004mm" pcbY="3.0499748500000123mm" width="0.49999899999999997mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.7899400000001151mm" pcbY="3.0499748500000123mm" width="0.49999899999999997mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.5900400000000445mm" pcbY="3.0499748500000123mm" width="0.49999899999999997mm" height="1.3999972mm" shape="rect" />
<silkscreenpath route={[{"x":-3.7999923999998373,"y":-1.6188245499998857},{"x":-3.7999923999998373,"y":1.5188628500001187}]} />
<silkscreenpath route={[{"x":3.7500052000000323,"y":-3.981100749999996},{"x":3.7500052000000323,"y":-5.775001149999866},{"x":-3.7999923999998373,"y":-5.775001149999866},{"x":-3.7999923999998373,"y":-3.981100749999996}]} />
<silkscreenpath route={[{"x":3.7500052000000323,"y":1.5188628500001187},{"x":3.7500052000000323,"y":-1.6188245499998857}]} />
<silkscreenpath route={[{"x":2.1500084000001607,"y":3.4749676500000533},{"x":3.4926778000001377,"y":3.4749676500000533}]} />
<silkscreenpath route={[{"x":-2.0914867999998705,"y":3.4749676500000533},{"x":-3.4939477999996598,"y":3.4749676500000533}]} />
      </footprint>}
      
      {...props}
    />
  )
}