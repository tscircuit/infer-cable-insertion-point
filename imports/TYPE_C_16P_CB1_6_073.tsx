import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin25: ["EH2"],
  pin26: ["EH1"],
  pin27: ["EH3"],
  pin28: ["EH4"],
  pin29: ["A12"],
  pin30: ["B1"],
  pin31: ["A9"],
  pin32: ["B4"],
  pin33: ["B5"],
  pin34: ["A8"],
  pin35: ["B6"],
  pin36: ["A7"],
  pin37: ["A6"],
  pin38: ["B7"],
  pin39: ["A5"],
  pin40: ["B8"],
  pin41: ["B9"],
  pin42: ["A4"],
  pin43: ["B12"],
  pin44: ["A1"]
} as const

export const TYPE_C_16P_CB1_6_073 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2906290"
  ]
}}
      manufacturerPartNumber="TYPE_C_16P_CB1_6_073"
      footprint={<footprint>
        <platedhole  portHints={["pin26"]} pcbX="5.615012899999897mm" pcbY="-2.5475882500001035mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="5.615012899999897mm" pcbY="1.4524037499999167mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin27"]} pcbX="-5.624995100000206mm" pcbY="-2.5475882500001035mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin28"]} pcbX="-5.624995100000206mm" pcbY="1.4524037499999167mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="3.3450148999997964mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="3.04504089999989mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="2.544914899999867mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="2.244940899999847mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="1.7450688999998647mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="1.2449428999998418mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="0.7450708999999733mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="0.2449448999999504mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-0.2549271000000317mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-0.7550531000001683mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-1.2549251000001505mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-1.7550511000001734mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-2.254923100000042mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-2.5548971000001757mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-3.0550231000001986mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-3.354997100000105mm" pcbY="2.6025157499999523mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<silkscreenpath route={[{"x":4.5436408999999,"y":-4.748371250000105},{"x":4.5436408999999,"y":1.851590149999879}]} />
<silkscreenpath route={[{"x":-4.456417300000112,"y":-4.748371250000105},{"x":-4.456417300000112,"y":1.851590149999879}]} />
<silkscreenpath route={[{"x":-4.456417300000112,"y":1.851590149999879},{"x":4.543590099999847,"y":1.851590149999879}]} />
<silkscreenpath route={[{"x":-4.474959300000023,"y":1.8529363499999363},{"x":4.4650278999999955,"y":1.8529363499999363}]} />
<silkscreenpath route={[{"x":4.4650278999999955,"y":-4.647076050000237},{"x":4.4650278999999955,"y":1.8529363499999363}]} />
<silkscreenpath route={[{"x":-4.474959300000023,"y":-4.647076050000237},{"x":-4.474959300000023,"y":1.8529363499999363}]} />
<silkscreenpath route={[{"x":-4.474959300000023,"y":-4.647076050000237},{"x":4.4650278999999955,"y":-4.647076050000237}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e149ceda63ee4f5c8235f2af79fd4fac&pn=C2906290",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.004991099999983817, y: -1.0475150500000154, z: -2.075051450000001 },
      }}
      {...props}
    />
  )
}