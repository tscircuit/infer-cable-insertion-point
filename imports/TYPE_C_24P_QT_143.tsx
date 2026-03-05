import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin15: ["EP1"],
  pin16: ["EP2"],
  pin17: ["EP4"],
  pin18: ["EP3"],
  pin19: ["A1"],
  pin20: ["A2"],
  pin21: ["A3"],
  pin22: ["A4"],
  pin23: ["A5"],
  pin24: ["A6"],
  pin25: ["A7"],
  pin26: ["A8"],
  pin27: ["A9"],
  pin28: ["A10"],
  pin29: ["A11"],
  pin30: ["A12"],
  pin31: ["B1"],
  pin32: ["B2"],
  pin33: ["B3"],
  pin34: ["B4"],
  pin35: ["B5"],
  pin36: ["B6"],
  pin37: ["B7"],
  pin38: ["B8"],
  pin39: ["B9"],
  pin40: ["B10"],
  pin41: ["B11"],
  pin42: ["B12"]
} as const

export const TYPE_C_24P_QT_143 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5156605"
  ]
}}
      manufacturerPartNumber="TYPE_C_24P_QT_143"
      footprint={<footprint>
        <hole pcbX="-3.40004399999998mm" pcbY="0.39963729999999487mm" diameter="0.5500116mm" />
<hole pcbX="3.40004399999998mm" pcbY="0.39963729999999487mm" diameter="0.5500116mm" />
<platedhole  portHints={["pin15"]} pcbX="-4.320032000000083mm" pcbY="-2.800508700000023mm" holeWidth="0.5999987999999999mm" holeHeight="1.8999962mm" outerWidth="0.9999979999999999mm" outerHeight="2.2999954mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="4.3200319999998555mm" pcbY="-2.800508700000023mm" holeWidth="0.5999987999999999mm" holeHeight="1.8999962mm" outerWidth="0.9999979999999999mm" outerHeight="2.2999954mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="-4.059936000000107mm" pcbY="1.7496472999999924mm" holeWidth="1.1999975999999999mm" holeHeight="1.8999962mm" outerWidth="1.5999967999999998mm" outerHeight="2.2999954mm" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="4.0601899999999205mm" pcbY="1.7496472999999924mm" holeWidth="1.1999975999999999mm" holeHeight="1.8999962mm" outerWidth="1.5999967999999998mm" outerHeight="2.2999954mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="-2.6248360000001867mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-2.124964000000091mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-1.6248380000001816mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.1249660000003132mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.62509399999999mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-0.12496800000008079mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="0.37490399999978763mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="0.8750299999999243mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="1.37490200000002mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="1.875027999999702mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="2.3748999999997977mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="2.8750259999999344mm" pcbY="2.375503299999991mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="2.62509mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="2.1249639999998635mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="1.625091999999995mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="1.1249659999998585mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="0.6250939999997627mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="0.12496799999985342mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-0.37515800000005584mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-0.8750300000001516mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-1.37490200000002mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-1.8750280000001567mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-2.3749000000002525mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-2.8750260000001617mm" pcbY="0.9757092999999486mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<silkscreenpath route={[{"x":4.470018999999866,"y":-1.4349030999999286},{"x":4.470018999999866,"y":0.5275771000000304}]} />
<silkscreenpath route={[{"x":-4.469968200000267,"y":-4.16593649999993},{"x":-4.469968200000267,"y":-5.502509900000064},{"x":4.470018999999866,"y":-5.502509900000064},{"x":4.470018999999866,"y":-4.16593649999993}]} />
<silkscreenpath route={[{"x":-4.469968200000267,"y":0.5276279000000841},{"x":-4.469968200000267,"y":-1.4349030999999286}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=605cfee18ac344acbb31b7b5ba9451c9&pn=C5156605",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -2.2737367544323206e-13, y: -1.4134909000000562, z: -2.0505086999999778 },
      }}
      {...props}
    />
  )
}