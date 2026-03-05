import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["EH1"],
  pin14: ["pin13_alt1"],
  pin15: ["pin13_alt1"],
  pin16: ["pin13_alt1"],
  pin17: ["B12"],
  pin18: ["B1"],
  pin19: ["B4"],
  pin20: ["B5"],
  pin21: ["B6"],
  pin22: ["B7"],
  pin23: ["B8"],
  pin24: ["B9"],
  pin25: ["A1"],
  pin26: ["A4"],
  pin27: ["A5"],
  pin28: ["A6"],
  pin29: ["A7"],
  pin30: ["A8"],
  pin31: ["A9"],
  pin32: ["A12"]
} as const

export const MC_118LD_H65 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C6332304"
  ]
}}
      manufacturerPartNumber="MC_118LD_H65"
      footprint={<footprint>
        <platedhole  portHints={["pin13"]} pcbX="2.4998679999998785mm" pcbY="2.1499957000000904mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="-2.500122000000033mm" pcbY="2.1499957000000904mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="2.4998679999998785mm" pcbY="-2.14997029999995mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="-2.500122000000033mm" pcbY="-2.14997029999995mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="-3.8498779999999897mm" pcbY="-0.6749922999998716mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin18"]} pcbX="3.8498779999999897mm" pcbY="-0.6749922999998716mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin19"]} pcbX="2.750058000000081mm" pcbY="-0.6749922999998716mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin20"]} pcbX="1.649983999999904mm" pcbY="-0.6749922999998716mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin21"]} pcbX="0.5499100000000681mm" pcbY="-0.6749922999998716mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin22"]} pcbX="-0.5501639999998815mm" pcbY="-0.6749922999998716mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin23"]} pcbX="-1.6499840000000177mm" pcbY="-0.6749922999998716mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin24"]} pcbX="-2.7500579999999673mm" pcbY="-0.6749922999998716mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin25"]} pcbX="-3.8498779999999897mm" pcbY="0.6750177000001258mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin26"]} pcbX="-2.7500579999999673mm" pcbY="0.6750177000001258mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin27"]} pcbX="-1.6499840000000177mm" pcbY="0.6750177000001258mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin28"]} pcbX="-0.5499099999998407mm" pcbY="0.6750177000001258mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin29"]} pcbX="0.5499100000000681mm" pcbY="0.6750177000001258mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin30"]} pcbX="1.649983999999904mm" pcbY="0.6750177000001258mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin31"]} pcbX="2.750058000000081mm" pcbY="0.6750177000001258mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<platedhole  portHints={["pin32"]} pcbX="3.8498779999999897mm" pcbY="0.6750177000001258mm" outerDiameter="0.8999982mm" holeDiameter="0.5000243999999999mm" shape="circle" />
<silkscreenpath route={[{"x":-4.317999999999984,"y":-1.1689206999999442},{"x":-4.317999999999984,"y":-1.3969618999997238}]} />
<silkscreenpath route={[{"x":-4.317999999999984,"y":-1.3969618999997238},{"x":4.318000000000097,"y":-1.3969618999997238}]} />
<silkscreenpath route={[{"x":-4.317999999999984,"y":0.181089300000167},{"x":-4.317999999999984,"y":-0.18101309999985915}]} />
<silkscreenpath route={[{"x":-4.317999999999984,"y":1.3970381000001453},{"x":-4.317999999999984,"y":1.1689969000001383}]} />
<silkscreenpath route={[{"x":4.318000000000097,"y":-1.1688952999998037},{"x":4.318000000000097,"y":-1.3969618999997238}]} />
<silkscreenpath route={[{"x":4.318000000000097,"y":0.18111470000008012},{"x":4.318000000000097,"y":-0.18103849999999966}]} />
<silkscreenpath route={[{"x":4.318000000000097,"y":1.3970381000001453},{"x":4.318000000000097,"y":1.1689714999999978}]} />
<silkscreenpath route={[{"x":-4.317999999999984,"y":1.3970381000001453},{"x":4.318000000000097,"y":1.3970381000001453}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5950c73dbbec4a2d9a7afe54d00ce0b0&pn=C6332304",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 1.1368683772161603e-13, y: 0.000012700000183940574, z: -1.3999829999999747 },
      }}
      {...props}
    />
  )
}