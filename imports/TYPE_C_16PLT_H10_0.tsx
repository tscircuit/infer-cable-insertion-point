import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["B12"],
  pin2: ["B9"],
  pin3: ["B8"],
  pin4: ["B7"],
  pin5: ["B6"],
  pin6: ["B5"],
  pin7: ["B4"],
  pin8: ["A12"],
  pin9: ["A9"],
  pin10: ["A8"],
  pin11: ["A7"],
  pin12: ["A6"],
  pin13: ["A5"],
  pin14: ["A4"],
  pin15: ["B1"],
  pin16: ["A1"],
  pin17: ["EH1"],
  pin18: ["EH2"],
  pin19: ["EH3"],
  pin20: ["EH4"]
} as const

export const TYPE_C_16PLT_H10_0 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3151749"
  ]
}}
      manufacturerPartNumber="TYPE_C_16PLT_H10_0"
      footprint={<footprint>
        <hole pcbX="-3.750056000000086mm" pcbY="-0.00011430000006384944mm" diameter="0.5999987999999999mm" />
<hole pcbX="3.7500559999999723mm" pcbY="-0.00011430000006384944mm" diameter="0.5999987999999999mm" />
<platedhole  portHints={["pin17"]} pcbX="-2.4000460000000885mm" pcbY="-2.1499703000000636mm" holeWidth="0.5999987999999999mm" holeHeight="0.8500110000000002mm" outerWidth="1.0999978mm" outerHeight="1.3500100000000002mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="2.400045999999975mm" pcbY="-2.1499703000000636mm" holeWidth="0.5999987999999999mm" holeHeight="0.8500110000000002mm" outerWidth="1.0999978mm" outerHeight="1.3500100000000002mm" shape="pill" />
<platedhole  portHints={["pin19"]} pcbX="2.400045999999975mm" pcbY="2.1499956999999768mm" holeWidth="0.5999987999999999mm" holeHeight="0.8500110000000002mm" outerWidth="1.0999978mm" outerHeight="1.3500100000000002mm" shape="pill" />
<platedhole  portHints={["pin20"]} pcbX="-2.4000460000000885mm" pcbY="2.1499956999999768mm" holeWidth="0.5999987999999999mm" holeHeight="0.8500110000000002mm" outerWidth="1.0999978mm" outerHeight="1.3500100000000002mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-2.750058000000081mm" pcbY="-0.7999603000000661mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.249934000000053mm" pcbY="-0.7999603000000661mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.7500620000000708mm" pcbY="-0.7999603000000661mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.2499360000000479mm" pcbY="-0.7999603000000661mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.2499359999999342mm" pcbY="-0.7999603000000661mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.7500620000000708mm" pcbY="-0.7999603000000661mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.2499339999998256mm" pcbY="-0.7999603000000661mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.75005799999974mm" pcbY="0.7999856999999793mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.2499339999998256mm" pcbY="0.7999856999999793mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.7500620000000708mm" pcbY="0.7999856999999793mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.2499359999999342mm" pcbY="0.7999856999999793mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.2499360000000479mm" pcbY="0.7999856999999793mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-0.7500620000000708mm" pcbY="0.7999856999999793mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.249934000000053mm" pcbY="0.7999856999999793mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.75005799999974mm" pcbY="-0.7999603000000661mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-2.750058000000081mm" pcbY="0.7999856999999793mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<silkscreenpath route={[{"x":3.0580075999999963,"y":1.5800196999999798},{"x":4.4699935999999525,"y":1.5800196999999798}]} />
<silkscreenpath route={[{"x":-1.742084400000067,"y":1.5800196999999798},{"x":1.742084400000067,"y":1.5800196999999798}]} />
<silkscreenpath route={[{"x":-3.05800760000011,"y":-1.5799943000000667},{"x":-4.469993600000066,"y":-1.5799943000000667},{"x":-4.469993600000066,"y":1.5800196999999798},{"x":-3.05800760000011,"y":1.5800196999999798}]} />
<silkscreenpath route={[{"x":1.742084400000067,"y":-1.5799943000000667},{"x":-1.742084400000067,"y":-1.5799943000000667}]} />
<silkscreenpath route={[{"x":4.4699935999999525,"y":1.5800196999999798},{"x":4.4699935999999525,"y":-1.5799943000000667},{"x":3.0580075999999963,"y":-1.5799943000000667}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=0dfda3e48fbf49868b9180670f282692&pn=C3151749",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.1368683772161603e-13, y: 0.000012699999956566899, z: -1.3999829999999747 },
      }}
      {...props}
    />
  )
}