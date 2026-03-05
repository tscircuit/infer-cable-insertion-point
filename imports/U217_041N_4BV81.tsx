import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["pin6"]
} as const

export const U217_041N_4BV81 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C319178"
  ]
}}
      manufacturerPartNumber="U217_041N_4BV81"
      footprint={<footprint>
        <hole pcbX="-2.2500590000000784mm" pcbY="-2.0000467499999104mm" diameter="1.1999975999999999mm" />
<hole pcbX="2.2500589999999647mm" pcbY="-2.0000467499999104mm" diameter="1.1999975999999999mm" />
<platedhole  portHints={["pin5"]} pcbX="-5.69988699999999mm" pcbY="-2.0000467499999104mm" holeWidth="0.9999979999999999mm" holeHeight="3.499993mm" outerWidth="1.499997mm" outerHeight="3.9999919999999998mm" shape="pill" />
<platedhole  portHints={["pin6"]} pcbX="5.69988699999999mm" pcbY="-2.0000467499999104mm" holeWidth="0.9999979999999999mm" holeHeight="3.499993mm" outerWidth="1.499997mm" outerHeight="3.9999919999999998mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="3.499992999999904mm" pcbY="0.8000492500000291mm" width="1.1999975999999999mm" height="2.4999949999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.0001250000000255mm" pcbY="0.8000492500000291mm" width="1.1999975999999999mm" height="2.4999949999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.9998709999999846mm" pcbY="0.8000492500000291mm" width="1.1999975999999999mm" height="2.4999949999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-3.499992999999904mm" pcbY="0.8000492500000291mm" width="1.1999975999999999mm" height="2.4999949999999997mm" shape="rect" />
<silkscreenpath route={[{"x":5.588000000000079,"y":-4.917998749999811},{"x":5.969000000000051,"y":-4.917998749999811},{"x":5.969000000000051,"y":-5.679998749999868}]} />
<silkscreenpath route={[{"x":-5.587999999999965,"y":-4.917998749999811},{"x":-5.968999999999937,"y":-4.917998749999811},{"x":-5.968999999999937,"y":-5.679998749999868}]} />
<silkscreenpath route={[{"x":-5.587999999999965,"y":-4.917998749999811},{"x":5.588000000000079,"y":-4.917998749999811}]} />
<silkscreenpath route={[{"x":-5.968974600000024,"y":-4.282998749999933},{"x":-5.968974600000024,"y":-19.776947949999908}]} />
<silkscreenpath route={[{"x":-5.968999999999937,"y":-19.776947949999908},{"x":5.969000000000051,"y":-19.776947949999908},{"x":5.969000000000051,"y":-4.193463749999864}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e09f8597798f4e04a9a4b21bf64d6607&pn=C319178",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -9.371990349999919, z: -1.2500467499999217 },
      }}
      {...props}
    />
  )
}