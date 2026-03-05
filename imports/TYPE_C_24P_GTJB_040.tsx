import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin25: ["GND6"],
  pin26: ["GND3"],
  pin27: ["B12"],
  pin28: ["B11"],
  pin29: ["B10"],
  pin30: ["B9"],
  pin31: ["B8"],
  pin32: ["B7"],
  pin33: ["B6"],
  pin34: ["B5"],
  pin35: ["B4"],
  pin36: ["B3"],
  pin37: ["B2"],
  pin38: ["B1"],
  pin39: ["A1"],
  pin40: ["A2"],
  pin41: ["A3"],
  pin42: ["A4"],
  pin43: ["A5"],
  pin44: ["A6"],
  pin45: ["A7"],
  pin46: ["A8"],
  pin47: ["A9"],
  pin48: ["A10"],
  pin49: ["A11"],
  pin50: ["A12"]
} as const

export const TYPE_C_24P_GTJB_040 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3151751"
  ]
}}
      manufacturerPartNumber="TYPE_C_24P_GTJB_040"
      footprint={<footprint>
        <smtpad portHints={["pin27"]} pcbX="2.7499310000000605mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="2.2500589999999647mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="1.7499330000001692mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="1.2500609999999597mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="0.7499350000000504mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="0.2500630000000683mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-0.2500629999999546mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-0.7499350000000504mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="-1.2500610000000734mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-1.749932999999828mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-2.2500589999999647mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-2.749930999999947mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-3.600068999999962mm" pcbY="0.25751790000003894mm" width="0.6999986mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="2.7499310000000605mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="2.2500589999999647mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="1.7499330000001692mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="1.2500609999999597mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="0.7499350000000504mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="0.2500630000000683mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-0.2500629999999546mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-0.7499350000000504mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-1.2500610000000734mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-1.749932999999828mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="-2.2500589999999647mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="-2.749930999999947mm" pcbY="0.20747989999995298mm" width="0.29999939999999997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="3.600069000000076mm" pcbY="0.25751790000003894mm" width="0.6999986mm" height="1.3999972mm" shape="rect" />
<silkscreenpath route={[{"x":3.936949199999958,"y":-1.0375265000000127},{"x":3.936949199999958,"y":-11.037506500000063}]} />
<silkscreenpath route={[{"x":-3.9370508000000655,"y":-1.0375265000000127},{"x":-3.9370508000000655,"y":-11.037506500000063}]} />
<silkscreenpath route={[{"x":-3.9370508000000655,"y":-11.037506500000063},{"x":3.936949199999958,"y":-11.037506500000063}]} />
<silkscreenpath route={[{"x":-4.149978999999917,"y":-0.8424798999999439},{"x":-4.149978999999917,"y":-1.7425289000000248}]} />
<silkscreenpath route={[{"x":4.150004399999943,"y":-0.8424798999999439},{"x":4.150004399999943,"y":-1.7425035000001117}]} />
<silkscreenpath route={[{"x":-3.0500319999998737,"y":-0.8424798999999439},{"x":-4.149978999999917,"y":-0.8424798999999439}]} />
<silkscreenpath route={[{"x":3.0499558000001343,"y":-0.8424798999999439},{"x":4.150004399999943,"y":-0.8424798999999439}]} />
<silkscreenpath route={[{"x":3.0499558000001343,"y":-1.5526384999999436},{"x":3.0499558000001343,"y":-0.8424798999999439}]} />
<silkscreenpath route={[{"x":-3.0500319999998737,"y":-0.8424798999999439},{"x":-3.0500319999998737,"y":-1.4679803000001357}]} />
<silkscreenpath route={[{"x":-3.0500319999998737,"y":-1.4679803000001357},{"x":-3.0500319999998737,"y":-1.48649690000002}]} />
<silkscreenpath route={[{"x":-3.0500319999998737,"y":-1.48649690000002},{"x":-2.9750568423763752,"y":-1.6675029423762453},{"x":-2.7940508000000364,"y":-1.7424781000000849}]} />
<silkscreenpath route={[{"x":-2.741040999999882,"y":-1.7424781000000849},{"x":2.860116199999993,"y":-1.7424781000000849}]} />
<silkscreenpath route={[{"x":2.860116199999993,"y":-1.7424781000000849},{"x":2.9943530684977304,"y":-1.686875368497681},{"x":3.0499558000001343,"y":-1.5526384999999436}]} />
<silkscreenpath route={[{"x":-3.9370508000000655,"y":-0.8424799000000576},{"x":-3.9355600774840696,"y":-0.8430973774839003},{"x":-3.9349425999999994,"y":-0.84458810000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=22ed94417bfe4c4d9fc9f2819b446fde&pn=C3151751",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00005079999993995443, y: -5.25250410000001, z: 0.049982450000004564 },
      }}
      {...props}
    />
  )
}