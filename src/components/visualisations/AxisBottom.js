import { AnimatedAxis } from "@visx/react-spring"
import { AxisBottom as AxisBottomVisx } from "@visx/axis"
import { format } from "d3"

const AxisBottom = ({ top, animated = true, scale }) => {
  if (animated) {
    return (
      <AnimatedAxis
        top={top}
        orientation='bottom'
        scale={scale}
        stroke='var(--color-paragraph)'
        tickStroke='var(--color-paragraph)'
        tickFormat={format("d")}
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
