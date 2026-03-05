import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["EH1"],
  pin14: ["EH3"],
  pin15: ["pin13_alt1"],
  pin16: ["pin14_alt1"],
  pin17: ["B12"],
  pin18: ["B9"],
  pin19: ["A5"],
  pin20: ["B5"],
  pin21: ["A9"],
  pin22: ["A12"]
} as const

export const UC17_0B06F68011 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C36936554"
  ]
}}
      manufacturerPartNumber="UC17_0B06F68011"
      footprint={<footprint>
        <platedhole  portHints={["pin13"]} pcbX="-4.320031999999969mm" pcbY="1.5750476999999137mm" holeWidth="0.5999987999999999mm" holeHeight="1.5999968mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="4.320031999999969mm" pcbY="1.5750476999999137mm" holeWidth="0.5999987999999999mm" holeHeight="1.5999968mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="4.320031999999969mm" pcbY="-2.225046300000031mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="0.9999979999999999mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="-4.320031999999969mm" pcbY="-2.225046300000031mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="0.9999979999999999mm" outerHeight="2.1999956mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="-2.750058000000081mm" pcbY="1.5750476999999137mm" width="0.7999983999999999mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.5199360000000297mm" pcbY="1.5750476999999137mm" width="0.7999983999999999mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-0.5001260000000229mm" pcbY="1.5750476999999137mm" width="0.7999983999999999mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.4998720000000958mm" pcbY="1.5750476999999137mm" width="0.7999983999999999mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="1.519935999999916mm" pcbY="1.5750476999999137mm" width="0.7999983999999999mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="2.7500579999999673mm" pcbY="1.5750476999999137mm" width="0.7999983999999999mm" height="1.3999972mm" shape="rect" />
<silkscreenpath route={[{"x":-4.42000639999992,"y":-0.9006902999999511},{"x":-4.42000639999992,"y":0.3507931000000326}]} />
<silkscreenpath route={[{"x":-4.42000639999992,"y":-4.891944700000067},{"x":-4.42000639999992,"y":-3.5491991000001235}]} />
<silkscreenpath route={[{"x":4.41995559999998,"y":-0.9007157000000916},{"x":4.41995559999998,"y":0.35081849999983206}]} />
<silkscreenpath route={[{"x":4.41995559999998,"y":-4.891944700000067},{"x":4.41995559999998,"y":-3.5491737000000967}]} />
<silkscreenpath route={[{"x":4.41995559999998,"y":-4.891944700000067},{"x":-4.42000639999992,"y":-4.891944700000067}]} />
<silkscreenpath route={[{"x":-3.381171800000061,"y":1.8750724999999875},{"x":-3.5888930000000983,"y":1.8750724999999875}]} />
<silkscreenpath route={[{"x":3.5887913999998773,"y":1.8750724999999875},{"x":3.3810955999999805,"y":1.8750724999999875}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e61d79220ef0443f8316187b58db6b02&pn=C36936554",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.000025400000026820635, y: -1.1239563000001453, z: -1.4750462999999285 },
      }}
      {...props}
    />
  )
}