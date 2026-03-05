import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["EH1"],
  pin7: ["EH2"],
  pin8: ["EH4"],
  pin9: ["EH3"]
} as const

export const MINI_5PTP = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2681563"
  ]
}}
      manufacturerPartNumber="MINI_5PTP"
      footprint={<footprint>
        <hole pcbX="-2.200021000000106mm" pcbY="-0.09994899999992413mm" diameter="0.9000236mm" />
<hole pcbX="2.200020999999765mm" pcbY="-0.09994899999992413mm" diameter="0.9000236mm" />
<smtpad portHints={["pin1"]} pcbX="-1.6000730000000658mm" pcbY="2.9500830000000633mm" width="0.49999899999999997mm" height="2.1999956mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.7999730000001364mm" pcbY="2.9500830000000633mm" width="0.49999899999999997mm" height="2.1999956mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.00012700000013410317mm" pcbY="2.9500830000000633mm" width="0.49999899999999997mm" height="2.1999956mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.7999729999997953mm" pcbY="2.9500830000000633mm" width="0.49999899999999997mm" height="2.1999956mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.5998189999997976mm" pcbY="2.9500830000000633mm" width="0.49999899999999997mm" height="2.1999956mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-4.4499530000000505mm" pcbY="2.550032999999985mm" width="1.9999959999999999mm" height="2.1999956mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="4.449952999999937mm" pcbY="2.550032999999985mm" width="1.9999959999999999mm" height="2.1999956mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-4.4499530000000505mm" pcbY="-2.9500829999999496mm" width="1.9999959999999999mm" height="2.1999956mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="4.449952999999937mm" pcbY="-2.9500829999999496mm" width="1.9999959999999999mm" height="2.1999956mm" shape="rect" />
<silkscreenpath route={[{"x":-2.0812252000000626,"y":3.556025400000067},{"x":-3.2189420000000837,"y":3.556025400000067}]} />
<silkscreenpath route={[{"x":3.218789599999809,"y":3.556025400000067},{"x":2.0810727999999017,"y":3.556025400000067}]} />
<silkscreenpath route={[{"x":3.8499287999999297,"y":-1.6188181999999642},{"x":3.8499287999999297,"y":1.2188952000001336}]} />
<silkscreenpath route={[{"x":3.8499287999999297,"y":-5.999937199999977},{"x":3.8499287999999297,"y":-4.281119199999921}]} />
<silkscreenpath route={[{"x":-3.850081199999977,"y":-1.6188181999999642},{"x":-3.850081199999977,"y":1.2188952000001336}]} />
<silkscreenpath route={[{"x":-3.850081199999977,"y":-5.999937199999977},{"x":-3.850081199999977,"y":-4.281119199999921}]} />
<silkscreenpath route={[{"x":3.8499287999999297,"y":-5.999937199999977},{"x":-3.850081199999977,"y":-5.999937199999977}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=7cb453ba8c1d4f678f5bbc96799fd9cd&pn=C2681563",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.1999975999999606, z: -3.2500807999999894 },
      }}
      {...props}
    />
  )
}