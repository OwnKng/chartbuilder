import { AnimatedAxis } from "@visx/react-spring"
import { AxisBottom as AxisBottomVisx } from "@visx/axis"
import { format } from "d3"
import { useSelection } from "../../hooks"

const AxisBottom = ({ top, animated = true, scale }) => {
  const { x } = useSelection()
  if (animated) {
    return (
      <AnimatedAxis
        top={top}
        orientation='bottom'
        scale={scale}
        stroke='var(--color-paragraph)'
        tickStroke='var(--color-paragraph)'
        tickFormat={format("d")}
        label={x}
        tickLabelProps={() => ({
          fill: "var(--color-paragraph)",
          fontSize: 12,
          textAnchor: "middle",
        })}
      />
    )
  } else {
    return (
      <AxisBottomVisx
        top={top}
        orientation='bottom'
        scale={scale}
        label={x}
        numTicks={scale.domain().length}
        stroke='var(--color-paragraph)'
        tickStroke='var(--color-paragraph)'
        tickLabelProps={() => ({
          fill: "var(--color-paragraph)",
          fontSize: 12,
          textAnchor: "middle",
        })}
      />
    )
  }
}

export default AxisBottom
