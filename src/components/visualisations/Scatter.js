import ParentSize from "@visx/responsive/lib/components/ParentSize"
import { Circle } from "@visx/shape"
import { scaleOrdinal } from "@visx/scale"
import { schemeSet1 } from "d3"
import { AnimatedAxis } from "@visx/react-spring"
import { useSelection } from "../../hooks"
import { LegendOrdinal } from "@visx/legend"
import { useScale, useType } from "../../hooks"

const Chart = ({
  width,
  height,
  margin = { top: 30, left: 50, right: 50, bottom: 40 },
}) => {
  const { data, x, y, color, geometry } = useSelection()

  // Set dimensions
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.bottom - margin.top

  // Accessor functions
  const getX = (d) => d[x]
  const getY = (d) => d[y]
  const getColor = (d) => d[color]

  // Create scales
  const [xScale] = useScale(data, getX)
  xScale.range([margin.left, innerWidth])

  const [yScale] = useScale(data, getY)
  yScale.range([innerHeight, margin.top])

  const colorScale = scaleOrdinal({
    domain: [...new Set(data.map(getColor))],
    range: schemeSet1,
  })

  // Return the chart
  return (
    <>
      <svg width={width} height={height}>
        {geometry === "point" &&
          data.map((point, i) => (
            <Circle
              key={`point-${i}`}
              cx={xScale(getX(point))}
              cy={yScale(getY(point))}
              r={4}
              fill={colorScale(getColor(point))}
            />
          ))}
        <AnimatedAxis left={margin.left} orientation='left' scale={yScale} />
        <AnimatedAxis top={innerHeight} orientation='bottom' scale={xScale} />
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
    {({ width, height }) => <Chart width={width} height={height} />}
  </ParentSize>
)

export default ChartWrapper
