import ParentSize from "@visx/responsive/lib/components/ParentSize"
import { Group } from "@visx/group"
import { Bar } from "@visx/shape"
import { schemeSet1 } from "d3"
import { useSelection } from "../../hooks"
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale"
import { max } from "d3"
import AxisLeft from "./AxisLeft"
import AxisBottom from "./AxisBottom"
import Legend from "./Legend"
import { AnimatedGridRows } from "@visx/react-spring"

const BarChart = ({
  width,
  height,
  margin = { top: 60, left: 50, right: 80, bottom: 80 },
}) => {
  const { data, x, y, color, reordered } = useSelection()

  let barData = [...data]

  if (reordered) barData.sort((a, b) => b[y] - a[y])

  // Set dimensions
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.bottom - margin.top

  // Accessor functions
  const getX = (d) => d[x]
  const getY = (d) => d[y] ?? 0
  const getColor = (d) => d[color]

  // Create scales
  const xScale = scaleBand({
    domain: [...new Set(barData.map(getX))],
    range: [margin.left, innerWidth + margin.left],
    padding: 0.1,
  })

  const yScale = scaleLinear({
    domain: [0, max(barData, getY)],
    range: [innerHeight + margin.top, margin.top],
    nice: true,
  })

  const colorScale = scaleOrdinal({
    domain: [...new Set(barData.map(getColor))],
    range: schemeSet1,
  })

  // Return the chart
  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},0)`}>
          <AxisLeft scale={yScale} />
          <AnimatedGridRows
            scale={yScale}
            stroke={"var(--color-paragraph)"}
            strokeWidth={0.2}
            width={innerWidth}
          />
        </g>
        <Group>
          {barData.map((d, i) => {
            const barWidth = xScale.bandwidth()
            const barHeight = innerHeight + margin.top - yScale(getY(d))
            const barX = xScale(getX(d))
            const barY = innerHeight + margin.top - barHeight
            return (
              <Bar
                key={`bar-${i}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill={colorScale(getColor(d))}
              />
            )
          })}
        </Group>
        <AxisBottom
          top={innerHeight + margin.top}
          animated={false}
          scale={xScale}
        />
      </svg>
      {color !== "none" ? (
        <Legend left={margin.left} scale={colorScale} />
      ) : null}
    </>
  )
}

const ChartWrapper = () => (
  <ParentSize>
    {({ width, height }) => <BarChart width={width} height={height} />}
  </ParentSize>
)

export default ChartWrapper
