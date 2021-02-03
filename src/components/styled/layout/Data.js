import Controls from "../elements/Control"
import { Button } from "../elements/Button"
import { Select } from "../elements/Select"
import { NextSpan } from "../elements/NextSpan"
import { Table } from "../elements/Table"
import { useType, useSelection } from "../../../hooks"
import { Menu } from "../elements/Menu"

const Data = ({ open, setOpen, handleChange }) => {
  const { data } = useSelection()
  const { types } = useType(data)

  return (
    <Menu>
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
        <NextSpan onClick={() => setOpen("viz")}>Select chart &#8594;</NextSpan>
      </Controls>
    </Menu>
  )
}

export default Data
