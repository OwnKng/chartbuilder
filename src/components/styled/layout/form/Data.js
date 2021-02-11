import Controls from "../../elements/Control"
import { Button } from "../../elements/Button"
import { Select } from "../../elements/Select"
import { Table } from "../../elements/Table"
import { useType, useSelection } from "../../../../hooks"
import { Menu } from "../../elements/Menu"
import DataInput from "./addData/DataInput"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_DATASETS } from "../../../graphql/query"

const Data = ({ open, setOpen, handleChange }) => {
  const { data } = useSelection()
  const { types } = useType(data)
  const [dataOpen, setDataOpen] = useState(false)
  const [browserOpen, setBrowserOpen] = useState(false)

  const { data: meta, loading } = useQuery(GET_DATASETS)

  return (
    <Menu>
      {dataOpen && <DataInput toggle={() => setDataOpen(false)} />}
      <div className='title' onClick={() => setOpen("data")}>
        <h2>Data</h2>
      </div>
      <Controls open={open}>
        {loading ? (
          <p>Loading data</p>
        ) : (
          <>
            <h4>Select data</h4>
            <div>
              <Select onChange={(e) => handleChange(e.target.value)}>
                {meta.getDatasets.map((d) => (
                  <option value={d._id} key={d._id}>
                    {d.name}
                  </option>
                ))}
              </Select>
            </div>
            <Button onClick={() => setDataOpen((prevState) => !prevState)}>
              Add new data
            </Button>
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
          </>
        )}
      </Controls>
    </Menu>
  )
}

export default Data
