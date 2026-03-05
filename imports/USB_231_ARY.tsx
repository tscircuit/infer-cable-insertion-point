import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND1"],
  pin5: ["GND2"],
  pin6: ["GND3"]
} as const

export const USB_231_ARY = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C720525"
  ]
}}
      manufacturerPartNumber="USB_231_ARY"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.500120000000038mm" pcbY="1.7799621499999603mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.999998000000005mm" pcbY="1.7799621499999603mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0.999998000000005mm" pcbY="1.7799621499999603mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.4998659999998836mm" pcbY="1.7799621499999603mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-6.569964000000027mm" pcbY="-0.9299638500000356mm" outerDiameter="3.2999933999999995mm" holeDiameter="2.5000203999999995mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="6.569964000000027mm" pcbY="-0.9299638500000356mm" outerDiameter="3.2999933999999995mm" holeDiameter="2.5000203999999995mm" shape="circle" />
<silkscreenpath route={[{"x":7.238974599999892,"y":-2.6879486500000667},{"x":7.238974599999892,"y":-11.25897544999998}]} />
<silkscreenpath route={[{"x":-7.225030000000061,"y":0.8332787499999768},{"x":-7.225030000000061,"y":2.9650245500000665},{"x":7.238974599999892,"y":2.9650245500000665},{"x":7.238974599999892,"y":0.8280209499999955}]} />
<silkscreenpath route={[{"x":-7.225030000000061,"y":-11.229968649999932},{"x":-7.225030000000061,"y":-2.693206449999934}]} />
<silkscreenpath route={[{"x":7.224979200000007,"y":-11.229968649999932},{"x":-7.225030000000061,"y":-11.229968649999932}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2c22904cfa634797a8992a7288a8f253&pn=C720525",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.1368683772161603e-13, y: -4.225004250000097, z: -1.7799605500000097 },
      }}
      {...props}
    />
  )
}