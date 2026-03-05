import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin17: ["EH2"],
  pin18: ["EH3"],
  pin19: ["EH4"],
  pin20: ["EH1"],
  pin21: ["B5"],
  pin22: ["A8"],
  pin23: ["B6"],
  pin24: ["A7"],
  pin25: ["A6"],
  pin26: ["B7"],
  pin27: ["A5"],
  pin28: ["B8"],
  pin29: ["A1B12"],
  pin30: ["A4B9"],
  pin31: ["B4A9"],
  pin32: ["B1A12"]
} as const

export const UC09_0B16F00P11 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C36936538"
  ]
}}
      manufacturerPartNumber="UC09_0B16F00P11"
      footprint={<footprint>
        <hole pcbX="2.889758000000029mm" pcbY="0.9337358000001359mm" diameter="0.6499860000000001mm" />
<hole pcbX="-2.8900120000000697mm" pcbY="0.9332278000001679mm" diameter="0.6499860000000001mm" />
<platedhole  portHints={["pin20"]} pcbX="-4.320031999999969mm" pcbY="1.4938058000000183mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="1.0999978mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="4.319778000000042mm" pcbY="1.4938058000000183mm" holeWidth="0.5999987999999999mm" holeHeight="1.6999966mm" outerWidth="1.0999978mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="4.320032000000083mm" pcbY="-2.6563001999999187mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="1.0999978mm" outerHeight="2.2999954mm" shape="pill" />
<platedhole  portHints={["pin19"]} pcbX="-4.320031999999969mm" pcbY="-2.6563001999999187mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="1.0999978mm" outerHeight="2.2999954mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="1.749806000000035mm" pcbY="2.0988338000000795mm" width="0.29999939999999997mm" height="1.2100052mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="1.2494259999998576mm" pcbY="2.0988338000000795mm" width="0.29999939999999997mm" height="1.2100052mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="0.7498080000001437mm" pcbY="2.0988338000000795mm" width="0.29999939999999997mm" height="1.2100052mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="0.24968200000012075mm" pcbY="2.0988338000000795mm" width="0.29999939999999997mm" height="1.2100052mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-0.25018999999997504mm" pcbY="2.0988338000000795mm" width="0.29999939999999997mm" height="1.2100052mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-0.750315999999998mm" pcbY="2.0988338000000795mm" width="0.29999939999999997mm" height="1.2100052mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-1.25018799999998mm" pcbY="2.0988338000000795mm" width="0.29999939999999997mm" height="1.2100052mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-1.7503140000001167mm" pcbY="2.0988338000000795mm" width="0.29999939999999997mm" height="1.2100052mm" shape="rect" />
<smtpad portHints={["pin29"]} points={[{x: "-2.9002735999999913mm", y: "1.4938312000001588mm"}, {x: "-2.9002735999999913mm", y: "2.7038364mm"}, {x: "-3.2002476000000115mm", y: "2.7038364mm"}, {x: "-3.2002729999999247mm", y: "2.7038364mm"}, {x: "-3.500246999999945mm", y: "2.7038364mm"}, {x: "-3.500246999999945mm", y: "1.4938312000001588mm"}, {x: "-3.2002729999999247mm", y: "1.4938312000001588mm"}, {x: "-3.2002476000000115mm", y: "1.4938312000001588mm"}]} shape="polygon" />
<smtpad portHints={["pin30"]} points={[{x: "-2.1001735999999482mm", y: "1.4938312000001588mm"}, {x: "-2.1001735999999482mm", y: "2.7038364mm"}, {x: "-2.4001475999999684mm", y: "2.7038364mm"}, {x: "-2.4001729999999952mm", y: "2.7038364mm"}, {x: "-2.7001469999999017mm", y: "2.7038364mm"}, {x: "-2.7001469999999017mm", y: "1.4938312000001588mm"}, {x: "-2.4001729999999952mm", y: "1.4938312000001588mm"}, {x: "-2.4001475999999684mm", y: "1.4938312000001588mm"}]} shape="polygon" />
<smtpad portHints={["pin31"]} points={[{x: "2.6996644000000742mm", y: "1.4938058000000183mm"}, {x: "2.6996644000000742mm", y: "2.7038364mm"}, {x: "2.399690400000054mm", y: "2.7038364mm"}, {x: "2.399690400000054mm", y: "2.7038364mm"}, {x: "2.099716400000034mm", y: "2.7038364mm"}, {x: "2.099716400000034mm", y: "1.4938058000000183mm"}, {x: "2.399690400000054mm", y: "1.4938058000000183mm"}, {x: "2.399690400000054mm", y: "1.4938058000000183mm"}]} shape="polygon" />
<smtpad portHints={["pin32"]} points={[{x: "3.4999422000000777mm", y: "1.4962950000001456mm"}, {x: "3.4999422000000777mm", y: "2.706300199999987mm"}, {x: "3.1999428000000307mm", y: "2.706300199999987mm"}, {x: "3.1999428000000307mm", y: "2.706300199999987mm"}, {x: "2.8999688000000106mm", y: "2.706300199999987mm"}, {x: "2.8999688000000106mm", y: "1.4962950000001456mm"}, {x: "3.1999428000000307mm", y: "1.4962950000001456mm"}, {x: "3.1999428000000307mm", y: "1.4962950000001456mm"}]} shape="polygon" />
<silkscreenpath route={[{"x":4.479950400000007,"y":-1.2917613999999276},{"x":4.479950400000007,"y":0.17930499999999938}]} />
<silkscreenpath route={[{"x":-4.4700443999998924,"y":-4.022845599999982},{"x":-4.4700443999998924,"y":-5.20866999999987},{"x":4.479950400000007,"y":-5.20866999999987},{"x":4.479950400000007,"y":-4.02083899999991}]} />
<silkscreenpath route={[{"x":-4.4700443999998924,"y":0.17724759999998696},{"x":-4.4700443999998924,"y":-1.2897548000000825}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c865a190c46d45e59c33fd5e1228a1a8&pn=C36936538",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.4874937999999247, z: -1.90630019999993 },
      }}
      {...props}
    />
  )
}