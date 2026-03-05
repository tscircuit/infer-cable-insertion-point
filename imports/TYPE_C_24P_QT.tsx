import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin3: ["EP1"],
  pin4: ["EP2"],
  pin25: ["EP3"],
  pin26: ["pin25_alt1"],
  pin27: ["pin25_alt1"],
  pin28: ["pin25_alt1"],
  pin29: ["A1"],
  pin30: ["A2"],
  pin31: ["A3"],
  pin32: ["A4"],
  pin33: ["A5"],
  pin34: ["A6"],
  pin35: ["A7"],
  pin36: ["A8"],
  pin37: ["A9"],
  pin38: ["A10"],
  pin39: ["A11"],
  pin40: ["A12"],
  pin41: ["B1"],
  pin42: ["B2"],
  pin43: ["B3"],
  pin44: ["B4"],
  pin45: ["B5"],
  pin46: ["B6"],
  pin47: ["B7"],
  pin48: ["B8"],
  pin49: ["B9"],
  pin50: ["B10"],
  pin51: ["B11"],
  pin52: ["B12"]
} as const

export const TYPE_C_24P_QT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2681555"
  ]
}}
      manufacturerPartNumber="TYPE_C_24P_QT"
      footprint={<footprint>
        <hole pcbX="-3.4000440000000935mm" pcbY="0.4006533000000445mm" diameter="0.5000243999999999mm" />
<hole pcbX="3.399789999999939mm" pcbY="0.4006533000000445mm" diameter="0.5000243999999999mm" />
<platedhole  portHints={["pin3"]} pcbX="4.320031999999969mm" pcbY="-2.800000700000055mm" holeWidth="0.5999987999999999mm" holeHeight="1.8999962mm" outerWidth="0.9999979999999999mm" outerHeight="2.2999954mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="-4.320031999999969mm" pcbY="-2.800000700000055mm" holeWidth="0.5999987999999999mm" holeHeight="1.8999962mm" outerWidth="0.9999979999999999mm" outerHeight="2.2999954mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="4.31799999999987mm" pcbY="1.8194972999998527mm" holeWidth="0.5000243999999999mm" holeHeight="1.4500351999999999mm" outerWidth="0.9999979999999999mm" outerHeight="1.9500088mm" shape="pill" />
<platedhole  portHints={["pin26"]} pcbX="4.046219999999948mm" pcbY="1.2556172999999262mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin27"]} pcbX="-4.318000000000097mm" pcbY="1.8194972999998527mm" holeWidth="0.5000243999999999mm" holeHeight="1.4500351999999999mm" outerWidth="0.9999979999999999mm" outerHeight="1.9500088mm" shape="pill" />
<platedhole  portHints={["pin28"]} pcbX="-4.081779999999981mm" pcbY="1.2556172999999262mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="-2.62509mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-2.124963999999977mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-1.6250920000001088mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-1.1249660000000858mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-0.6250940000001037mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-0.12496800000008079mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="0.374904000000015mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="0.8750300000000379mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="1.37490200000002mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="1.8750279999999293mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="2.3748999999999114mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="2.8750259999999344mm" pcbY="2.3749953000000232mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="2.624836000000073mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="2.124963999999977mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="1.6248379999999543mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="1.1249659999999722mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="0.6248399999998355mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="0.12496800000008079mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-0.37515799999994215mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-0.8750300000000379mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="-1.3751560000000609mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="-1.875028000000043mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="-2.3751540000001796mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="-2.8750259999999344mm" pcbY="1.0750232999998843mm" width="0.29999939999999997mm" height="0.9500107999999999mm" shape="rect" />
<silkscreenpath route={[{"x":3.256051399999933,"y":2.327497299999891},{"x":3.2732725999999275,"y":2.327497299999891}]} />
<silkscreenpath route={[{"x":-3.273120199999994,"y":2.327497299999891},{"x":-3.006242400000019,"y":2.327497299999891}]} />
<silkscreenpath route={[{"x":4.318812800000046,"y":-1.4188757000001715},{"x":4.318101599999977,"y":0.4489132999999583}]} />
<silkscreenpath route={[{"x":-4.31891440000004,"y":-1.4188757000001715},{"x":-4.318101599999977,"y":0.44916729999999916}]} />
<silkscreenpath route={[{"x":4.3199050000000625,"y":-5.4999191000000565},{"x":4.3199050000000625,"y":-4.181074900000112}]} />
<silkscreenpath route={[{"x":-4.32010820000005,"y":-5.4999191000000565},{"x":-4.32010820000005,"y":-4.181074900000112}]} />
<silkscreenpath route={[{"x":4.3199050000000625,"y":-5.4999191000000565},{"x":-4.32010820000005,"y":-5.4999191000000565}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=6a20ffc6b3e84fdfb1eb671357a45648&pn=C2681555",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00010159999987990886, y: -1.4724189000000933, z: -2.05000070000001 },
      }}
      {...props}
    />
  )
}