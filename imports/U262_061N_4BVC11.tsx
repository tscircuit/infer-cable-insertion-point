import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH2"],
  pin8: ["EH1"],
  pin9: ["EH3"],
  pin10: ["EH4"],
  pin11: ["A5"],
  pin12: ["B5"],
  pin13: ["B9"],
  pin14: ["A9"],
  pin15: ["B12"],
  pin16: ["A12"]
} as const

export const U262_061N_4BVC11 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2764612"
  ]
}}
      manufacturerPartNumber="U262_061N_4BVC11"
      footprint={<footprint>
        <platedhole  portHints={["pin8"]} pcbX="4.320031999999969mm" pcbY="1.335995599999933mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-4.320032000000083mm" pcbY="1.335995599999933mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="-4.320032000000083mm" pcbY="-2.4140604000000394mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin10"]} pcbX="4.320031999999969mm" pcbY="-2.4140604000000394mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="-0.4998720000000958mm" pcbY="1.8640616000000136mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.5001260000000229mm" pcbY="1.8640616000000136mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.519935999999916mm" pcbY="1.8640616000000136mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.519935999999916mm" pcbY="1.8640616000000136mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-2.7500580000001946mm" pcbY="1.8640616000000136mm" width="0.8999982mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="2.750058000000081mm" pcbY="1.8640616000000136mm" width="0.8999982mm" height="1.1999975999999999mm" shape="rect" />
<silkscreenpath route={[{"x":3.4311589999999796,"y":1.924996199999896},{"x":3.57649779999997,"y":1.924996199999896}]} />
<silkscreenpath route={[{"x":-3.5764978000000838,"y":1.924996199999896},{"x":-3.4311336000000665,"y":1.924996199999896}]} />
<silkscreenpath route={[{"x":4.397120999999856,"y":-1.1864276000001155},{"x":4.397120999999856,"y":0.09698359999981676}]} />
<silkscreenpath route={[{"x":-4.467478999999912,"y":-3.6323714000001246},{"x":-4.467478999999912,"y":-5.008416400000101},{"x":-4.4547790000000305,"y":-5.021116399999983},{"x":4.346320999999989,"y":-5.021116399999983},{"x":4.397120999999856,"y":-4.9703164000000015},{"x":4.397120999999856,"y":-3.64171859999999}]} />
<silkscreenpath route={[{"x":-4.467478999999912,"y":0.11768459999996139},{"x":-4.467478999999912,"y":-1.1957748000000947}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=407bbcda43e9492fa9fd807dbd67fb3c&pn=C2764612",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.4749970000000303, z: -1.6640603999999939 },
      }}
      {...props}
    />
  )
}