import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin1_alt1"],
  pin3: ["pin1_alt1"],
  pin4: ["pin1_alt1"],
  pin5: ["A12"],
  pin6: ["A9"],
  pin7: ["B5"],
  pin8: ["A8"],
  pin9: ["B6"],
  pin10: ["A7"],
  pin11: ["A6"],
  pin12: ["B7"],
  pin13: ["A5"],
  pin14: ["B8"],
  pin15: ["A4"],
  pin16: ["A1"]
} as const

export const TYPE_C_31_M_31 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2760486"
  ]
}}
      manufacturerPartNumber="TYPE_C_31_M_31"
      footprint={<footprint>
        <hole pcbX="2.8900120000000697mm" pcbY="1.0459403000000975mm" diameter="0.5999987999999999mm" />
<hole pcbX="-2.8900120000000697mm" pcbY="1.0459403000000975mm" diameter="0.5999987999999999mm" />
<platedhole  portHints={["pin1"]} pcbX="-4.320032000000083mm" pcbY="1.5458123000000796mm" holeWidth="0.5999987999999999mm" holeHeight="1.5999968mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="4.320031999999969mm" pcbY="1.546066299999893mm" holeWidth="0.5999987999999999mm" holeHeight="1.5999968mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="4.320031999999969mm" pcbY="-2.6340117000000873mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="-4.320032000000083mm" pcbY="-2.6340117000000873mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="3.1998919999998634mm" pcbY="2.1132483000000093mm" width="0.49999899999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="2.400045999999861mm" pcbY="2.1132483000000093mm" width="0.49999899999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.7500599999999622mm" pcbY="2.1132483000000093mm" width="0.29999939999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.2496799999998984mm" pcbY="2.114010300000018mm" width="0.29999939999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.7500619999999572mm" pcbY="2.1132483000000093mm" width="0.29999939999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.2499359999999342mm" pcbY="2.1132483000000093mm" width="0.29999939999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.2499359999999342mm" pcbY="2.1132483000000093mm" width="0.29999939999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.7500619999999572mm" pcbY="2.1132483000000093mm" width="0.29999939999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.249934000000053mm" pcbY="2.1132483000000093mm" width="0.29999939999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.7500600000000759mm" pcbY="2.114010300000018mm" width="0.29999939999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-2.400045999999975mm" pcbY="2.1132483000000093mm" width="0.49999899999999997mm" height="1.1400028mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-3.199891999999977mm" pcbY="2.1132483000000093mm" width="0.49999899999999997mm" height="1.1400028mm" shape="rect" />
<silkscreenpath route={[{"x":-4.5000164000000495,"y":-3.7425693000000138},{"x":-4.5000164000000495,"y":-5.312009900000021},{"x":4.444999999999936,"y":-5.312009900000021},{"x":4.499991000000023,"y":-5.312009900000021},{"x":4.499991000000023,"y":-3.7425693000000138}]} />
<silkscreenpath route={[{"x":-4.5000164000000495,"y":-1.5255048999999872},{"x":-4.5000164000000495,"y":0.3373818999999685}]} />
<silkscreenpath route={[{"x":4.499991000000023,"y":-1.5255048999999872},{"x":4.499991000000023,"y":0.3373818999999685}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5d0ac575f7df4ec0954d2014aa51ce7b&pn=C2760486",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.3599984999999606, z: -1.8840117000000418 },
      }}
      {...props}
    />
  )
}