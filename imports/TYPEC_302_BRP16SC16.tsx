import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND2"],
  pin2: ["VBUS2"],
  pin3: ["SBU2"],
  pin4: ["CC1"],
  pin5: ["DN2"],
  pin6: ["DP1"],
  pin7: ["DN1"],
  pin8: ["DP2"],
  pin9: ["SBU1"],
  pin10: ["CC2"],
  pin11: ["VBUS1"],
  pin12: ["GND1"],
  pin13: ["SHELL1"],
  pin14: ["SHELL2"],
  pin15: ["SHELL3"],
  pin16: ["SHELL4"]
} as const

export const TYPEC_302_BRP16SC16 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2835313"
  ]
}}
      manufacturerPartNumber="TYPEC_302_BRP16SC16"
      footprint={<footprint>
        <platedhole  portHints={["pin13"]} pcbX="-5.619991300000038mm" pcbY="1.4522259499998427mm" holeWidth="0.6100064000000001mm" holeHeight="1.4100048mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="5.620016699999951mm" pcbY="1.4522259499998427mm" holeWidth="0.6100064000000001mm" holeHeight="1.4100048mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="-5.619991300000038mm" pcbY="-2.547766050000064mm" holeWidth="0.6100064000000001mm" holeHeight="1.810004mm" outerWidth="0.9999979999999999mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="5.620016699999951mm" pcbY="-2.547766050000064mm" holeWidth="0.6100064000000001mm" holeHeight="1.810004mm" outerWidth="0.9999979999999999mm" outerHeight="2.1999956mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="3.199904700000161mm" pcbY="2.602337949999878mm" width="0.5999987999999999mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.400058700000045mm" pcbY="2.602591949999919mm" width="0.5999987999999999mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.7500727000000325mm" pcbY="2.602591949999919mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.2499467000000095mm" pcbY="2.602591949999919mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.7500747000000274mm" pcbY="2.602591949999919mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.24994870000000446mm" pcbY="2.602591949999919mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.24992330000009133mm" pcbY="2.602591949999919mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.7500493000001143mm" pcbY="2.602591949999919mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.2499212999999827mm" pcbY="2.602591949999919mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.7500473000000056mm" pcbY="2.602591949999919mm" width="0.29999939999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.4000332999999046mm" pcbY="2.602591949999919mm" width="0.5999987999999999mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-3.1998793000000205mm" pcbY="2.602591949999919mm" width="0.5999987999999999mm" height="1.0999978mm" shape="rect" />
<silkscreenpath route={[{"x":-4.51819009999997,"y":1.8408459499999026},{"x":4.581791700000053,"y":1.8408459499999026}]} />
<silkscreenpath route={[{"x":4.5815884999999525,"y":-4.754645050000022},{"x":4.5815884999999525,"y":1.8453671499997881}]} />
<silkscreenpath route={[{"x":-4.533328499999925,"y":-4.753349650000132},{"x":-4.533328499999925,"y":1.8466117499998518}]} />
<silkscreenpath route={[{"x":3.6700078999999732,"y":2.58745354999985},{"x":4.810010699999907,"y":2.5774459499998557},{"x":4.810010699999907,"y":0.9174543499999572},{"x":4.9014506999998275,"y":0.9174543499999572}]} />
<silkscreenpath route={[{"x":4.555401099999926,"y":-4.672526850000054},{"x":-4.789970100000005,"y":-4.672526850000054},{"x":-4.789970100000005,"y":-3.006820250000146}]} />
<silkscreenpath route={[{"x":4.810010699999907,"y":-3.2725296500001377},{"x":4.810010699999907,"y":-4.672526850000054},{"x":4.500003700000093,"y":-4.672526850000054}]} />
<silkscreenpath route={[{"x":4.810010699999907,"y":-3.2725296500001377},{"x":4.899647300000083,"y":-3.2725296500001377}]} />
<silkscreenpath route={[{"x":4.810010699999907,"y":-1.962524650000205},{"x":4.810010699999907,"y":-3.2725296500001377}]} />
<silkscreenpath route={[{"x":4.810010699999907,"y":0.9174543499999572},{"x":4.810010699999907,"y":-1.962524650000205},{"x":4.888877699999966,"y":-1.962524650000205}]} />
<silkscreenpath route={[{"x":-4.769980299999929,"y":0.9074721499998759},{"x":-4.769980299999929,"y":2.5774459499998557},{"x":-3.7311203000000432,"y":2.5774459499998557}]} />
<silkscreenpath route={[{"x":-4.769980299999929,"y":-1.9225450500000534},{"x":-4.769980299999929,"y":-3.2525398500001756},{"x":-4.896421499999974,"y":-3.2525398500001756}]} />
<silkscreenpath route={[{"x":-4.903381100000047,"y":0.9074721499998759},{"x":-4.769980299999929,"y":0.9074721499998759},{"x":-4.769980299999929,"y":-1.9225450500000534},{"x":-4.889284099999941,"y":-1.9225450500000534}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a829fc22076041c78945aea7c1afa1ac&pn=C2835313",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.000012700000070253736, y: -1.0225468500001398, z: -2.0751784499999646 },
      }}
      {...props}
    />
  )
}