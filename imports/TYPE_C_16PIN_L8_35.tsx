import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"]
} as const

export const TYPE_C_16PIN_L8_35 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5379909"
  ]
}}
      manufacturerPartNumber="TYPE_C_16PIN_L8_35"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" width="1.524mm" height="1.524mm" shape="rect" />
      </footprint>}
      
      {...props}
    />
  )
}