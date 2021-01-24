import { useSelection } from "../hooks"

const ChartType = () => {
  const { updateSelections } = useSelection()

  return (
    <>
      <h4>Geometry</h4>
      <button
        onClick={(e) => updateSelections({ geometry: e.target.value })}
        value='point'
      >
        Point
      </button>
      <button
        onClick={(e) => updateSelections({ geometry: e.target.value })}
        value='bar'
      >
        Bar
      </button>
      <button
        onClick={(e) => updateSelections({ geometry: e.target.value })}
        value='line'
      >
        Line
      </button>
    </>
  )
}

export default ChartType
