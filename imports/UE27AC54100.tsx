import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["SHLD1"],
  pin6: ["pin5_alt1"]
} as const

export const UE27AC54100 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C464564"
  ]
}}
      manufacturerPartNumber="UE27AC54100"
      footprint={<footprint>
        <platedhole  portHints={["pin5"]} pcbX="-6.57098000000002mm" pcbY="-0.9089008999999635mm" outerDiameter="3.1999935999999995mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="6.57098000000002mm" pcbY="-0.9089008999999635mm" outerDiameter="3.1999935999999995mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-3.492500000000007mm" pcbY="1.8088991000000192mm" outerDiameter="1.3999972mm" holeDiameter="0.9199879999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.5077399999999557mm" pcbY="1.8088991000000192mm" outerDiameter="1.3999972mm" holeDiameter="0.9199879999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.993140000000011mm" pcbY="1.8088991000000192mm" outerDiameter="1.3999972mm" holeDiameter="0.9199879999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.0083800000000167mm" pcbY="1.8088991000000192mm" outerDiameter="1.3999972mm" holeDiameter="0.9199879999999999mm" shape="circle" />
<silkscreenpath route={[{"x":-0.8214360000000056,"y":-2.407500899999974},{"x":-1.1262360000000058,"y":-2.3567008999999643},{"x":-1.9136359999999968,"y":-6.954100899999958},{"x":-2.8534360000000163,"y":-6.954100899999958},{"x":-3.5090100000000177,"y":-2.3894668999999737},{"x":-3.8402260000000012,"y":-2.4151208999999767},{"x":-3.2598359999999786,"y":-7.462100899999967},{"x":-1.4056360000000154,"y":-7.462100899999967},{"x":-0.8214360000000056,"y":-2.407500899999974}]} />
<silkscreenpath route={[{"x":-3.412236000000007,"y":-3.3219008999999744},{"x":-1.3294360000000154,"y":-3.3219008999999744}]} />
<silkscreenpath route={[{"x":-3.082035999999988,"y":-5.0745008999999754},{"x":-1.6342359999999871,"y":-5.0745008999999754}]} />
<silkscreenpath route={[{"x":1.3883639999999957,"y":-5.023700899999966},{"x":2.836164000000025,"y":-5.023700899999966}]} />
<silkscreenpath route={[{"x":1.058164000000005,"y":-3.271100899999965},{"x":3.1409639999999968,"y":-3.271100899999965}]} />
<silkscreenpath route={[{"x":3.648963999999978,"y":-2.3567008999999643},{"x":3.0647639999999967,"y":-7.411300899999986},{"x":1.210564000000005,"y":-7.411300899999986},{"x":0.6301739999999825,"y":-2.3643208999999956},{"x":0.9613899999999944,"y":-2.3386668999999927},{"x":1.6169639999999958,"y":-6.9033008999999765},{"x":2.5567640000000154,"y":-6.9033008999999765},{"x":3.3441640000000064,"y":-2.3059008999999833},{"x":3.648963999999978,"y":-2.3567008999999643}]} />
<silkscreenpath route={[{"x":-7.247636,"y":2.816517100000027},{"x":7.255763999999999,"y":2.816517100000027}]} />
<silkscreenpath route={[{"x":7.255763999999999,"y":2.816517100000027},{"x":7.255763999999999,"y":0.7891653000000076}]} />
<silkscreenpath route={[{"x":7.255763999999999,"y":-2.606967099999963},{"x":7.255763999999999,"y":-11.246700899999965}]} />
<silkscreenpath route={[{"x":-7.247636,"y":2.816517100000027},{"x":-7.247636,"y":0.7924419000000285}]} />
<silkscreenpath route={[{"x":-7.247636,"y":-2.6102436999999554},{"x":-7.247636,"y":-11.246700899999965}]} />
<silkscreenpath route={[{"x":-7.247636,"y":-11.246700899999965},{"x":7.255763999999999,"y":-11.246700899999965}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e51a3f57878d4f86bebe576398e2f3d6&pn=C464564",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -4.549990899999955, z: -1.7088976999999914 },
      }}
      {...props}
    />
  )
}