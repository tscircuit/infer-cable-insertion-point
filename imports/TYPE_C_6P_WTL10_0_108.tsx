import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["EH2"],
  pin14: ["EH1"],
  pin15: ["pin13_alt1"],
  pin16: ["pin14_alt1"],
  pin17: ["B12"],
  pin18: ["B9"],
  pin19: ["A5"],
  pin20: ["B5"],
  pin21: ["A9"],
  pin22: ["A12"]
} as const

export const TYPE_C_6P_WTL10_0_108 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C30167331"
  ]
}}
      manufacturerPartNumber="TYPE_C_6P_WTL10_0_108"
      footprint={<footprint>
        <platedhole  portHints={["pin14"]} pcbX="4.299965999999927mm" pcbY="-2.7950159499999927mm" holeWidth="0.5500115999999999mm" holeHeight="1.2500102000000002mm" outerWidth="0.7999983999999999mm" outerHeight="1.499997mm" shape="pill" />
<platedhole  portHints={["pin13"]} pcbX="4.299965999999927mm" pcbY="1.4051280500000303mm" holeWidth="0.5500115999999999mm" holeHeight="1.2500102mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="-4.299965999999927mm" pcbY="1.4051280500000303mm" holeWidth="0.5500115999999999mm" holeHeight="1.2500102mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="-4.299965999999927mm" pcbY="-2.7950159499999927mm" holeWidth="0.5500115999999999mm" holeHeight="1.2500102000000002mm" outerWidth="0.7999983999999999mm" outerHeight="1.499997mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="2.7500579999999673mm" pcbY="2.255012050000005mm" width="0.7999983999999999mm" height="1.1800077999999998mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.649983999999904mm" pcbY="2.255012050000005mm" width="0.7999983999999999mm" height="1.1800077999999998mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.5499099999999544mm" pcbY="2.255012050000005mm" width="0.7999983999999999mm" height="1.1800077999999998mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-0.5499100000001818mm" pcbY="2.255012050000005mm" width="0.7999983999999999mm" height="1.1800077999999998mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-1.6499840000000177mm" pcbY="2.255012050000005mm" width="0.7999983999999999mm" height="1.1800077999999998mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-2.7500579999999673mm" pcbY="2.255012050000005mm" width="0.7999983999999999mm" height="1.1800077999999998mm" shape="rect" />
<silkscreenpath route={[{"x":3.381146400000034,"y":1.9551396499999782},{"x":3.5968178000000535,"y":1.9551396499999782}]} />
<silkscreenpath route={[{"x":-3.5968431999999666,"y":1.9551396499999782},{"x":-3.3811210000000074,"y":1.9551396499999782}]} />
<silkscreenpath route={[{"x":4.424984799999947,"y":-1.8262853500000347},{"x":4.424984799999947,"y":0.33477205000008325}]} />
<silkscreenpath route={[{"x":4.424984799999947,"y":-8.044865750000099},{"x":4.424984799999947,"y":-3.7634671499999968}]} />
<silkscreenpath route={[{"x":-4.425010200000088,"y":-1.8262853500000347},{"x":-4.425010200000088,"y":0.33477205000008325}]} />
<silkscreenpath route={[{"x":-4.425010200000088,"y":-8.044865750000099},{"x":-4.425010200000088,"y":-3.7634671499999968}]} />
<silkscreenpath route={[{"x":-4.425010200000088,"y":-8.044865750000099},{"x":4.424984799999947,"y":-8.044865750000099}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c18e714b5da347a4b5a38d20177ea13e&pn=C30167331",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.000025400000026820635, y: -2.5978865499999984, z: -2.0450159500000042 },
      }}
      {...props}
    />
  )
}