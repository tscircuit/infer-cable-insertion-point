import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH1"],
  pin8: ["EH2"],
  pin9: ["A5"],
  pin10: ["B5"],
  pin11: ["A9"],
  pin12: ["B9"],
  pin13: ["B12"],
  pin14: ["A12"]
} as const

export const GT_USB_7008 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C963367"
  ]
}}
      manufacturerPartNumber="GT_USB_7008"
      footprint={<footprint>
        <smtpad portHints={["pin9"]} pcbX="-0.6000750000000608mm" pcbY="2.5499377500000264mm" width="0.7999983999999999mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.5998210000001336mm" pcbY="2.5499377500000264mm" width="0.7999983999999999mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.7999710000001414mm" pcbY="2.5499377500000264mm" width="0.7999983999999999mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.8002250000000686mm" pcbY="2.5499377500000264mm" width="0.7999983999999999mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-3.000120999999922mm" pcbY="2.5499377500000264mm" width="0.7999983999999999mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.9998670000001084mm" pcbY="2.5499377500000264mm" width="0.7999983999999999mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-5.749924999999962mm" pcbY="-1.299940250000077mm" width="1.3500100000000002mm" height="3.9999919999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="5.749924999999962mm" pcbY="-1.299940250000077mm" width="1.3500100000000002mm" height="3.9999919999999998mm" shape="rect" />
<silkscreenpath route={[{"x":-4.949748799999952,"y":1.7101121499999863},{"x":-4.949748799999952,"y":-4.939912649999997}]} />
<silkscreenpath route={[{"x":4.949545599999965,"y":1.7099851499999659},{"x":4.949545599999965,"y":-4.939912649999997}]} />
<silkscreenpath route={[{"x":-4.949748799999952,"y":1.7101121499999863},{"x":4.949545599999965,"y":1.7099851499999659}]} />
<silkscreenpath route={[{"x":-5.020132200000035,"y":-4.949894849999964},{"x":-5.020132200000035,"y":-3.531076250000069}]} />
<silkscreenpath route={[{"x":5.019929000000047,"y":-4.949894849999964},{"x":5.019929000000047,"y":-3.5310000499999887}]} />
<silkscreenpath route={[{"x":-5.020132200000035,"y":-4.949894849999964},{"x":5.019929000000047,"y":-4.949894849999964}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a78353211e554e9e8e8d6ee59fa1c21c&pn=C963367",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00010159999987990886, y: -0.9999154500000031, z: -2.4999362500000304 },
      }}
      {...props}
    />
  )
}