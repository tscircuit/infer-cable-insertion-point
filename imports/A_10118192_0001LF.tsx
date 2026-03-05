import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["Data_NEG"],
  pin3: ["Data_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["S1"],
  pin7: ["pin6_alt1"],
  pin8: ["pin6_alt1"],
  pin9: ["pin6_alt1"],
  pin10: ["pin6_alt1"],
  pin11: ["pin6_alt1"]
} as const

export const A_10118192_0001LF = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C132564"
  ]
}}
      manufacturerPartNumber="A_10118192_0001LF"
      footprint={<footprint>
        <smtpad portHints={["pin3"]} pcbX="1.4210854715202004e-14mm" pcbY="1.6247935499999926mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6502399999999824mm" pcbY="1.6247935499999926mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.3004800000000074mm" pcbY="1.6247935499999926mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6502400000000108mm" pcbY="1.6247935499999926mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.3004799999999932mm" pcbY="1.6247935499999926mm" width="0.39999919999999994mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="3.1000700000000023mm" pcbY="1.2003595499999733mm" width="2.0999958mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-3.100069999999988mm" pcbY="1.2003595499999733mm" width="2.0999958mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.1988800000000168mm" pcbY="-1.3498004500000036mm" width="1.8999962mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.1988800000000026mm" pcbY="-1.3498004500000036mm" width="1.8999962mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="3.799840000000003mm" pcbY="-1.3498004500000036mm" width="1.7999964mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-3.799839999999989mm" pcbY="-1.3498004500000036mm" width="1.7999964mm" height="1.8999962mm" shape="rect" />
<silkscreenpath route={[{"x":4.0487600000000015,"y":0.25045034999999416},{"x":4.0487600000000015,"y":-0.24992965000001277}]} />
<silkscreenpath route={[{"x":1.6510000000000105,"y":2.000510349999999},{"x":1.950720000000004,"y":2.000510349999999}]} />
<silkscreenpath route={[{"x":-4.048759999999987,"y":0.25045034999999416},{"x":-4.048759999999987,"y":-0.19912965000001748}]} />
<silkscreenpath route={[{"x":-1.8999199999999945,"y":2.000510349999999},{"x":-1.6001999999999867,"y":2.000510349999999}]} />
<silkscreenpath route={[{"x":-4.048759999999987,"y":-2.9499496500000078},{"x":-4.048759999999987,"y":-3.7500496500000082},{"x":-3.5509199999999908,"y":-3.7500496500000082}]} />
<silkscreenpath route={[{"x":3.5991800000000183,"y":-3.7500496500000082},{"x":4.0487600000000015,"y":-3.7500496500000082},{"x":4.0487600000000015,"y":-2.8991496500000125}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2d99397cd09b40a1b24456a12c1e3328&pn=C132564",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 1.4210854715202004e-14, y: -1.0126916500000078, z: -1.4997985499999984 },
      }}
      {...props}
    />
  )
}