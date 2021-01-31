import { AnimatedAxis } from "@visx/react-spring"
import { AxisLeft as AxisLeftVisx } from "@visx/axis"
import { format } from "d3"

const AxisLeft = ({ animated = true, scale }) => {
  if (animated) {
    return (
      <AnimatedAxis
        orientation='left'
        scale={scale}
        hideAxisLine={true}
        hideTicks={true}
        tickFormat={format(".2s")}
        tickLabelProps={() => ({
          fill: "var(--color-paragraph)",
          fontSize: 12,
          textAnchor: "middle",
        })}
      />
    )
  } else {
    return (
      <AxisLeftVisx
        orientation='left'
        scale={scale}
        tickFormat={format(".2s")}
        tickLabelProps={() => ({
          fill: "var(--color-paragraph)",
          fontSize: 12,
          textAnchor: "middle",
        })}
      />
    )
  }
}

export default AxisLeft
