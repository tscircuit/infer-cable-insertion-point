import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["EH1"],
  pin7: ["pin6_alt1"]
} as const

export const U215_051N_4BP81 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2682228"
  ]
}}
      manufacturerPartNumber="U215_051N_4BP81"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-1.5999460000000454mm" pcbY="-0.9499600000000328mm" outerDiameter="1.1999975999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.799846000000116mm" pcbY="0.9499600000000328mm" outerDiameter="1.1999975999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-1.1368683772161603e-13mm" pcbY="-0.9499600000000328mm" outerDiameter="1.1999975999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="0.8000999999998157mm" pcbY="0.9499600000000328mm" outerDiameter="1.1999975999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="1.599945999999818mm" pcbY="-0.9499600000000328mm" outerDiameter="1.1999975999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-3.6499800000000278mm" pcbY="-0.009906000000000859mm" holeWidth="0.700024mm" holeHeight="2.0000213999999996mm" outerWidth="1.1999975999999999mm" outerHeight="2.4999949999999997mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="3.6499800000000278mm" pcbY="-0.009906000000000859mm" holeWidth="0.700024mm" holeHeight="2.0000213999999996mm" outerWidth="1.1999975999999999mm" outerHeight="2.4999949999999997mm" shape="pill" />
<silkscreenpath route={[{"x":3.85005579999995,"y":-1.466596000000095},{"x":3.85005579999995,"y":-1.9999705999999833}]} />
<silkscreenpath route={[{"x":3.85005579999995,"y":2.000021400000037},{"x":3.85005579999995,"y":1.4466823999998724}]} />
<silkscreenpath route={[{"x":-3.8499541999999565,"y":-1.466596000000095},{"x":-3.8499541999999565,"y":-1.9999705999999833}]} />
<silkscreenpath route={[{"x":-3.8499541999999565,"y":2.000021400000037},{"x":-3.8499541999999565,"y":1.4466823999998724}]} />
<silkscreenpath route={[{"x":3.85005579999995,"y":-1.9999705999999833},{"x":-3.8499541999999565,"y":-1.9999705999999833}]} />
<silkscreenpath route={[{"x":3.85005579999995,"y":2.000021400000037},{"x":-3.8499541999999565,"y":2.000021400000037}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=25d29d1dcdcf4c6aa1cc65772a5f505b&pn=C2682228",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.000050799999826267594, y: 0.000025399999913133797, z: -0.749958800000013 },
      }}
      {...props}
    />
  )
}