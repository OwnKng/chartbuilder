import { AnimatedAxis } from "@visx/react-spring"
import { AxisLeft as AxisLeftVisx } from "@visx/axis"
import { format } from "d3"
import { useSelection } from "../../hooks"

const AxisLeft = ({ animated = true, scale }) => {
  const { y } = useSelection()
  if (animated) {
    return (
      <AnimatedAxis
        orientation='left'
        scale={scale}
        hideAxisLine={true}
        hideTicks={true}
        label={y}
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
        label={y}
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
