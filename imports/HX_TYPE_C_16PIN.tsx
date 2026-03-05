import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin17: ["EH1"],
  pin18: ["EH4"],
  pin19: ["EH3"],
  pin20: ["EH2"],
  pin21: ["A12B1"],
  pin22: ["A9B4"],
  pin23: ["B5"],
  pin24: ["A8"],
  pin25: ["B6"],
  pin26: ["A7"],
  pin27: ["A6"],
  pin28: ["B7"],
  pin29: ["A5"],
  pin30: ["B8"],
  pin31: ["B9A4"],
  pin32: ["B12A1"]
} as const

export const HX_TYPE_C_16PIN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5178539"
  ]
}}
      manufacturerPartNumber="HX_TYPE_C_16PIN"
      footprint={<footprint>
        <hole pcbX="2.890011999999956mm" pcbY="1.074394649999931mm" diameter="0.6499860000000001mm" />
<hole pcbX="-2.8900120000000697mm" pcbY="1.074394649999931mm" diameter="0.6499860000000001mm" />
<platedhole  portHints={["pin17"]} pcbX="-4.320032000000083mm" pcbY="1.5743428499999936mm" holeWidth="0.5999987999999999mm" holeHeight="1.5999968mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin20"]} pcbX="4.320032000000083mm" pcbY="1.574596849999807mm" holeWidth="0.5999987999999999mm" holeHeight="1.5999968mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin19"]} pcbX="4.320032000000083mm" pcbY="-2.6255471499999885mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="-4.320032000000083mm" pcbY="-2.6255471499999885mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="3.1998919999998634mm" pcbY="2.1247862500000565mm" width="0.49999899999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="2.400045999999975mm" pcbY="2.1247862500000565mm" width="0.49999899999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="1.7500600000000759mm" pcbY="2.124532249999902mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="1.2496799999998984mm" pcbY="2.125548249999838mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="0.7500619999999572mm" pcbY="2.124532249999902mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="0.2499360000000479mm" pcbY="2.124532249999902mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-0.2499360000000479mm" pcbY="2.124532249999902mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-0.7500619999999572mm" pcbY="2.124532249999902mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-1.2499339999999393mm" pcbY="2.124532249999902mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-1.7500600000000759mm" pcbY="2.125548249999838mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-2.4000460000000885mm" pcbY="2.1247862500000565mm" width="0.49999899999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-3.1998920000000908mm" pcbY="2.1247862500000565mm" width="0.49999899999999997mm" height="1.0999978mm" shape="rect" />
<silkscreenpath route={[{"x":4.572000000000003,"y":-1.5393669500000442},{"x":4.572000000000003,"y":0.3884168499999987}]} />
<silkscreenpath route={[{"x":-4.572000000000003,"y":-3.7117273500000465},{"x":-4.572000000000003,"y":-5.321503150000012},{"x":4.572000000000003,"y":-5.321503150000012},{"x":4.572000000000003,"y":-3.7117273500000465}]} />
<silkscreenpath route={[{"x":-4.572000000000003,"y":0.3881628499998442},{"x":-4.572000000000003,"y":-1.5393669500000442}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4ab5490c4f9840c0bdcd2ffbacfc1a75&pn=C5178539",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.3044931500000985, z: -1.8755471499998861 },
      }}
      {...props}
    />
  )
}