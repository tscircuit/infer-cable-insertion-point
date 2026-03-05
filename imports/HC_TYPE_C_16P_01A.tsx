import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SHELL4"],
  pin2: ["SHELL1"],
  pin3: ["SHELL2"],
  pin4: ["SHELL3"],
  pin5: ["A1B12"],
  pin6: ["A4B9"],
  pin7: ["B8"],
  pin8: ["A5"],
  pin9: ["B7"],
  pin10: ["A6"],
  pin11: ["A7"],
  pin12: ["B6"],
  pin13: ["A8"],
  pin14: ["B5"],
  pin15: ["B4A9"],
  pin16: ["B1A12"]
} as const

export const HC_TYPE_C_16P_01A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2894897"
  ]
}}
      manufacturerPartNumber="HC_TYPE_C_16P_01A"
      footprint={<footprint>
        <hole pcbX="-2.8900120000000697mm" pcbY="0.9700006499999745mm" diameter="0.6499860000000001mm" />
<hole pcbX="2.890011999999956mm" pcbY="0.96974664999982mm" diameter="0.6499860000000001mm" />
<platedhole  portHints={["pin2"]} pcbX="4.320031999999969mm" pcbY="1.4701266499999974mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="4.320031999999969mm" pcbY="-2.7099513500000967mm" holeWidth="0.5999987999999999mm" holeHeight="1.1999975999999997mm" outerWidth="0.9999979999999999mm" outerHeight="1.5999967999999998mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="-4.320032000000083mm" pcbY="-2.7099513500000967mm" holeWidth="0.5999987999999999mm" holeHeight="1.1999975999999997mm" outerWidth="0.9999979999999999mm" outerHeight="1.5999967999999998mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-4.320032000000083mm" pcbY="1.4701266499999974mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="0.9999979999999999mm" outerHeight="2.0999958mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-3.199891999999977mm" pcbY="2.1099526499999683mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.400045999999975mm" pcbY="2.1099526499999683mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.7500600000000759mm" pcbY="2.1099526499999683mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.249934000000053mm" pcbY="2.1099526499999683mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.7500619999999572mm" pcbY="2.1099526499999683mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.2499359999999342mm" pcbY="2.1099526499999683mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.2499360000000479mm" pcbY="2.1099526499999683mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.7500619999999572mm" pcbY="2.1099526499999683mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.2499339999999393mm" pcbY="2.1099526499999683mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.7500599999999622mm" pcbY="2.1099526499999683mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.400045999999975mm" pcbY="2.1099526499999683mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="3.1998920000000908mm" pcbY="2.1099526499999683mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<silkscreenpath route={[{"x":4.500016399999936,"y":-1.701215750000074},{"x":4.500016399999936,"y":0.211658249999914}]} />
<silkscreenpath route={[{"x":4.500016399999936,"y":-5.309768350000127},{"x":4.500016399999936,"y":-3.718331350000085}]} />
<silkscreenpath route={[{"x":-4.499965599999996,"y":-1.701215750000074},{"x":-4.499965599999996,"y":0.2117344499997671}]} />
<silkscreenpath route={[{"x":-4.499965599999996,"y":-5.309768350000127},{"x":-4.499965599999996,"y":-3.718331350000085}]} />
<silkscreenpath route={[{"x":-4.499965599999996,"y":-5.309768350000127},{"x":4.500016399999936,"y":-5.309768350000127}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=69a4d34b57454869b49343b4e6632b8d&pn=C2894897",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.4560295500000393, z: -1.9599513499999943 },
      }}
      {...props}
    />
  )
}