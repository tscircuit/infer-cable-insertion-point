import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["A12"],
  pin6: ["A9"],
  pin7: ["B5"],
  pin8: ["A5"],
  pin9: ["B9"],
  pin10: ["B12"]
} as const

export const HC_TYPE_C_6P_01A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2894893"
  ]
}}
      manufacturerPartNumber="HC_TYPE_C_6P_01A"
      footprint={<footprint>
        <platedhole  portHints={["pin3"]} pcbX="4.320032000000083mm" pcbY="1.3472986000000446mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-4.320031999999969mm" pcbY="1.3472986000000446mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="4.320032000000083mm" pcbY="-2.3527193999999554mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-4.320031999999969mm" pcbY="-2.3527193999999554mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="2.7492959999999584mm" pcbY="1.8027206000000433mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.5194280000000617mm" pcbY="1.8027206000000433mm" width="0.7599934mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.49936399999990044mm" pcbY="1.8027206000000433mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.5006339999998772mm" pcbY="1.8027206000000433mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.5204439999999977mm" pcbY="1.8027206000000433mm" width="0.7599934mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-2.7503119999998944mm" pcbY="1.8027206000000433mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<silkscreenpath route={[{"x":4.44500000000005,"y":-3.4737738000001173},{"x":4.44500000000005,"y":-4.81016939999995},{"x":0,"y":-4.81016939999995}]} />
<silkscreenpath route={[{"x":4.44500000000005,"y":0.22621880000008332},{"x":4.44500000000005,"y":-1.2316904000000477}]} />
<silkscreenpath route={[{"x":3.3805368000000726,"y":2.0478305999999975},{"x":3.6222686000000976,"y":2.0478305999999975}]} />
<silkscreenpath route={[{"x":-3.5559999999999263,"y":2.0478305999999975},{"x":-3.3814765999998144,"y":2.0478305999999975}]} />
<silkscreenpath route={[{"x":-4.444999999999936,"y":-1.2316904000000477},{"x":-4.444999999999936,"y":0.22621880000008332}]} />
<silkscreenpath route={[{"x":0,"y":-4.81016939999995},{"x":-4.444999999999936,"y":-4.81016939999995},{"x":-4.444999999999936,"y":-3.4737738000001173}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=87c2742b44f74a208e6a2183ba894829&pn=C2894893",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 0, y: -1.463998800000013, z: -1.6027193999999667 },
      }}
      {...props}
    />
  )
}