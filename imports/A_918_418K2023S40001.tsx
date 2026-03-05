import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["A12"],
  pin3: ["A9"],
  pin4: ["B5"],
  pin5: ["A8"],
  pin6: ["B6"],
  pin7: ["A7"],
  pin8: ["A6"],
  pin9: ["B7"],
  pin10: ["A5"],
  pin11: ["B8"],
  pin12: ["A4"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"]
} as const

export const A_918_418K2023S40001 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C167321"
  ]
}}
      manufacturerPartNumber="A_918_418K2023S40001"
      footprint={<footprint>
        <hole pcbX="-2.8990289999999277mm" pcbY="0.9743186500001002mm" diameter="0.7500111999999999mm" />
<hole pcbX="2.880995000000098mm" pcbY="0.9743186500001002mm" diameter="0.7500111999999999mm" />
<platedhole  portHints={["pin13"]} pcbX="-4.324985000000083mm" pcbY="-2.7254453500000864mm" holeWidth="0.700024mm" holeHeight="1.3000228mm" outerWidth="1.1999975999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="4.32498499999997mm" pcbY="-2.7254453500000864mm" holeWidth="0.700024mm" holeHeight="1.3000228mm" outerWidth="1.1999975999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="4.32498499999997mm" pcbY="1.4744446500000095mm" holeWidth="0.700024mm" holeHeight="1.700022mm" outerWidth="1.0999978mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="-4.324985000000083mm" pcbY="1.4744446500000095mm" holeWidth="0.700024mm" holeHeight="1.700022mm" outerWidth="1.0999978mm" outerHeight="2.0999958mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-3.2089090000000624mm" pcbY="2.1244306499999084mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="3.190875000000119mm" pcbY="2.1244306499999084mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="2.391029000000003mm" pcbY="2.124684649999949mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.7410430000001043mm" pcbY="2.1244306499999084mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.2406630000001542mm" pcbY="2.1254466500000717mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.7410449999999855mm" pcbY="2.1244306499999084mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.24091899999996258mm" pcbY="2.1244306499999084mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.25895299999990584mm" pcbY="2.1244306499999084mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.7590789999999288mm" pcbY="2.1244306499999084mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.258950999999911mm" pcbY="2.1244306499999084mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-1.7590769999999338mm" pcbY="2.1254466500000717mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-2.4090629999999464mm" pcbY="2.1244306499999084mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-4.470069800000033,"y":-1.605711749999955},{"x":-4.470069800000033,"y":0.20530825000003006}]} />
<silkscreenpath route={[{"x":-4.470069800000033,"y":-5.325541749999957},{"x":-4.470069800000033,"y":-3.8454075500000044}]} />
<silkscreenpath route={[{"x":4.469891999999959,"y":-1.6056101499999613},{"x":4.469891999999959,"y":0.20871184999998604}]} />
<silkscreenpath route={[{"x":4.469891999999959,"y":-5.325541749999957},{"x":4.469891999999959,"y":-3.845509149999998}]} />
<silkscreenpath route={[{"x":4.469891999999959,"y":-5.325541749999957},{"x":-4.470069800000033,"y":-5.325541749999957}]} />
<silkscreenpath route={[{"x":-3.009010999999987,"y":1.084199050000052},{"x":-3.009010999999987,"y":1.2433300500000541}]} />
<silkscreenpath route={[{"x":-2.3657051999998657,"y":0.7219188499999518},{"x":-1.2589763999999377,"y":0.7219188499999518}]} />
<silkscreenpath route={[{"x":-1.2589763999999377,"y":0.7219188499999518},{"x":-1.2589763999999377,"y":1.2433300500000541}]} />
<silkscreenpath route={[{"x":1.237919799999986,"y":0.7241540500000383},{"x":1.237919799999986,"y":1.244371450000017}]} />
<silkscreenpath route={[{"x":2.9878782000000683,"y":1.0848086499999},{"x":2.9878782000000683,"y":1.2433300500000541}]} />
<silkscreenpath route={[{"x":1.237919799999986,"y":0.7241540500000383},{"x":2.348433200000045,"y":0.7241540500000383}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a05d12d2b75e47ccabfcc7e64c1fc187&pn=C167321",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00010159999987990886, y: -1.4500097500000493, z: -1.9754453500000408 },
      }}
      {...props}
    />
  )
}