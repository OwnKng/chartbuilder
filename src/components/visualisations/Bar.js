import ParentSize from "@visx/responsive/lib/components/ParentSize"
import { Group } from "@visx/group"
import { Bar } from "@visx/shape"
import { schemeSet1 } from "d3"
import { AnimatedAxis } from "@visx/react-spring"
import { AxisBottom } from "@visx/axis"
import { useSelection } from "../../hooks"
import { LegendOrdinal } from "@visx/legend"
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale"
import { max } from "d3"

const BarChart = ({
  width,
  height,
  margin = { top: 30, left: 30, right: 30, bottom: 40 },
}) => {
  const { data, x, y, color } = useSelection()

  // Set dimensions
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.bottom - margin.top

  // Accessor functions
  const getX = (d) => d[x]
  const getY = (d) => d[y]
  const getColor = (d) => d[color]

  // Create scales
  const xScale = scaleBand({
    domain: [...new Set(data.map(getX))],
    range: [margin.left, innerWidth],
    padding: 0.1,
  })

  const yScale = scaleLinear({
    domain: [0, max(data, getY)],
    range: [innerHeight, margin.top],
    nice: true,
  })

  const colorScale = scaleOrdinal({
    domain: [...new Set(data.map(getColor))],
    range: schemeSet1,
  })

  // Return the chart
  return (
    <>
      <svg width={width} height={height}>
        <Group>
          {data.map((d, i) => {
            const barWidth = xScale.bandwidth()
            const barHeight = innerHeight - (yScale(getY(d)) ?? 0)
            const barX = xScale(getX(d))
            const barY = innerHeight - barHeight
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
        <AnimatedAxis left={margin.left} orientation='left' scale={yScale} />
        <AxisBottom
          top={innerHeight}
          orientation='bottom'
          scale={xScale}
          numTicks={xScale.domain().length}
        />
      </svg>
      {color !== "none" ? (
        <LegendOrdinal
          scale={colorScale}
          direction='row'
          shape='circle'
          labelMargin='0 30px 0 0'
          style={{
            position: "absolute",
            top: margin.top / 2 - 10,
            left: margin.left,
            width: `100%`,
            display: "flex",
            fontSize: "12px",
            overflowX: "scroll",
            flexWrap: "wrap",
          }}
        />
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
