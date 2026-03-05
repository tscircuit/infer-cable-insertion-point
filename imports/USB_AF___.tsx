import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"]
} as const

export const USB_AF___ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C26235"
  ]
}}
      manufacturerPartNumber="USB_AF___"
      footprint={<footprint>
        <platedhole  portHints={["pin4"]} pcbX="0mm" pcbY="-2.9997400000000027mm" outerDiameter="1.6999966mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="-0.9982200000000176mm" outerDiameter="1.6999966mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="1.0007599999999996mm" outerDiameter="1.6999966mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="0mm" pcbY="3.0022799999999847mm" outerDiameter="1.6999966mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="2.7508200000000045mm" pcbY="-3.5001199999999955mm" outerDiameter="2.999994mm" holeDiameter="1.9999959999999999mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="2.7508200000000045mm" pcbY="3.5001199999999812mm" outerDiameter="2.999994mm" holeDiameter="1.9999959999999999mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-2.7508199999999903mm" pcbY="3.5001199999999812mm" outerDiameter="2.999994mm" holeDiameter="1.9999959999999999mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-2.7508199999999903mm" pcbY="-3.5001199999999955mm" outerDiameter="2.999994mm" holeDiameter="1.9999959999999999mm" shape="circle" />
<silkscreenpath route={[{"x":3.549904000000012,"y":15.150083999999993},{"x":3.549904000000012,"y":-4.449826000000016}]} />
<silkscreenpath route={[{"x":-3.549903999999998,"y":-4.45008},{"x":3.550157999999996,"y":-4.45008}]} />
<silkscreenpath route={[{"x":-3.549903999999998,"y":15.149829999999994},{"x":-3.549903999999998,"y":-4.45008}]} />
<silkscreenpath route={[{"x":-3.549903999999998,"y":15.150083999999993},{"x":3.550157999999996,"y":15.150083999999993}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=3bd6558fce8e4714baff51bcd3febac1&pn=C26235",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 5.02399299999999, z: -4.200116999999982 },
      }}
      {...props}
    />
  )
}