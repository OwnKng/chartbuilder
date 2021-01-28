import { useSelection } from "../../hooks"
import Controls from "./styled/Control"
import { visOptions } from "../visualisations/visOptions"
import Aesthetics from "./Aesthetics"

const ChartOptions = ({ open, setOpen }) => {
  const { data, reorder, geometry, updateSelections } = useSelection()

  return (
    <Controls
      title='Visualisation'
      position={open}
      setPosition={() => setOpen("viz")}
    >
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
      <h4>Map aesthetics</h4>
      <div>
        <Aesthetics
          data={data}
          handleClick={updateSelections}
          {...visOptions[geometry]}
        />
      </div>
    </Controls>
  )
}

export default ChartOptions
