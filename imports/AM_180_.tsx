import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["EH1"],
  pin6: ["pin5_alt1"]
} as const

export const AM_180_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2681564"
  ]
}}
      manufacturerPartNumber="AM_180_"
      footprint={<footprint>
        <hole pcbX="-2.299982699999987mm" pcbY="-1.6700246000000334mm" diameter="1.3000228mm" />
<hole pcbX="2.29995729999996mm" pcbY="-1.6700246000000334mm" diameter="1.3000228mm" />
<platedhole  portHints={["pin5"]} pcbX="-5.849886699999956mm" pcbY="-1.6700245999999197mm" holeWidth="0.9000235999999999mm" holeHeight="2.9000196000000003mm" outerWidth="1.499997mm" outerHeight="3.4999930000000004mm" shape="pill" />
<platedhole  portHints={["pin6"]} pcbX="5.84988670000007mm" pcbY="-1.6700245999999197mm" holeWidth="0.9000235999999999mm" holeHeight="2.9000196000000003mm" outerWidth="1.499997mm" outerHeight="3.4999930000000004mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="3.5001073000000815mm" pcbY="1.0500614000000041mm" width="1.3500100000000002mm" height="3.1999935999999995mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0.9999852999999348mm" pcbY="1.0500614000000041mm" width="1.3500100000000002mm" height="3.1999935999999995mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.000010699999848mm" pcbY="1.0500614000000041mm" width="1.3500100000000002mm" height="3.1999935999999995mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-3.4998787000000675mm" pcbY="1.0500614000000041mm" width="1.3500100000000002mm" height="3.1999935999999995mm" shape="rect" />
<silkscreenpath route={[{"x":4.406252299999892,"y":0.4290313999999853},{"x":5.968987300000094,"y":0.4290313999999853},{"x":5.968987300000094,"y":0.3020313999999189}]} />
<silkscreenpath route={[{"x":-5.9690127000000075,"y":0.4290313999999853},{"x":-5.9690127000000075,"y":0.2863088000000289}]} />
<silkscreenpath route={[{"x":1.9061303000000862,"y":0.4290313999999853},{"x":2.593962300000044,"y":0.4290313999999853}]} />
<silkscreenpath route={[{"x":-0.09386569999992389,"y":0.4290313999999853},{"x":0.09384029999989707,"y":0.4290313999999853}]} />
<silkscreenpath route={[{"x":-2.593733699999916,"y":0.4290313999999853},{"x":-1.9061556999998857,"y":0.4290313999999853}]} />
<silkscreenpath route={[{"x":-5.9690127000000075,"y":0.4290313999999853},{"x":-4.4060236999999915,"y":0.4290313999999853}]} />
<silkscreenpath route={[{"x":5.99997529999996,"y":-4.669916999999941},{"x":5.99997529999996,"y":-3.618585600000074}]} />
<silkscreenpath route={[{"x":-6.000000699999987,"y":-4.669916999999941},{"x":-6.000000699999987,"y":-3.618585600000074}]} />
<silkscreenpath route={[{"x":5.99997529999996,"y":-4.669916999999941},{"x":5.99997529999996,"y":-19.382917800000087},{"x":-6.000000699999987,"y":-19.382917800000087}]} />
<silkscreenpath route={[{"x":-6.000000699999987,"y":-4.669916999999941},{"x":-6.000000699999987,"y":-19.382917800000087}]} />
<silkscreenpath route={[{"x":5.99997529999996,"y":-4.669916999999941},{"x":-6.000000699999987,"y":-4.669916999999941}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2fe852bd78b54ad4bfe1ec0c087d4356&pn=C2681564",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.000012699999956566899, y: -8.809913800000004, z: -1.3850413999999887 },
      }}
      {...props}
    />
  )
}