import { useSelection, useType } from "../hooks"

const ChartOptions = ({ keys }) => {
  const { data, x, y, color, updateSelections } = useSelection()
  const { types } = useType(data)

  return (
    <>
      <h4>Map aesthetics</h4>
      <label htmlFor='select-x'>X</label>
      <select
        id='select-x'
        onChange={(e) => updateSelections({ x: e.target.value })}
        value={x}
      >
        {keys.map((key) => (
          <option key={`select-option-key-${key}`} value={key}>
            {key}
          </option>
        ))}
      </select>
      <label htmlFor='select-y'>Y</label>
      <select
        id='select-y'
        onChange={(e) => updateSelections({ y: e.target.value })}
        value={y}
      >
        {keys.map((key) => (
          <option key={`select-option-key-${key}`} value={key}>
            {key}
          </option>
        ))}
      </select>
      <label htmlFor='select-color'>Color</label>
      <select
        id='select-color'
        onChange={(e) => updateSelections({ color: e.target.value })}
        value={color}
      >
        {keys.map((key) => (
          <option key={`select-option-key-${key}`} value={key}>
            {key}
          </option>
        ))}
        <option value={"none"}>none</option>
      </select>
    </>
  )
}

export default ChartOptions
