import { useState, useEffect } from "react"
import ChartOptions from "./ChartOptions"
import ChartShare from "./ChartShare"
import { useSelection } from "../hooks"
import { econ, econTs } from "../data/index"
import ChartType from "./ChartType"

const Form = () => {
  const { data, updateSelections } = useSelection()
  const [keys, setKeys] = useState(false)

  const handleChange = (value) => {
    let selected
    switch (value) {
      case "economicData":
        selected = econ
        break
      case "timeSeries":
        selected = econTs
        break
      default:
        selected = econ
    }
    updateSelections({
      data: selected,
    })
  }

  useEffect(() => {
    setKeys(Object.keys(data[0]))
  }, [data, updateSelections])

  return (
    <div className='form'>
      <h4>Select data</h4>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value='economicData'>Economic data</option>
        <option value='timeSeries'>Time series</option>
      </select>
      <button>Filter</button>
      <ChartType />
      {keys && <ChartOptions keys={keys} />}
      <ChartShare />
    </div>
  )
}

export default Form
