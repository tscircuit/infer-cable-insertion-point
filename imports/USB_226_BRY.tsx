import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["EH1"],
  pin6: ["pin5_alt1"],
  pin7: ["pin5_alt1"],
  pin8: ["pin5_alt1"]
} as const

export const USB_226_BRY = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C720523"
  ]
}}
      manufacturerPartNumber="USB_226_BRY"
      footprint={<footprint>
        <platedhole  portHints={["pin4"]} pcbX="0mm" pcbY="2.9997399999999956mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="0.999998000000005mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="-0.999998000000005mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="0mm" pcbY="-2.999994000000001mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-2.7500579999999957mm" pcbY="3.5001200000000026mm" outerDiameter="2.7999944mm" holeDiameter="1.9000215999999999mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-2.7500579999999957mm" pcbY="-3.5001200000000097mm" outerDiameter="2.7999944mm" holeDiameter="1.9000215999999999mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="2.75005800000001mm" pcbY="-3.5001200000000097mm" outerDiameter="2.7999944mm" holeDiameter="1.9000215999999999mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="2.75005800000001mm" pcbY="3.5001200000000026mm" outerDiameter="2.7999944mm" holeDiameter="1.9000215999999999mm" shape="circle" />
<silkscreenpath route={[{"x":3.5499293999999963,"y":-15.099969799999997},{"x":3.5499293999999963,"y":-15.399867599999993}]} />
<silkscreenpath route={[{"x":2.850007000000005,"y":-1.872056200000003},{"x":2.850007000000005,"y":1.872056200000003}]} />
<silkscreenpath route={[{"x":-2.850007000000005,"y":-1.872056200000003},{"x":-2.850007000000005,"y":1.872056200000003}]} />
<silkscreenpath route={[{"x":-3.5501325999999835,"y":-15.399867599999993},{"x":-3.5501325999999835,"y":-15.099969799999997},{"x":-2.850007000000005,"y":-15.099969799999997},{"x":-2.850007000000005,"y":-5.128183800000002}]} />
<silkscreenpath route={[{"x":2.850007000000005,"y":-5.128183800000002},{"x":2.850007000000005,"y":-15.099969799999997},{"x":3.5499293999999963,"y":-15.099969799999997}]} />
<silkscreenpath route={[{"x":-1.276908800000001,"y":4.200144000000002},{"x":1.2769595999999979,"y":4.200144000000002}]} />
<silkscreenpath route={[{"x":3.5499293999999963,"y":-15.399867599999993},{"x":-3.5501325999999835,"y":-15.399867599999993}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=9403053e8ece4ada898d9fbae06d8d93&pn=C720523",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.000025399999998398926, y: -5.5938673999999935, z: -4.100117200000008 },
      }}
      {...props}
    />
  )
}