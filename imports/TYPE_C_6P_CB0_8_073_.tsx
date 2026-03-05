import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["VBUS1"],
  pin3: ["CC1"],
  pin4: ["CC2"],
  pin5: ["VBUS2"],
  pin6: ["GND2"],
  pin7: ["SHELL1"],
  pin8: ["SHELL3"],
  pin9: ["pin7_alt1"],
  pin10: ["pin8_alt1"]
} as const

export const TYPE_C_6P_CB0_8_073_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2858273"
  ]
}}
      manufacturerPartNumber="TYPE_C_6P_CB0_8_073_"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="-5.575045999999929mm" pcbY="1.3650341000000026mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="-5.575045999999929mm" pcbY="-2.234907900000053mm" holeWidth="0.5000243999999999mm" holeHeight="1.5000223999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="5.575045999999929mm" pcbY="-2.234907900000053mm" holeWidth="0.5000243999999999mm" holeHeight="1.5000223999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin10"]} pcbX="5.575045999999929mm" pcbY="1.3650341000000026mm" holeWidth="0.5000243999999999mm" holeHeight="1.2000229999999998mm" outerWidth="0.9999979999999999mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-2.750058000000081mm" pcbY="2.2349841000000197mm" width="0.8999982mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.519935999999916mm" pcbY="2.2349841000000197mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.4998719999999821mm" pcbY="2.2349841000000197mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.5001260000000229mm" pcbY="2.2349841000000197mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.519935999999916mm" pcbY="2.2349841000000197mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="2.750058000000081mm" pcbY="2.2349841000000197mm" width="0.8999982mm" height="1.1999975999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-4.699000000000069,"y":-5.15293609999992},{"x":-4.699000000000069,"y":2.0860638999998855},{"x":-3.4289999999999736,"y":2.0860638999998855},{"x":-3.4289999999999736,"y":1.4510639000000083},{"x":3.4290000000000873,"y":1.4510639000000083},{"x":3.4290000000000873,"y":2.0860638999998855},{"x":4.698999999999955,"y":2.0860638999998855},{"x":4.698999999999955,"y":-5.15293609999992}]} />
<silkscreenpath route={[{"x":-4.699000000000069,"y":-1.6923131000000922},{"x":-4.845151600000008,"y":-1.6923131000000922}]} />
<silkscreenpath route={[{"x":4.825999999999908,"y":-1.7050130999999737},{"x":4.844491199999993,"y":-1.7050130999999737}]} />
<silkscreenpath route={[{"x":4.698999999999955,"y":-2.9750130999999556},{"x":4.884547000000111,"y":-2.9750130999999556}]} />
<silkscreenpath route={[{"x":-4.884546999999998,"y":-2.9750130999999556},{"x":-4.699000000000069,"y":-2.9750130999999556}]} />
<silkscreenpath route={[{"x":4.686045999999919,"y":2.1049868999999717},{"x":3.416046000000051,"y":2.1049868999999717}]} />
<silkscreenpath route={[{"x":-4.699000000000069,"y":2.1049868999999717},{"x":-3.4419540000000097,"y":2.1049868999999717}]} />
<silkscreenpath route={[{"x":4.686045999999919,"y":2.1049868999999717},{"x":4.957038599999919,"y":2.1049868999999717}]} />
<silkscreenpath route={[{"x":-4.699000000000069,"y":2.1049868999999717},{"x":-4.957038600000033,"y":2.1049868999999717}]} />
<silkscreenpath route={[{"x":-4.699000000000069,"y":2.1049868999999717},{"x":-4.699000000000069,"y":-5.161902300000065},{"x":4.686045999999919,"y":-5.161902300000065},{"x":4.686045999999919,"y":2.1049868999999717}]} />
<silkscreenpath route={[{"x":4.825999999999908,"y":0.8349869000001036},{"x":4.866436799999974,"y":0.8349869000001036}]} />
<silkscreenpath route={[{"x":-4.866436799999974,"y":0.8349869000001036},{"x":-4.699000000000069,"y":0.8349869000001036}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=95c33f295b754f3ca3108a6f0ae4d815&pn=C2858273",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.199984900000004, z: -1.7599454000000037 },
      }}
      {...props}
    />
  )
}