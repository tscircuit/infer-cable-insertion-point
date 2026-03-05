import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND1"],
  pin5: ["SSRX_NEG"],
  pin6: ["SSRX_POS"],
  pin7: ["GND2"],
  pin8: ["SSTX_NEG"],
  pin9: ["SSTX_POS"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin11_alt1"],
  pin13: ["pin10_alt1"]
} as const

export const HC_USB3_0_L257_P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7501847"
  ]
}}
      manufacturerPartNumber="HC_USB3_0_L257_P"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="3.500120000000038mm" pcbY="0.9000489999999672mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0.999998000000005mm" pcbY="0.9000489999999672mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-0.9999979999998914mm" pcbY="0.9000489999999672mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-3.4998659999998836mm" pcbY="0.9000489999999672mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-3.9999919999999065mm" pcbY="-0.9000490000000809mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-1.99999600000001mm" pcbY="-0.9000490000000809mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="1.1368683772161603e-13mm" pcbY="-0.9000490000000809mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="1.9999960000001238mm" pcbY="-0.9000490000000809mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="3.9999920000002476mm" pcbY="-0.9000490000000809mm" outerDiameter="1.0999978mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="-5.350002000000018mm" pcbY="2.7100530000000163mm" holeWidth="0.7999983999999999mm" holeHeight="2.0999957999999994mm" outerWidth="1.3999972mm" outerHeight="2.6999945999999997mm" shape="pill" />
<platedhole  portHints={["pin12"]} pcbX="-5.350002000000018mm" pcbY="-2.7100530000000163mm" holeWidth="0.7999983999999999mm" holeHeight="1.3999971999999996mm" outerWidth="1.3999972mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin10"]} pcbX="5.350002000000018mm" pcbY="-2.7100530000000163mm" holeWidth="0.7999983999999999mm" holeHeight="2.0999957999999994mm" outerWidth="1.3999972mm" outerHeight="2.6999945999999997mm" shape="pill" />
<platedhole  portHints={["pin13"]} pcbX="5.350002000000018mm" pcbY="2.7100530000000163mm" holeWidth="0.7999983999999999mm" holeHeight="1.3999971999999996mm" outerWidth="1.3999972mm" outerHeight="1.9999959999999999mm" shape="pill" />
<silkscreenpath route={[{"x":-10.435158199999933,"y":1.2959842000000208},{"x":-10.435158199999933,"y":-1.4822170000001051}]} />
<silkscreenpath route={[{"x":-11.047374399999853,"y":1.2271756000000096},{"x":-11.047374399999853,"y":-1.4294866000000184}]} />
<silkscreenpath route={[{"x":-13.412596999999892,"y":0.9613391999999976},{"x":-13.412596999999892,"y":-1.202740800000015}]} />
<silkscreenpath route={[{"x":-14.042339199999901,"y":0.8905493999999408},{"x":-14.042339199999901,"y":-1.134364000000005}]} />
<silkscreenpath route={[{"x":-10.158425199999897,"y":-1.8924269999999979},{"x":-15.90136519999976,"y":-1.5424150000000054},{"x":-15.890189200000009,"y":1.340738999999985},{"x":-10.155123199999935,"y":1.8357849999999871},{"x":-10.158933199999979,"y":1.3270229999998264},{"x":-14.699183199999993,"y":0.8167369999998755},{"x":-15.377363199999877,"y":0.7415529999999535},{"x":-15.366695199999867,"y":-1.0082529999999679},{"x":-10.588447199999905,"y":-1.4822170000001051},{"x":-10.158425199999897,"y":-1.5121890000000349},{"x":-10.158425199999897,"y":-1.8924269999999979}]} />
<silkscreenpath route={[{"x":-18.549950200000012,"y":-3.7250369999999293},{"x":-18.549950200000012,"y":3.7259513999999854}]} />
<silkscreenpath route={[{"x":7.149998400000072,"y":3.724909999999909},{"x":-18.557951199999934,"y":3.724909999999909}]} />
<silkscreenpath route={[{"x":7.149998400000072,"y":-3.7250369999999293},{"x":7.149998400000072,"y":3.724909999999909}]} />
<silkscreenpath route={[{"x":7.149998400000072,"y":-3.7250369999999293},{"x":-18.549950200000012,"y":-3.7250369999999293}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e20a9ee151d442b8841a33fc2d596e9f&pn=C7501847",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -5.6999631999999565, y: -0.00005080000005364127, z: -1.9600529999999707 },
      }}
      {...props}
    />
  )
}