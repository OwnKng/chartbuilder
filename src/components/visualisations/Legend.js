import { LegendOrdinal } from "@visx/legend"

const Legend = ({ scale, left }) => (
  <LegendOrdinal
    scale={scale}
    direction='row'
    shape='circle'
    labelMargin='0 30px 0 0'
    style={{
      position: "absolute",
      top: 10,
      left: left,
      width: `100%`,
      display: "flex",
      fontSize: "12px",
      overflowX: "scroll",
      flexWrap: "wrap",
      color: "var(--color-paragraph)",
    }}
  />
)

export default Legend
