import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH1"],
  pin8: ["pin7_alt1"],
  pin9: ["pin7_alt1"],
  pin10: ["pin7_alt1"],
  pin11: ["B12"],
  pin12: ["A12"],
  pin13: ["B9"],
  pin14: ["A9"],
  pin15: ["A5"],
  pin16: ["B5"]
} as const

export const TYPE_C_6P_QT073 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2681548"
  ]
}}
      manufacturerPartNumber="TYPE_C_6P_QT073"
      footprint={<footprint>
        <smtpad portHints={["pin11"]} pcbX="-2.7500580000001946mm" pcbY="1.8499899500000083mm" width="0.8999982mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.750058000000081mm" pcbY="1.8499899500000083mm" width="0.8999982mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.519935999999916mm" pcbY="1.8499899500000083mm" width="0.7999983999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.519935999999916mm" pcbY="1.8499899500000083mm" width="0.7999983999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-0.5001260000001366mm" pcbY="1.8499899500000083mm" width="0.6999986mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="0.5001260000000229mm" pcbY="1.8499899500000083mm" width="0.6999986mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-5.269229999999993mm" pcbY="1.799951950000036mm" width="2.1999956mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="5.2692299999998795mm" pcbY="1.799951950000036mm" width="2.1999956mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-5.320030000000202mm" pcbY="-1.7999900499999058mm" width="1.9999959999999999mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="5.320030000000088mm" pcbY="-1.7999900499999058mm" width="1.9999959999999999mm" height="1.3999972mm" shape="rect" />
<silkscreenpath route={[{"x":-4.499991000000023,"y":-4.600009849999992},{"x":4.499990999999909,"y":-4.600009849999992}]} />
<silkscreenpath route={[{"x":3.4311589999999796,"y":2.23098994999998},{"x":4.088866600000074,"y":2.23098994999998}]} />
<silkscreenpath route={[{"x":-4.088866600000074,"y":2.23098994999998},{"x":-3.4311336000000665,"y":2.23098994999998}]} />
<silkscreenpath route={[{"x":4.499990999999909,"y":-0.8688514499999656},{"x":4.499990999999909,"y":1.0688637499999913}]} />
<silkscreenpath route={[{"x":4.499990999999909,"y":-4.600009849999992},{"x":4.499990999999909,"y":-2.731128649999846}]} />
<silkscreenpath route={[{"x":-4.499991000000023,"y":-0.8688514499999656},{"x":-4.499991000000023,"y":1.0688637499999913}]} />
<silkscreenpath route={[{"x":-4.499991000000023,"y":-4.600009849999992},{"x":-4.499991000000023,"y":-2.731128649999846}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=76ef450d6caf46e48874052c9b213e5a&pn=C2681548",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.1669966499998736, z: -1.6999886499999206 },
      }}
      {...props}
    />
  )
}