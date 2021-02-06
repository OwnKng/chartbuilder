import ParentSize from "@visx/responsive/lib/components/ParentSize"
import { Circle } from "@visx/shape"
import { scaleOrdinal } from "@visx/scale"
import { AnimatedGridRows } from "@visx/react-spring"
import { useSelection } from "../../hooks"
import { LegendOrdinal } from "@visx/legend"
import { useScale } from "../../hooks"
import AxisLeft from "./AxisLeft"
import AxisBottom from "./AxisBottom"
import { scaleLinear } from "@visx/scale"
import { extent } from "d3"
import { palettes } from "../styled/utilities"

const Chart = ({
  width,
  height,
  margin = { top: 60, left: 60, right: 30, bottom: 80 },
}) => {
  const { data, x, y, color, geometry, palette } = useSelection()

  // Set dimensions
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.bottom - margin.top

  // Accessor functions
  const getX = (d) => d[x]
  const getY = (d) => d[y]
  const getColor = (d) => d[color]

  // Create scales
  const [xScale] = useScale(data, getX)
  xScale.range([margin.left, innerWidth + margin.left])

  const yScale = scaleLinear({
    range: [innerHeight + margin.top, margin.top],
    domain: extent(data, getY),
    nice: true,
  })

  const colorScale = scaleOrdinal({
    domain: [...new Set(data.map(getColor))],
    range: palettes[palette],
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
        <AxisBottom top={innerHeight + margin.top} scale={xScale} />
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
      </svg>
      {color !== "none" ? (
        <LegendOrdinal
          scale={colorScale}
          direction='row'
          shape='circle'
          labelMargin='0 30px 0 0'
          style={{
            position: "absolute",
            top: 10,
            left: margin.left,
            width: `100%`,
            display: "flex",
            fontSize: "12px",
            overflowX: "scroll",
            flexWrap: "wrap",
            color: "var(--color-paragraph)",
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
