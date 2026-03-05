import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["SH1"],
  pin6: ["SH2"]
} as const

export const A_921_111A1010D10200 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C46392"
  ]
}}
      manufacturerPartNumber="A_921_111A1010D10200"
      footprint={<footprint>
        <platedhole  portHints={["pin3"]} pcbX="-1.250060999999988mm" pcbY="0.7549642000000034mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.249807000000004mm" pcbY="0.7549642000000034mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="1.249807000000004mm" pcbY="2.7549601999999993mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.250060999999988mm" pcbY="2.7549601999999993mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-6.019926999999996mm" pcbY="-1.9549617999999924mm" outerDiameter="3.0999938mm" holeDiameter="2.3999951999999998mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="6.01992700000001mm" pcbY="-1.9549617999999924mm" outerDiameter="3.0999938mm" holeDiameter="2.3999951999999998mm" shape="circle" />
<silkscreenpath route={[{"x":-6.100114799999986,"y":4.005072000000013},{"x":-6.100114799999986,"y":-0.17569179999999562}]} />
<silkscreenpath route={[{"x":6.099860800000016,"y":4.005072000000013},{"x":-6.100114799999986,"y":4.005072000000013}]} />
<silkscreenpath route={[{"x":6.099860800000016,"y":-0.17569179999999562},{"x":6.099860800000016,"y":4.005072000000013}]} />
<silkscreenpath route={[{"x":6.099860800000016,"y":-12.494894999999985},{"x":6.099860800000016,"y":-3.734384199999994}]} />
<silkscreenpath route={[{"x":-6.100114799999986,"y":-12.494894999999985},{"x":-6.100114799999986,"y":-3.734384199999994}]} />
<silkscreenpath route={[{"x":-6.100114799999986,"y":-12.494894999999985},{"x":6.099860800000016,"y":-12.494894999999985}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=3c1ae222a4354167951feaf7424cdf3b&pn=C46392",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00012699999999199463, y: -4.050055399999991, z: -2.704958699999996 },
      }}
      {...props}
    />
  )
}