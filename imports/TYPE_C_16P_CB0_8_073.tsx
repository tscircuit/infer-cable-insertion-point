import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["B8"],
  pin2: ["A5"],
  pin3: ["B7"],
  pin4: ["A6"],
  pin5: ["A7"],
  pin6: ["B6"],
  pin7: ["A8"],
  pin8: ["B5"],
  pin9: ["B4A9"],
  pin10: ["B1A12"],
  pin11: ["A4B9"],
  pin12: ["A1B12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"]
} as const

export const TYPE_C_16P_CB0_8_073 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2906289"
  ]
}}
      manufacturerPartNumber="TYPE_C_16P_CB0_8_073"
      footprint={<footprint>
        <platedhole  portHints={["pin13"]} pcbX="-5.6001284999999825mm" pcbY="-2.5611836000000494mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="1.1999975999999999mm" outerHeight="2.3999951999999998mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="5.600001499999962mm" pcbY="-2.5611836000000494mm" holeWidth="0.5999987999999999mm" holeHeight="1.7999964mm" outerWidth="1.1999975999999999mm" outerHeight="2.3999951999999998mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="5.600001499999962mm" pcbY="1.4388083999999708mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="1.1999975999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="-5.6001284999999825mm" pcbY="1.4388083999999708mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="1.1999975999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-1.7497425000000248mm" pcbY="2.660802399999966mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.2498705000000427mm" pcbY="2.660802399999966mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.7497445000000198mm" pcbY="2.6592783999999483mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.24987250000015138mm" pcbY="2.660802399999966mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.25025349999987156mm" pcbY="2.6592783999999483mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.7501254999998537mm" pcbY="2.660802399999966mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.2502514999999903mm" pcbY="2.660802399999966mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.7501234999999724mm" pcbY="2.660802399999966mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.410015499999986mm" pcbY="2.660802399999966mm" width="0.5999987999999999mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="3.209861499999988mm" pcbY="2.660802399999966mm" width="0.5999987999999999mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-2.4098884999999655mm" pcbY="2.6610564000000068mm" width="0.5999987999999999mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-3.2099885000000086mm" pcbY="2.6610564000000068mm" width="0.5999987999999999mm" height="0.9999979999999999mm" shape="rect" />
<silkscreenpath route={[{"x":4.628934099999924,"y":1.8928842000000259},{"x":4.625987699999996,"y":-4.644034400000123}]} />
<silkscreenpath route={[{"x":-4.610061900000119,"y":1.8928842000000259},{"x":-4.61900270000001,"y":-4.600041600000168}]} />
<silkscreenpath route={[{"x":4.628934099999924,"y":1.892909599999939},{"x":-4.611052500000142,"y":1.892909599999939}]} />
<silkscreenpath route={[{"x":4.444987299999866,"y":-4.6007273999999825},{"x":-4.44501270000012,"y":-4.6007273999999825},{"x":-4.44501270000012,"y":1.8144489999999678},{"x":-3.663708700000143,"y":1.8144489999999678}]} />
<silkscreenpath route={[{"x":3.6637594999998555,"y":1.8144489999999678},{"x":4.444987299999866,"y":1.8144489999999678},{"x":4.444987299999866,"y":-4.6007273999999825}]} />
<silkscreenpath route={[{"x":-1.1624183000001267,"y":1.383817399999998},{"x":-1.1624183000001267,"y":1.8277077999999847}]} />
<silkscreenpath route={[{"x":-2.9124528999999484,"y":1.383817399999998},{"x":-1.1624183000001267,"y":1.383817399999998}]} />
<silkscreenpath route={[{"x":3.0844362999998793,"y":1.386001800000031},{"x":3.0844362999998793,"y":1.8277077999999847}]} />
<silkscreenpath route={[{"x":3.0844362999998793,"y":1.386001800000031},{"x":1.3344778999999107,"y":1.386001800000031}]} />
<silkscreenpath route={[{"x":1.3344778999999107,"y":1.386001800000031},{"x":1.3344778999999107,"y":1.8277077999999847}]} />
<silkscreenpath route={[{"x":-2.9124528999999484,"y":1.383817399999998},{"x":-2.9124528999999484,"y":1.8262091999999939}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=847fe37f814b4ef69ab0adb41da34c2d&pn=C2906289",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00006350000023758184, y: -1.0500614000000041, z: -2.086119500000007 },
      }}
      {...props}
    />
  )
}