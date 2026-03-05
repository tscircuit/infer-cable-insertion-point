import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["D_NEG1"],
  pin3: ["D_POS1"],
  pin4: ["GND1"],
  pin5: ["VCC2"],
  pin6: ["D_NEG2"],
  pin7: ["D_POS2"],
  pin8: ["GND2"],
  pin9: ["SHELL1"],
  pin10: ["SHELL2"],
  pin11: ["SHELL3"],
  pin12: ["SHELL4"]
} as const

export const AF_SS_JB17_6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C456021"
  ]
}}
      manufacturerPartNumber="AF_SS_JB17_6"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.499992999999904mm" pcbY="2.4499570000000404mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.9998709999999846mm" pcbY="2.4499570000000404mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.0001250000000255mm" pcbY="2.4499570000000404mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.4999930000001314mm" pcbY="2.4499570000000404mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-3.499992999999904mm" pcbY="-0.14998700000001008mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-0.9998709999999846mm" pcbY="-0.14998700000001008mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="1.0001250000000255mm" pcbY="-0.14998700000001008mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="3.4999930000001314mm" pcbY="-0.14998700000001008mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-6.550025000000005mm" pcbY="2.850007000000005mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="6.550025000000005mm" pcbY="2.850007000000005mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="-6.550025000000005mm" pcbY="-2.8500069999998914mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="6.550025000000005mm" pcbY="-2.8500069999998914mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<silkscreenpath route={[{"x":7.3659999999999854,"y":-4.376445399999966},{"x":7.3659999999999854,"y":-12.826999999999884},{"x":-7.3659999999999854,"y":-12.826999999999884}]} />
<silkscreenpath route={[{"x":7.3659999999999854,"y":1.3235686000000442},{"x":7.3659999999999854,"y":-1.3235686000000442}]} />
<silkscreenpath route={[{"x":-7.3659999999999854,"y":4.376445399999966},{"x":-7.3659999999999854,"y":4.826000000000022},{"x":7.3659999999999854,"y":4.826000000000022},{"x":7.3659999999999854,"y":4.376445399999966}]} />
<silkscreenpath route={[{"x":-7.3659999999999854,"y":-1.3235686000000442},{"x":-7.3659999999999854,"y":1.3235686000000442}]} />
<silkscreenpath route={[{"x":-7.3659999999999854,"y":-12.826999999999884},{"x":-7.3659999999999854,"y":-4.376445399999966}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=49889e8479314b9894f916135c24ddd0&pn=C456021",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.000025400000140507473, y: -4.011980799999947, z: -3.550003999999956 },
      }}
      {...props}
    />
  )
}