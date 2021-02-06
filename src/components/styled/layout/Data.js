import Controls from "../elements/Control"
import { Button } from "../elements/Button"
import { Select } from "../elements/Select"
import { Table } from "../elements/Table"
import { useType, useSelection } from "../../../hooks"
import { Menu } from "../elements/Menu"
import DataInput from "./DataInput"
import { useState } from "react"

const Data = ({ open, setOpen, handleChange }) => {
  const { data } = useSelection()
  const { types } = useType(data)
  const [dataOpen, setDataOpen] = useState(false)

  return (
    <Menu>
      {dataOpen && <DataInput toggle={() => setDataOpen(false)} />}
      <div className='title' onClick={() => setOpen("data")}>
        <h2>Data</h2>
      </div>
      <Controls open={open}>
        <h4>Select data</h4>
        <div>
          <Select onChange={(e) => handleChange(e.target.value)}>
            <option value='economicData'>OECD data</option>
            <option value='timeSeries'>Time series</option>
            <option value='timeSeries2018'>World Bank Data</option>
          </Select>
        </div>
        <Button onClick={() => setDataOpen((prevState) => !prevState)}>
          Add new data
        </Button>
        <Button>Filter</Button>
        <Table>
          <caption>Data types</caption>
          <thead>
            <tr>
              <th>Column</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {types.map((d, i) => (
              <tr key={`${d.variable}${i}`}>
                <td>{d.variable}</td>
                <td>{d.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Controls>
    </Menu>
  )
}

export default Data
