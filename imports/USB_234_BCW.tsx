import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND3"],
  pin5: ["GND2"],
  pin6: ["GND1"]
} as const

export const USB_234_BCW = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C720528"
  ]
}}
      manufacturerPartNumber="USB_234_BCW"
      footprint={<footprint>
        <hole pcbX="-2.450083999999947mm" pcbY="-2.3875491999999667mm" diameter="1.5000223999999998mm" />
<hole pcbX="2.4500840000000608mm" pcbY="-2.3875491999999667mm" diameter="1.5000223999999998mm" />
<smtpad portHints={["pin6"]} pcbX="7.299985399999969mm" pcbY="-1.0124948000000131mm" width="2.7999944mm" height="4.9999899999999995mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-7.299985399999855mm" pcbY="-1.0124948000000131mm" width="2.7999944mm" height="4.9999899999999995mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="3.499866000000111mm" pcbY="2.012492800000018mm" width="0.8999982mm" height="2.999994mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.9999979999998914mm" pcbY="2.012492800000018mm" width="0.8999982mm" height="2.999994mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.9999979999997777mm" pcbY="2.012492800000018mm" width="0.8999982mm" height="2.999994mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-3.4998659999999973mm" pcbY="2.012492800000018mm" width="0.8999982mm" height="2.999994mm" shape="rect" />
<silkscreenpath route={[{"x":-6.604000000000042,"y":-3.7436552000001484},{"x":-6.604000000000042,"y":-12.454001000000062},{"x":6.604000000000042,"y":-12.454001000000062},{"x":6.604000000000042,"y":-3.7436552000001484}]} />
<silkscreenpath route={[{"x":4.181144800000084,"y":1.1724385999998503},{"x":5.66884820000007,"y":1.1724385999998503}]} />
<silkscreenpath route={[{"x":1.681149800000071,"y":1.1724385999998503},{"x":2.8188412000000653,"y":1.1724385999998503}]} />
<silkscreenpath route={[{"x":-0.318846199999939,"y":1.1724385999998503},{"x":0.318846199999939,"y":1.1724385999998503}]} />
<silkscreenpath route={[{"x":-2.8188411999999516,"y":1.1724385999998503},{"x":-1.6811497999999574,"y":1.1724385999998503}]} />
<silkscreenpath route={[{"x":-5.766511199999968,"y":1.1724385999998503},{"x":-4.181144800000084,"y":1.1724385999998503}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=0d9886f4d8684df9af0843b77ad3d156&pn=C720528",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -4.812563400000045, z: -2.712489800000026 },
      }}
      {...props}
    />
  )
}