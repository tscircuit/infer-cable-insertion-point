import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["SHELL1"],
  pin7: ["pin6_alt1"],
  pin8: ["pin6_alt1"],
  pin9: ["pin6_alt1"]
} as const

export const MICRO_XNJ_ZB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C668587"
  ]
}}
      manufacturerPartNumber="MICRO_XNJ_ZB"
      footprint={<footprint>
        <platedhole  portHints={["pin6"]} pcbX="-0.8875077999999803mm" pcbY="-2.4249379999999974mm" outerDiameter="0.9999979999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-0.8875077999999803mm" pcbY="2.4249379999999974mm" outerDiameter="0.9999979999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="1.7624742000000424mm" pcbY="3.625088000000005mm" holeWidth="0.5000243999999999mm" holeHeight="1.1000231999999999mm" outerWidth="0.9999979999999999mm" outerHeight="1.5999967999999998mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="1.7624742000000424mm" pcbY="-3.625088000000005mm" holeWidth="0.5000243999999999mm" holeHeight="1.1000231999999999mm" outerWidth="0.9999979999999999mm" outerHeight="1.5999967999999998mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-1.0124757999999474mm" pcbY="1.2999719999999115mm" width="1.5999967999999998mm" height="0.39999919999999994mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.0124757999999474mm" pcbY="0.6499860000000126mm" width="1.5999967999999998mm" height="0.39999919999999994mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.0124757999999474mm" pcbY="0mm" width="1.5999967999999998mm" height="0.39999919999999994mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.0124757999999474mm" pcbY="-0.6499860000000126mm" width="1.5999967999999998mm" height="0.39999919999999994mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.0124757999999474mm" pcbY="-1.2999720000000252mm" width="1.5999967999999998mm" height="0.39999919999999994mm" shape="rect" />
<silkscreenpath route={[{"x":-1.2134659999999258,"y":-3.079038799999921},{"x":-1.2134659999999258,"y":-3.799992399999951}]} />
<silkscreenpath route={[{"x":-1.2134659999999258,"y":-1.7311624000000165},{"x":-1.2134659999999258,"y":-1.77078640000002}]} />
<silkscreenpath route={[{"x":0.7526209999999764,"y":-3.799992399999951},{"x":-1.2249975999999378,"y":-3.799992399999951}]} />
<silkscreenpath route={[{"x":3.993533999999954,"y":-3.5000438000000713},{"x":3.993533999999954,"y":-3.799992399999951},{"x":2.7722766000000547,"y":-3.799992399999951}]} />
<silkscreenpath route={[{"x":-1.2134659999999258,"y":-1.7311624000000165},{"x":-1.2134659999999258,"y":-1.7709133999999267}]} />
<silkscreenpath route={[{"x":-1.2134659999999258,"y":3.079089599999975},{"x":-1.2134659999999258,"y":3.799967000000038}]} />
<silkscreenpath route={[{"x":0.7526209999999764,"y":3.799967000000038},{"x":-1.1250231999998732,"y":3.799967000000038}]} />
<silkscreenpath route={[{"x":3.993533999999954,"y":3.2336232000001246},{"x":3.993533999999954,"y":3.799967000000038},{"x":2.7722766000000547,"y":3.799967000000038}]} />
<silkscreenpath route={[{"x":-1.2134659999999258,"y":-1.7709133999999267},{"x":-1.2134659999999258,"y":-1.7311624000000165}]} />
<silkscreenpath route={[{"x":-1.2134659999999258,"y":1.7708880000000136},{"x":-1.2134659999999258,"y":1.7311369999999897}]} />
<silkscreenpath route={[{"x":3.993533999999954,"y":-3.5000438000000713},{"x":3.993533999999954,"y":3.499967599999877}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e97a09b2fbda4e3cb5104f06bb774184&pn=C668587",
        rotationOffset: { x: 90, y: 90, z: 270 },
        positionOffset: { x: 1.374006599999916, y: -0.0009906000000228232, z: 4.4750879999999595 },
      }}
      {...props}
    />
  )
}