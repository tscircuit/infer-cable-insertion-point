import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["SHELL3"],
  pin14: ["SHELL1"],
  pin15: ["SHELL2"],
  pin16: ["SHELL4"],
  pin17: ["B5"],
  pin18: ["A8"],
  pin19: ["B6"],
  pin20: ["A7"],
  pin21: ["A6"],
  pin22: ["B7"],
  pin23: ["A5"],
  pin24: ["B8"],
  pin25: ["B4A9"],
  pin26: ["B1A12"],
  pin27: ["A4B9"],
  pin28: ["A1B12"]
} as const

export const U262_161N_4BVC11 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C319148"
  ]
}}
      manufacturerPartNumber="U262_161N_4BVC11"
      footprint={<footprint>
        <hole pcbX="2.890011999999956mm" pcbY="0.9186926499999117mm" diameter="0.700024mm" />
<hole pcbX="-2.890011999999956mm" pcbY="0.9186926499999117mm" diameter="0.700024mm" />
<platedhole  portHints={["pin14"]} pcbX="4.320031999999969mm" pcbY="-2.7612593500000457mm" holeWidth="0.700024mm" holeHeight="1.3000228mm" outerWidth="1.1999975999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="-4.320032000000083mm" pcbY="-2.7612593500000457mm" holeWidth="0.700024mm" holeHeight="1.3000228mm" outerWidth="1.1999975999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin13"]} pcbX="4.320031999999969mm" pcbY="1.4188186499999347mm" holeWidth="0.700024mm" holeHeight="1.700022mm" outerWidth="1.1999975999999999mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="-4.320032000000083mm" pcbY="1.4188186499999347mm" holeWidth="0.700024mm" holeHeight="1.700022mm" outerWidth="1.1999975999999999mm" outerHeight="2.1999956mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="1.7500599999999622mm" pcbY="2.161260650000031mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.2499339999999393mm" pcbY="2.161260650000031mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.7500620000001845mm" pcbY="2.161260650000031mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.2499360000000479mm" pcbY="2.161260650000031mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.2499359999999342mm" pcbY="2.161260650000031mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.7500619999999572mm" pcbY="2.161260650000031mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.249934000000053mm" pcbY="2.161260650000031mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.7500600000000759mm" pcbY="2.161260650000031mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.400045999999975mm" pcbY="2.161260650000031mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="3.1998920000000908mm" pcbY="2.161260650000031mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.400045999999975mm" pcbY="2.161260650000031mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-3.1998920000000908mm" pcbY="2.161260650000031mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<silkscreenpath route={[{"x":4.459986000000072,"y":-1.6420337500001096},{"x":4.459986000000072,"y":0.09959344999992936}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":-3.8787069499999234},{"x":-4.4699935999999525,"y":-5.39998915000001},{"x":4.459986000000072,"y":-5.39998915000001},{"x":4.459986000000072,"y":-3.880484949999982}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":0.10137144999998782},{"x":-4.4699935999999525,"y":-1.6438117500000544}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c50ce21ae3b941ce8eeb9bccc6cdef41&pn=C319148",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 0, y: -1.4277847500001144, z: -2.0112593500000004 },
      }}
      {...props}
    />
  )
}