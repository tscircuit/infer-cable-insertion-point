import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EH4"],
  pin2: ["EH2"],
  pin3: ["EH3"],
  pin4: ["EH1"],
  pin5: ["B1"],
  pin6: ["B4"],
  pin7: ["B5"],
  pin8: ["B6"],
  pin9: ["B7"],
  pin10: ["B8"],
  pin11: ["B9"],
  pin12: ["A12"],
  pin13: ["A9"],
  pin14: ["A8"],
  pin15: ["A7"],
  pin16: ["A6"],
  pin17: ["A5"],
  pin18: ["A4"],
  pin19: ["B12"],
  pin20: ["A1"]
} as const

export const TYPE_C_16P_LTH6_8 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5187468"
  ]
}}
      manufacturerPartNumber="TYPE_C_16P_LTH6_8"
      footprint={<footprint>
        <hole pcbX="3.7500559999999723mm" pcbY="-1.1368683772161603e-13mm" diameter="0.7999983999999999mm" />
<hole pcbX="-3.7500559999999723mm" pcbY="-1.1368683772161603e-13mm" diameter="0.5999987999999999mm" />
<platedhole  portHints={["pin4"]} pcbX="2.400045999999975mm" pcbY="-2.1501100000000406mm" holeWidth="0.9095994000000001mm" holeHeight="0.6095999999999999mm" outerWidth="1.499997mm" outerHeight="1.1999975999999999mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-2.400045999999975mm" pcbY="-2.1501100000000406mm" holeWidth="0.9095994000000001mm" holeHeight="0.6095999999999999mm" outerWidth="1.499997mm" outerHeight="1.1999975999999999mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="2.400045999999975mm" pcbY="2.1501100000000406mm" holeWidth="0.9095994000000001mm" holeHeight="0.6095999999999999mm" outerWidth="1.499997mm" outerHeight="1.1999975999999999mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-2.400045999999975mm" pcbY="2.1501100000000406mm" holeWidth="0.9095994000000001mm" holeHeight="0.6095999999999999mm" outerWidth="1.499997mm" outerHeight="1.1999975999999999mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="2.74980400000004mm" pcbY="-0.8651240000000371mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.2499339999999393mm" pcbY="-0.8651240000000371mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.7498080000001437mm" pcbY="-0.8651240000000371mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.2499360000000479mm" pcbY="-0.8651240000000371mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.25018999999997504mm" pcbY="-0.8651240000000371mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.7500619999999572mm" pcbY="-0.8651240000000371mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-1.2501879999998664mm" pcbY="-0.8651240000000371mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.74980400000004mm" pcbY="0.8648699999999963mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.2499339999999393mm" pcbY="0.8648699999999963mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.7498080000001437mm" pcbY="0.8648699999999963mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.2499360000000479mm" pcbY="0.8648699999999963mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.25018999999997504mm" pcbY="0.8648699999999963mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.7500619999999572mm" pcbY="0.8648699999999963mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.2501879999998664mm" pcbY="0.8648699999999963mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-2.7500579999999673mm" pcbY="-0.8651240000000371mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-2.7500579999999673mm" pcbY="0.8648699999999963mm" width="0.29999939999999997mm" height="0.8700007999999998mm" shape="rect" />
<silkscreenpath route={[{"x":3.2139382000000296,"y":-1.651050800000121},{"x":4.571898400000009,"y":-1.651050800000121},{"x":4.571898400000009,"y":1.5239491999999473},{"x":4.571898400000009,"y":1.6509491999999},{"x":4.571898400000009,"y":1.6509491999999},{"x":3.2139382000000296,"y":1.6509491999999}]} />
<silkscreenpath route={[{"x":-3.214141400000017,"y":1.6509491999999},{"x":-4.572101599999996,"y":1.6509491999999},{"x":-4.572101599999996,"y":1.3969491999998809}]} />
<silkscreenpath route={[{"x":1.5858489999999392,"y":1.6509491999999},{"x":-1.5860521999999264,"y":1.6509491999999}]} />
<silkscreenpath route={[{"x":-1.5860521999999264,"y":-1.651050800000121},{"x":1.5858489999999392,"y":-1.651050800000121}]} />
<silkscreenpath route={[{"x":-4.572101599999996,"y":1.5239491999999473},{"x":-4.572101599999996,"y":-1.651050800000121},{"x":-3.214141400000017,"y":-1.651050800000121}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=0611d6839bba49b186ed8d4175c9b909&pn=C5187468",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.0001015999999935957, y: -0.00005080000005364127, z: -1.400109999999995 },
      }}
      {...props}
    />
  )
}