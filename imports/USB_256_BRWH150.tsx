import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND1"],
  pin5: ["GND2"],
  pin6: ["GND3"]
} as const

export const USB_256_BRWH150 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C720544"
  ]
}}
      manufacturerPartNumber="USB_256_BRWH150"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.4998659999999973mm" pcbY="0.8250237999999399mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.9999979999998914mm" pcbY="0.8250237999999399mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0.9999979999998914mm" pcbY="0.8250237999999399mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.500120000000038mm" pcbY="0.8250237999999399mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-6.350000000000023mm" pcbY="-1.575022200000035mm" holeWidth="0.7999983999999999mm" holeHeight="2.2759924mm" outerWidth="1.524mm" outerHeight="2.999994mm" shape="pill" />
<platedhole  portHints={["pin6"]} pcbX="6.349999999999909mm" pcbY="-1.575022200000035mm" holeWidth="0.7999983999999999mm" holeHeight="2.2759924mm" outerWidth="1.524mm" outerHeight="2.999994mm" shape="pill" />
<silkscreenpath route={[{"x":6.406007000000045,"y":0.1545907999999372},{"x":6.406007000000045,"y":2.60302379999996},{"x":-6.547993000000133,"y":2.60302379999996}]} />
<silkscreenpath route={[{"x":-6.547993000000133,"y":-3.286118600000009},{"x":-6.547993000000133,"y":-3.365976200000091},{"x":6.406007000000045,"y":-3.365976200000091},{"x":6.406007000000045,"y":-3.304533600000127}]} />
<silkscreenpath route={[{"x":-6.547993000000133,"y":2.60302379999996},{"x":-6.547993000000133,"y":0.13617579999993268}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2cbef0f202834bdbbf137e7500c66c9a&pn=C720544",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 0, y: -0.3749738000000207, z: -0.8250221999999894 },
      }}
      {...props}
    />
  )
}