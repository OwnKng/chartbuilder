import { useSelection, useType } from "../../hooks"
import Controls from "./styled/Control"

const ChartOptions = ({ open, setOpen }) => {
  const { data, x, y, color, updateSelections } = useSelection()
  const { types } = useType(data)

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
        <label htmlFor='select-x'>X</label>
        <select
          id='select-x'
          onChange={(e) => updateSelections({ x: e.target.value })}
          value={x}
        >
          {types
            .filter((t) => t.type === "character")
            .map((key) => (
              <option
                key={`select-option-key-${key.variable}`}
                value={key.variable}
              >
                {key.variable}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor='select-y'>Y</label>
        <select
          id='select-y'
          onChange={(e) => updateSelections({ y: e.target.value })}
          value={y}
        >
          {types
            .filter((t) => t.type === "number")
            .map((key) => (
              <option
                key={`select-option-key-${key.variable}`}
                value={key.variable}
              >
                {key.variable}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor='select-color'>Color</label>
        <select
          id='select-color'
          onChange={(e) => updateSelections({ color: e.target.value })}
          value={color}
        >
          {types
            .filter((t) => t.type === "character")
            .map((key) => (
              <option
                key={`select-option-key-${key.variable}`}
                value={key.variable}
              >
                {key.variable}
              </option>
            ))}
          <option value={"none"}>none</option>
        </select>
      </div>
    </Controls>
  )
}

export default ChartOptions
