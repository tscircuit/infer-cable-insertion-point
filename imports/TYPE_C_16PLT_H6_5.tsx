import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["B1"],
  pin3: ["A4"],
  pin4: ["A5"],
  pin5: ["A6"],
  pin6: ["A7"],
  pin7: ["A8"],
  pin8: ["A9"],
  pin9: ["A12"],
  pin10: ["B4"],
  pin11: ["B5"],
  pin12: ["B6"],
  pin13: ["B7"],
  pin14: ["B8"],
  pin15: ["B9"],
  pin16: ["B12"],
  pin17: ["SHELL1"],
  pin18: ["SHELL2"],
  pin19: ["SHELL3"],
  pin20: ["SHELL4"]
} as const

export const TYPE_C_16PLT_H6_5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3151748"
  ]
}}
      manufacturerPartNumber="TYPE_C_16PLT_H6_5"
      footprint={<footprint>
        <hole pcbX="3.7500559999999723mm" pcbY="-0.00011430000006384944mm" diameter="0.7999983999999999mm" />
<hole pcbX="-3.750056000000086mm" pcbY="-0.00011430000006384944mm" diameter="0.5999987999999999mm" />
<platedhole  portHints={["pin17"]} pcbX="-2.4000460000000885mm" pcbY="2.1499957000000904mm" holeWidth="0.5999987999999999mm" holeHeight="0.8500110000000002mm" outerWidth="1.0999978mm" outerHeight="1.3500100000000002mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="2.400045999999975mm" pcbY="2.1499957000000904mm" holeWidth="0.5999987999999999mm" holeHeight="0.8500110000000002mm" outerWidth="1.0999978mm" outerHeight="1.3500100000000002mm" shape="pill" />
<platedhole  portHints={["pin19"]} pcbX="2.400045999999975mm" pcbY="-2.14997029999995mm" holeWidth="0.5999987999999999mm" holeHeight="0.8500110000000002mm" outerWidth="1.0999978mm" outerHeight="1.3500100000000002mm" shape="pill" />
<platedhole  portHints={["pin20"]} pcbX="-2.4000460000000885mm" pcbY="-2.14997029999995mm" holeWidth="0.5999987999999999mm" holeHeight="0.8500110000000002mm" outerWidth="1.0999978mm" outerHeight="1.3500100000000002mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-2.750058000000081mm" pcbY="0.8650096999999732mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="2.75005799999974mm" pcbY="-0.8649842999998327mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.2499340000001666mm" pcbY="0.8650096999999732mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.7500620000000708mm" pcbY="0.8650096999999732mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.2499360000000479mm" pcbY="0.8650096999999732mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.2499359999999342mm" pcbY="0.8650096999999732mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.7500619999999572mm" pcbY="0.8650096999999732mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.2499339999998256mm" pcbY="0.8650096999999732mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.75005799999974mm" pcbY="0.8650096999999732mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.2499339999998256mm" pcbY="-0.8649842999998327mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.7500619999999572mm" pcbY="-0.8649842999998327mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.2499359999999342mm" pcbY="-0.8649842999998327mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-0.2499360000000479mm" pcbY="-0.8649842999998327mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.7500620000000708mm" pcbY="-0.8649842999998327mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.2499340000001666mm" pcbY="-0.8649842999998327mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-2.750058000000081mm" pcbY="-0.8649842999998327mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<silkscreenpath route={[{"x":3.0580075999999963,"y":1.5800196999999798},{"x":4.4699935999999525,"y":1.5800196999999798}]} />
<silkscreenpath route={[{"x":-1.742084400000067,"y":1.5800196999999798},{"x":1.7420843999998397,"y":1.5800196999999798}]} />
<silkscreenpath route={[{"x":-3.05800760000011,"y":-1.579994299999953},{"x":-4.469993600000066,"y":-1.579994299999953},{"x":-4.469993600000066,"y":1.5800196999999798},{"x":-3.05800760000011,"y":1.5800196999999798}]} />
<silkscreenpath route={[{"x":1.7420843999998397,"y":-1.579994299999953},{"x":-1.742084400000067,"y":-1.579994299999953}]} />
<silkscreenpath route={[{"x":4.4699935999999525,"y":1.5800196999999798},{"x":4.4699935999999525,"y":-1.579994299999953},{"x":3.0580075999999963,"y":-1.579994299999953}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=791ab6c762be44cfbebff2428cc7aa0f&pn=C3151748",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.1368683772161603e-13, y: 0.000012700000070253736, z: -1.3999829999999747 },
      }}
      {...props}
    />
  )
}