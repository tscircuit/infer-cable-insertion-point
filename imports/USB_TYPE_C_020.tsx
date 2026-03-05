import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin17: ["SHELL2"],
  pin18: ["SHELL3"],
  pin19: ["SHELL1"],
  pin20: ["SHELL4"],
  pin21: ["A12"],
  pin22: ["A1"],
  pin23: ["B1"],
  pin24: ["B12"],
  pin25: ["A9"],
  pin26: ["A4"],
  pin27: ["B4"],
  pin28: ["B9"],
  pin29: ["B5"],
  pin30: ["A8"],
  pin31: ["B6"],
  pin32: ["A7"],
  pin33: ["A6"],
  pin34: ["B7"],
  pin35: ["A5"],
  pin36: ["B8"]
} as const

export const USB_TYPE_C_020 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2927040"
  ]
}}
      manufacturerPartNumber="USB_TYPE_C_020"
      footprint={<footprint>
        <hole pcbX="2.890011999999956mm" pcbY="1.3276516500001208mm" diameter="0.6499860000000001mm" />
<hole pcbX="-2.890011999999956mm" pcbY="1.3276516500001208mm" diameter="0.6499860000000001mm" />
<smtpad portHints={["pin19"]} pcbX="-5.325109999999881mm" pcbY="-2.252732349999974mm" width="1.499997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-5.325109999999881mm" pcbY="1.9474116500000491mm" width="1.499997mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="5.325109999999995mm" pcbY="1.9476656500002036mm" width="1.499997mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="5.325109999999995mm" pcbY="-2.252732349999974mm" width="1.499997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="3.325113999999985mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-3.3251140000000987mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="3.0749239999998963mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-3.07492400000001mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.5250140000000556mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-2.525013999999942mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="2.275077999999894mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-2.2750780000000077mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="1.7500599999999622mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="1.2499339999999393mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="0.7500620000000708mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="0.2499360000000479mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-0.2499359999999342mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-0.7500620000000708mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="-1.249934000000053mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-1.7500600000000759mm" pcbY="2.4277256500000703mm" width="0.29999939999999997mm" height="1.1500103999999998mm" shape="rect" />
<silkscreenpath route={[{"x":4.500016399999936,"y":-1.3342937499999152},{"x":4.500016399999936,"y":1.0791634500002374}]} />
<silkscreenpath route={[{"x":4.500016399999936,"y":-3.5671569499999123},{"x":4.500016399999936,"y":-3.271246949999977}]} />
<silkscreenpath route={[{"x":3.731158399999913,"y":2.4474614500001053},{"x":4.3439588000001095,"y":2.4474614500001053}]} />
<silkscreenpath route={[{"x":-4.343958799999996,"y":2.4474614500001053},{"x":-3.7311584000000266,"y":2.4474614500001053}]} />
<silkscreenpath route={[{"x":-4.5000164000000495,"y":-1.3342937499999152},{"x":-4.5000164000000495,"y":1.0789094500000829}]} />
<silkscreenpath route={[{"x":-4.5000164000000495,"y":-3.5671569499999123},{"x":-4.5000164000000495,"y":-3.271246949999977}]} />
<silkscreenpath route={[{"x":4.499990999999909,"y":-0.9374949499998593},{"x":4.499990999999909,"y":0.585260450000078}]} />
<silkscreenpath route={[{"x":4.500016399999936,"y":-4.952498349999928},{"x":4.500016399999936,"y":-3.5671569499999123}]} />
<silkscreenpath route={[{"x":-4.5000164000000495,"y":-3.5671569499999123},{"x":-4.5000164000000495,"y":-4.952498349999928},{"x":4.500016399999936,"y":-4.952498349999928}]} />
<silkscreenpath route={[{"x":-4.499991000000023,"y":0.4846256500001118},{"x":-4.499991000000023,"y":-1.0381297499999391}]} />
      </footprint>}
      
      {...props}
    />
  )
}