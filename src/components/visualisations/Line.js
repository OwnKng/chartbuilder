import ParentSize from "@visx/responsive/lib/components/ParentSize"
import { useSelection } from "../../hooks"
import { scaleLinear, scaleOrdinal } from "@visx/scale"
import { extent, group, schemeSet1 } from "d3"
import { LinePath } from "@visx/shape"
import { useScale } from "../../hooks"
import Legend from "./Legend"
import AxisLeft from "./AxisLeft"
import AxisBottom from "./AxisBottom"
import { AnimatedGridRows } from "@visx/react-spring"

const LineChart = ({
  width,
  height,
  margin = { top: 60, left: 50, right: 80, bottom: 80 },
}) => {
  // dimensions
  const { data, x, y, color } = useSelection()

  // Set dimensions
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.bottom - margin.top

  // Accessor functions
  const getX = (d) => d[x]
  const getY = (d) => d[y]
  const getColor = (d) => d[color]

  // Create scales
  const xScale = scaleLinear({
    domain: extent(data, getX),
    range: [margin.left, innerWidth + margin.left],
    clamp: true,
  })

  const yScale = scaleLinear({
    domain: extent(data, getY),
    range: [innerHeight + margin.top, margin.top],
    nice: true,
  })

  const colorScale = scaleOrdinal({
    domain: [...new Set(data.map(getColor))],
    range: schemeSet1,
  })

  // Group data
  const dataGrouped = Array.from(
    group(data, (d) => d[color]),
    ([key, value]) => ({ key, value })
  )

  return (
    <>
      <svg width={width} height={height}>
        {dataGrouped.map((data, i) => (
          <LinePath
            key={i}
            data={data.value}
            x={(d) => xScale(getX(d))}
            y={(d) => yScale(getY(d))}
            stroke={colorScale(data.key)}
          />
        ))}
        <g transform={`translate(${margin.left},0)`}>
          <AxisLeft scale={yScale} />
          <AnimatedGridRows
            scale={yScale}
            stroke={"var(--color-paragraph)"}
            strokeWidth={0.2}
            width={innerWidth}
          />
        </g>
        <AxisBottom top={innerHeight + margin.top} scale={xScale} />
      </svg>
      {color !== "none" ? (
        <Legend left={margin.left} scale={colorScale} />
      ) : null}
    </>
  )
}

const ChartWrapper = () => (
  <ParentSize>
    {({ width, height }) => <LineChart width={width} height={height} />}
  </ParentSize>
)

export default ChartWrapper
