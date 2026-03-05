import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SHELL1"],
  pin2: ["SHELL4"],
  pin3: ["SHELL3"],
  pin4: ["SHELL2"],
  pin5: ["B1A12"],
  pin6: ["B4A9"],
  pin7: ["B5"],
  pin8: ["A8"],
  pin9: ["B6"],
  pin10: ["A7"],
  pin11: ["A6"],
  pin12: ["B7"],
  pin13: ["A5"],
  pin14: ["B8"],
  pin15: ["A4B9"],
  pin16: ["A1B12"]
} as const

export const GT_USB_7010ASV = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2988369"
  ]
}}
      manufacturerPartNumber="GT_USB_7010ASV"
      footprint={<footprint>
        <hole pcbX="2.8900120000000697mm" pcbY="0.9951593499998808mm" diameter="0.6499860000000001mm" />
<hole pcbX="-2.8999179999998432mm" pcbY="0.9951593499998808mm" diameter="0.6499860000000001mm" />
<platedhole  portHints={["pin1"]} pcbX="-4.3200319999998555mm" pcbY="1.4950313499999766mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="-4.3200319999998555mm" pcbY="-2.685046650000004mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="4.320031999999969mm" pcbY="-2.685046650000004mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="4.320031999999969mm" pcbY="1.4950313499999766mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="3.1998920000000908mm" pcbY="2.1150453499999458mm" width="0.5999987999999999mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="2.4000460000000885mm" pcbY="2.1150453499999458mm" width="0.5999987999999999mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.7500599999999622mm" pcbY="2.1150453499999458mm" width="0.29999939999999997mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.2499340000001666mm" pcbY="2.1150453499999458mm" width="0.29999939999999997mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.7500620000000708mm" pcbY="2.1150453499999458mm" width="0.29999939999999997mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.2499360000000479mm" pcbY="2.1150453499999458mm" width="0.29999939999999997mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.24993599999970684mm" pcbY="2.1150453499999458mm" width="0.29999939999999997mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.7500619999998435mm" pcbY="2.1150453499999458mm" width="0.29999939999999997mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.249934000000053mm" pcbY="2.1150453499999458mm" width="0.29999939999999997mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.7500599999998485mm" pcbY="2.1150453499999458mm" width="0.29999939999999997mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-2.400045999999975mm" pcbY="2.1150453499999458mm" width="0.5999987999999999mm" height="1.2400026mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-3.199891999999977mm" pcbY="2.1150453499999458mm" width="0.5999987999999999mm" height="1.2400026mm" shape="rect" />
<silkscreenpath route={[{"x":-4.500016399999936,"y":-1.5764890499999638},{"x":-4.500016399999936,"y":0.23646135000001323}]} />
<silkscreenpath route={[{"x":4.499991000000136,"y":-1.5764890499999638},{"x":4.499991000000136,"y":0.23646135000001323}]} />
<silkscreenpath route={[{"x":-4.500016399999936,"y":-5.3150388500000645},{"x":-4.500016399999936,"y":-3.7936042500001577}]} />
<silkscreenpath route={[{"x":4.499991000000136,"y":-5.3150388500000645},{"x":4.499991000000136,"y":-3.7936042500001577}]} />
<silkscreenpath route={[{"x":4.499991000000136,"y":-5.3150388500000645},{"x":-4.500016399999936,"y":-5.3150388500000645}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=be50d0558ed84d368584cedb268b51a8&pn=C2988369",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.000025400000026820635, y: -1.3349858499999527, z: -1.9350466499999583 },
      }}
      {...props}
    />
  )
}