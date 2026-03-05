import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["G1"],
  pin2: ["V1"],
  pin3: ["D_NEG1"],
  pin4: ["D_POS1"],
  pin5: ["CC2"],
  pin6: ["V2"],
  pin7: ["G2"],
  pin8: ["G3"],
  pin9: ["V3"],
  pin10: ["D_NEG2"],
  pin11: ["D_POS2"],
  pin12: ["CC1"],
  pin13: ["V4"],
  pin14: ["G4"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"]
} as const

export const A_918_418K2022Y40000 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C168704"
  ]
}}
      manufacturerPartNumber="A_918_418K2022Y40000"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.2500569999999698mm" pcbY="-0.7000239999998712mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-2.300096999999937mm" pcbY="-0.7000239999998712mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-0.44996100000003025mm" pcbY="-0.7000239999998712mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="0.44996099999991657mm" pcbY="-0.7000239999998712mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="1.3501369999997905mm" pcbY="-0.7000239999998712mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="2.3000969999998233mm" pcbY="-0.7000239999998712mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="3.2500569999999698mm" pcbY="-0.7000239999998712mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="3.2500569999999698mm" pcbY="0.7000239999999849mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="2.3000969999998233mm" pcbY="0.7000239999999849mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="0.44996099999991657mm" pcbY="0.7000239999999849mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="-0.44996100000003025mm" pcbY="0.7000239999999849mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="-1.3498830000000908mm" pcbY="0.7000239999999849mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin13"]} pcbX="-2.300096999999937mm" pcbY="0.7000239999999849mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin14"]} pcbX="-3.2500569999999698mm" pcbY="0.7000239999999849mm" outerDiameter="0.6999986mm" holeDiameter="0.4499864mm" shape="circle" />
<platedhole  portHints={["pin15"]} pcbX="1.999868999999876mm" pcbY="1.9298919999999953mm" holeWidth="0.700024mm" holeHeight="1.700022mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="-2.0001230000000305mm" pcbY="1.9298919999999953mm" holeWidth="0.700024mm" holeHeight="1.700022mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="1.999868999999876mm" pcbY="-1.9298919999999953mm" holeWidth="0.700024mm" holeHeight="1.700022mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="-2.0001230000000305mm" pcbY="-1.9298919999999953mm" holeWidth="0.700024mm" holeHeight="1.700022mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<silkscreenpath route={[{"x":-3.1522924000000785,"y":-1.5999967999999853},{"x":-4.399991200000045,"y":-1.5999967999999853},{"x":-4.399991200000045,"y":1.5999967999999853}]} />
<silkscreenpath route={[{"x":0.8476995999999417,"y":-1.5999967999999853},{"x":-0.8479536000000962,"y":-1.5999967999999853}]} />
<silkscreenpath route={[{"x":3.1520384000000377,"y":1.5999967999999853},{"x":4.499990999999909,"y":1.5999967999999853},{"x":4.499990999999909,"y":-1.5999967999999853},{"x":3.1520384000000377,"y":-1.5999967999999853}]} />
<silkscreenpath route={[{"x":-0.8479536000000962,"y":1.5999967999999853},{"x":0.8476995999999417,"y":1.5999967999999853}]} />
<silkscreenpath route={[{"x":-4.399991200000045,"y":1.5999967999999853},{"x":-3.1522924000000785,"y":1.5999967999999853}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=10312b08773b48398109613fe801995e&pn=C168704",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -1.1798919999999498 },
      }}
      {...props}
    />
  )
}