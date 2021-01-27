import ParentSize from "@visx/responsive/lib/components/ParentSize"
import { useSelection } from "../../hooks"
import { scaleLinear, scaleOrdinal } from "@visx/scale"
import { extent, group, schemeSet1, format } from "d3"
import { AnimatedAxis } from "@visx/react-spring"
import { LinePath } from "@visx/shape"
import { useScale } from "../../hooks"

const LineChart = ({
  width,
  height,
  margin = { left: 30, right: 30, top: 10, bottom: 40 },
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
  const [xScale, isNumeric] = useScale(data, getX)
  xScale.range([margin.left, innerWidth])
  if (isNumeric) xScale.clamp(true)

  const yScale = scaleLinear({
    domain: extent(data, getY),
    range: [innerHeight, margin.top],
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
      <AnimatedAxis left={margin.left} orientation='left' scale={yScale} />
      <AnimatedAxis
        top={innerHeight}
        orientation='bottom'
        scale={xScale}
        tickFormat={format("d")}
      />
    </svg>
  )
}

const ChartWrapper = () => (
  <ParentSize>
    {({ width, height }) => <LineChart width={width} height={height} />}
  </ParentSize>
)

export default ChartWrapper
