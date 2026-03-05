import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND1"],
  pin6: ["GND2"],
  pin7: ["GND3"],
  pin8: ["GND4"],
  pin9: ["GND5"]
} as const

export const UX_144S_ACP5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C720611"
  ]
}}
      manufacturerPartNumber="UX_144S_ACP5"
      footprint={<footprint>
        <hole pcbX="-2.1998940000000857mm" pcbY="0.14994889999979932mm" diameter="0.9999979999999998mm" />
<hole pcbX="2.2001479999997855mm" pcbY="0.14994889999979932mm" diameter="0.9999979999999998mm" />
<smtpad portHints={["pin1"]} pcbX="-1.5999460000000454mm" pcbY="2.9000068999998803mm" width="0.49999899999999997mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.799846000000116mm" pcbY="2.9000068999998803mm" width="0.49999899999999997mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.1368683772161603e-13mm" pcbY="2.9000068999998803mm" width="0.49999899999999997mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.8000999999998157mm" pcbY="2.9000068999998803mm" width="0.49999899999999997mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.599945999999818mm" pcbY="2.9000068999998803mm" width="0.49999899999999997mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-4.174998000000073mm" pcbY="2.7001088999999183mm" width="1.4500098000000001mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-4.174998000000073mm" pcbY="-2.800007100000016mm" width="1.4500098000000001mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="4.17499799999996mm" pcbY="-2.800007100000016mm" width="1.4500098000000001mm" height="1.8999962mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.17499799999996mm" pcbY="2.7001088999999183mm" width="1.4500098000000001mm" height="1.8999962mm" shape="rect" />
<silkscreenpath route={[{"x":4.699050799999895,"y":-1.618856300000175},{"x":4.699050799999895,"y":1.5188564999998562}]} />
<silkscreenpath route={[{"x":-2.081098200000042,"y":3.606025299999942},{"x":-3.2188150000000633,"y":3.606025299999942}]} />
<silkscreenpath route={[{"x":3.2189165999998295,"y":3.606025299999942},{"x":2.081199799999922,"y":3.606025299999942}]} />
<silkscreenpath route={[{"x":-4.698746000000028,"y":-1.618856300000175},{"x":-4.698746000000028,"y":1.5188564999998562}]} />
<silkscreenpath route={[{"x":-4.698746000000028,"y":-5.791873100000089},{"x":-4.698746000000028,"y":-3.981132500000058}]} />
<silkscreenpath route={[{"x":-4.698746000000028,"y":-5.791873100000089},{"x":4.699253999999996,"y":-5.791873100000089},{"x":4.699253999999996,"y":-3.980853100000104}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=52a2f97d70a4434a985c0f7ead41058c&pn=C720611",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.000050799999826267594, y: -1.084973700000205, z: -2.9500051999999757 },
      }}
      {...props}
    />
  )
}