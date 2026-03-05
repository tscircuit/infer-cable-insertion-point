import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["EH1"],
  pin7: ["EH2"],
  pin8: ["EH3"],
  pin9: ["EH4"]
} as const

export const MINI_501 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3039330"
  ]
}}
      manufacturerPartNumber="MINI_501"
      footprint={<footprint>
        <hole pcbX="-2.199893999999972mm" pcbY="0.2499360000000479mm" diameter="0.9999979999999998mm" />
<hole pcbX="2.1998940000000857mm" pcbY="0.2499360000000479mm" diameter="0.9999979999999998mm" />
<smtpad portHints={["pin1"]} pcbX="-1.5999459999999317mm" pcbY="2.800096000000053mm" width="0.49999899999999997mm" height="2.2999954mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.8000999999998157mm" pcbY="2.800096000000053mm" width="0.49999899999999997mm" height="2.2999954mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="2.2737367544323206e-13mm" pcbY="2.800096000000053mm" width="0.49999899999999997mm" height="2.2999954mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.8001000000001568mm" pcbY="2.800096000000053mm" width="0.49999899999999997mm" height="2.2999954mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.599946000000159mm" pcbY="2.800096000000053mm" width="0.49999899999999997mm" height="2.2999954mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-4.450079999999957mm" pcbY="-2.7500579999999673mm" width="1.9999959999999999mm" height="2.4999949999999997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-4.450079999999957mm" pcbY="2.750058000000081mm" width="1.9999959999999999mm" height="2.4999949999999997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="4.450080000000071mm" pcbY="-2.7500579999999673mm" width="1.9999959999999999mm" height="2.4999949999999997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.450080000000071mm" pcbY="2.750058000000081mm" width="1.9999959999999999mm" height="2.4999949999999997mm" shape="rect" />
<silkscreenpath route={[{"x":3.7500052000000323,"y":-5.6499251999998705},{"x":3.7500052000000323,"y":-4.181119399999943}]} />
<silkscreenpath route={[{"x":-3.2188657999998895,"y":3.9100506000000905},{"x":-2.0811489999998685,"y":3.9100506000000905}]} />
<silkscreenpath route={[{"x":3.7500052000000323,"y":-1.2188189999999395},{"x":3.7500052000000323,"y":1.2188697999999931}]} />
<silkscreenpath route={[{"x":2.081149000000096,"y":3.9100506000000905},{"x":3.2188658000002306,"y":3.9100506000000905}]} />
<silkscreenpath route={[{"x":-3.7500051999999187,"y":-1.2188189999999395},{"x":-3.7500051999999187,"y":1.2189206000000468}]} />
<silkscreenpath route={[{"x":-3.7500051999999187,"y":-5.6499251999998705},{"x":-3.7500051999999187,"y":-4.181119399999943}]} />
<silkscreenpath route={[{"x":-3.7500051999999187,"y":-5.6499251999998705},{"x":3.7500052000000323,"y":-5.6499251999998705}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=32e9a647a6d94d0384a470a3aafb104a&pn=C3039330",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 2.2737367544323206e-13, y: -1.068984399999863, z: -3.2000554999999737 },
      }}
      {...props}
    />
  )
}