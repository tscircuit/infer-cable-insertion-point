import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["GND6"],
  pin14: ["GND3"],
  pin15: ["GND5"],
  pin16: ["GND4"],
  pin17: ["B1A12"],
  pin18: ["B4A9"],
  pin19: ["B5"],
  pin20: ["A8"],
  pin21: ["B6"],
  pin22: ["A7"],
  pin23: ["A6"],
  pin24: ["B7"],
  pin25: ["A5"],
  pin26: ["B8"],
  pin27: ["A4B9"],
  pin28: ["A1B12"]
} as const

export const TYPEC_304YSSW_ACP16 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2840392"
  ]
}}
      manufacturerPartNumber="TYPEC_304YSSW_ACP16"
      footprint={<footprint>
        <hole pcbX="2.8898850000000493mm" pcbY="1.1948096500000247mm" diameter="0.7999983999999999mm" />
<hole pcbX="-2.889884999999822mm" pcbY="1.1948096500000247mm" diameter="0.7999983999999999mm" />
<smtpad portHints={["pin17"]} pcbX="3.200019000000111mm" pcbY="2.554725650000023mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.4001729999999952mm" pcbY="2.554979650000064mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.7501870000000963mm" pcbY="2.554979650000064mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="1.2500610000000734mm" pcbY="2.554979650000064mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.7501890000002049mm" pcbY="2.554979650000064mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="0.250063000000182mm" pcbY="2.554979650000064mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.2498089999998001mm" pcbY="2.554979650000064mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-0.7499349999999367mm" pcbY="2.554979650000064mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-1.2498069999999188mm" pcbY="2.554979650000064mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-1.7499329999999418mm" pcbY="2.554979650000064mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.3999189999998407mm" pcbY="2.554979650000064mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-3.200018999999884mm" pcbY="2.554979650000064mm" width="0.5999987999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="5.120004999999992mm" pcbY="1.6949356500000476mm" width="1.9999959999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="5.120004999999992mm" pcbY="-2.2049803499999143mm" width="1.9999959999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-5.120004999999992mm" pcbY="-2.2049803499999143mm" width="1.9999959999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-5.120004999999992mm" pcbY="1.6949356500000476mm" width="1.9999959999999999mm" height="1.9999959999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-4.499990999999909,"y":-0.913898349999954},{"x":-4.499990999999909,"y":0.40492044999996324}]} />
<silkscreenpath route={[{"x":-4.499990999999909,"y":-5.095093949999864},{"x":-4.499990999999909,"y":-3.3761743499999284}]} />
<silkscreenpath route={[{"x":4.499991000000023,"y":-0.913898349999954},{"x":4.499991000000023,"y":0.6049200500000325}]} />
<silkscreenpath route={[{"x":-4.499990999999909,"y":-5.095093949999864},{"x":4.499991000000023,"y":-5.095093949999864},{"x":4.499991000000023,"y":-3.3761743499999284}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=580da3bcd94d416fafa1605ca157169e&pn=C2840392",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 1.1368683772161603e-13, y: -1.2541059499999392, z: -2.4049783499999764 },
      }}
      {...props}
    />
  )
}