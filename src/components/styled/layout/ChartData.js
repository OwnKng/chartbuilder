import Controls from "../elements/Control"
import { Button } from "../elements/Button"
import { Select } from "../elements/Select"

const ChartData = ({ open, setOpen, handleChange }) => {
  return (
    <Controls
      title='data'
      id='data'
      position={open}
      setPosition={() => setOpen("data")}
    >
      <h4>Select data</h4>
      <div>
        <Select onChange={(e) => handleChange(e.target.value)}>
          <option value='economicData'>Economic data</option>
          <option value='timeSeries'>Time series</option>
          <option value='timeSeries2018'>2018 data</option>
        </Select>
      </div>
      <Button>Filter</Button>
      <p>Select chart &#8594;</p>
    </Controls>
  )
}

export default ChartData
