import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["MH1"],
  pin6: ["MH2"]
} as const

export const AM90 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C404965"
  ]
}}
      manufacturerPartNumber="AM90"
      footprint={<footprint>
        <hole pcbX="2.249932000000058mm" pcbY="-0.7250049000000445mm" diameter="0.9999979999999998mm" />
<hole pcbX="-2.250185999999985mm" pcbY="-0.7250049000000445mm" diameter="0.9999979999999998mm" />
<platedhole  portHints={["pin1"]} pcbX="3.4998660000002246mm" pcbY="1.449997099999905mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0.9999980000001187mm" pcbY="1.449997099999905mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-0.9999979999998914mm" pcbY="1.449997099999905mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-3.5001199999999244mm" pcbY="1.449997099999905mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="5.99998800000003mm" pcbY="-0.5499989000001051mm" outerDiameter="3.3999932mm" holeDiameter="2.5999947999999997mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-5.99998800000003mm" pcbY="-0.5499989000001051mm" outerDiameter="3.3999932mm" holeDiameter="2.5999947999999997mm" shape="circle" />
<silkscreenpath route={[{"x":-6.007353999999964,"y":-3.6476559000001316},{"x":6.006312600000115,"y":-3.6476559000001316}]} />
<silkscreenpath route={[{"x":6.006312600000115,"y":-18.362307700000088},{"x":6.006312600000115,"y":-2.347582299999999}]} />
<silkscreenpath route={[{"x":6.006312600000115,"y":-18.362307700000088},{"x":-6.007353999999964,"y":-18.362307700000088},{"x":-6.007353999999964,"y":-2.3421213000001444}]} />
<silkscreenpath route={[{"x":1.7677384000000984,"y":-13.198817899999995},{"x":4.23021760000006,"y":-13.198817899999995}]} />
<silkscreenpath route={[{"x":4.23021760000006,"y":-13.198817899999995},{"x":4.23021760000006,"y":-11.198821900000212},{"x":1.7677384000000984,"y":-11.198821900000212}]} />
<silkscreenpath route={[{"x":1.7677384000000984,"y":-13.198817899999995},{"x":1.7677384000000984,"y":-11.198821900000212}]} />
<silkscreenpath route={[{"x":-1.7687797999998338,"y":-13.198817899999995},{"x":-4.216196799999921,"y":-13.198817899999995}]} />
<silkscreenpath route={[{"x":-4.216196799999921,"y":-13.198817899999995},{"x":-4.216196799999921,"y":-11.198821900000212},{"x":-1.7687797999998338,"y":-11.198821900000212}]} />
<silkscreenpath route={[{"x":-1.7687797999998338,"y":-13.198817899999995},{"x":-1.7687797999998338,"y":-11.198821900000212}]} />
<silkscreenpath route={[{"x":-4.1168319999998175,"y":0.35185349999983373},{"x":-3.898620600000072,"y":0.35185349999983373}]} />
<silkscreenpath route={[{"x":-3.101720999999884,"y":0.35185349999983373},{"x":-1.3984985999999253,"y":0.35185349999983373}]} />
<silkscreenpath route={[{"x":-0.6015989999999647,"y":0.35185349999983373},{"x":0.6014973999999711,"y":0.35185349999983373}]} />
<silkscreenpath route={[{"x":1.3983970000000454,"y":0.35185349999983373},{"x":3.101974999999925,"y":0.35185349999983373}]} />
<silkscreenpath route={[{"x":3.897655400000076,"y":0.35185349999983373},{"x":4.116476400000124,"y":0.35185349999983373}]} />
<silkscreenpath route={[{"x":-6.199987599999872,"y":-3.0499939000001177},{"x":-6.199987599999872,"y":-18.449963100000105}]} />
<silkscreenpath route={[{"x":6.1999876000000995,"y":-3.0499939000001177},{"x":6.1999876000000995,"y":-18.45001389999993}]} />
<silkscreenpath route={[{"x":-6.199987599999872,"y":-3.0499939000001177},{"x":6.1999876000000995,"y":-3.0499939000001177}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d6f3e8167a284410a3b2b30656a0a10d&pn=C404965",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 2.2737367544323206e-13, y: -8.399995900000022, z: -1.4499955000000113 },
      }}
      {...props}
    />
  )
}