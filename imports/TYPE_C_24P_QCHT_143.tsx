import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A12"],
  pin2: ["A11"],
  pin3: ["A10"],
  pin4: ["A9"],
  pin5: ["A8"],
  pin6: ["A7"],
  pin7: ["A6"],
  pin8: ["A5"],
  pin9: ["A4"],
  pin10: ["A3"],
  pin11: ["A2"],
  pin12: ["A1"],
  pin13: ["EP1"],
  pin14: ["EP2"],
  pin15: ["EP3"],
  pin16: ["EP4"],
  pin17: ["B12"],
  pin18: ["B11"],
  pin19: ["B10"],
  pin20: ["B9"],
  pin21: ["B8"],
  pin22: ["B7"],
  pin23: ["B6"],
  pin24: ["B5"],
  pin25: ["B4"],
  pin26: ["B3"],
  pin27: ["B2"],
  pin28: ["B1"]
} as const

export const TYPE_C_24P_QCHT_143 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5156604"
  ]
}}
      manufacturerPartNumber="TYPE_C_24P_QCHT_143"
      footprint={<footprint>
        <hole pcbX="-3.5999420000000555mm" pcbY="2.3398734499999136mm" diameter="0.6499860000000001mm" />
<platedhole  portHints={["pin13"]} pcbX="-4.4899580000000014mm" pcbY="-3.299942549999969mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.8999982mm" outerHeight="1.5999967999999998mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="4.489958000000115mm" pcbY="-3.299942549999969mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.8999982mm" outerHeight="1.5999967999999998mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="4.130040000000008mm" pcbY="1.0899394499999744mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.8999982mm" outerHeight="1.5999967999999998mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="-4.130040000000008mm" pcbY="1.0899394499999744mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.8999982mm" outerHeight="1.5999967999999998mm" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="-2.800096000000053mm" pcbY="1.6898874500000147mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin18"]} pcbX="-2.400045999999975mm" pcbY="0.9898634499999162mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin19"]} pcbX="-1.5999460000000454mm" pcbY="0.9898634499999162mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin20"]} pcbX="-1.2001500000001215mm" pcbY="1.6898874500000147mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin21"]} pcbX="-0.8001000000000431mm" pcbY="0.9898634499999162mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin22"]} pcbX="-0.4000500000000784mm" pcbY="1.6898874500000147mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin23"]} pcbX="0.4000499999999647mm" pcbY="1.6898874500000147mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin24"]} pcbX="0.7998459999998886mm" pcbY="0.9898634499999162mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin25"]} pcbX="1.1998960000000807mm" pcbY="1.6898874500000147mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin26"]} pcbX="1.5999459999999317mm" pcbY="0.9898634499999162mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin27"]} pcbX="2.400045999999861mm" pcbY="0.9898634499999162mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<platedhole  portHints={["pin28"]} pcbX="2.8000959999999395mm" pcbY="1.6898874500000147mm" outerDiameter="0.580009mm" holeDiameter="0.39999919999999994mm" shape="circle" />
<smtpad portHints={["pin1"]} pcbX="2.74980400000004mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="2.2499319999998306mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="1.7500599999999622mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.2499339999999393mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.7500619999999572mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.2499360000000479mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.2499359999999342mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.7500620000000708mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.249934000000053mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.7500600000000759mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-2.249932000000058mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-2.7500580000001946mm" pcbY="2.8999434499999097mm" width="0.2800096mm" height="0.8999982mm" shape="rect" />
<silkscreenpath route={[{"x":-4.9529999999999745,"y":-2.525217150000003},{"x":-4.9529999999999745,"y":4.118025849999981}]} />
<silkscreenpath route={[{"x":4.9529999999999745,"y":-4.074642550000021},{"x":4.9529999999999745,"y":-5.914974150000035},{"x":-4.9529999999999745,"y":-5.914974150000035},{"x":-4.9529999999999745,"y":-4.074642550000021}]} />
<silkscreenpath route={[{"x":-4.9529999999999745,"y":4.118025849999981},{"x":4.9529999999999745,"y":4.118025849999981},{"x":4.9529999999999745,"y":-2.525217150000003}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a39779cdc4864d1baca3002825ef8236&pn=C5156604",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.0009906000000228232, y: -0.8989821500001653, z: -2.5499425499999235 },
      }}
      {...props}
    />
  )
}