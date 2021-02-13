import Controls from "../../elements/Control"
import { Button } from "../../elements/Button"
import { Select } from "../../elements/Select"
import { Table } from "../../elements/Table"
import { useType, useSelection } from "../../../../hooks"
import { Menu } from "../../elements/Menu"
import DataInput from "./addData/DataInput"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_DATASETS, IS_LOGGED_IN } from "../../../graphql/query"
import { motion } from "framer-motion"

const Data = ({ open, setOpen, handleChange }) => {
  const { data } = useSelection()
  const { types } = useType(data)
  const [dataOpen, setDataOpen] = useState(false)
  const [prompt, setPrompt] = useState(false)

  const { data: meta, loading } = useQuery(GET_DATASETS)
  const { data: signedIn } = useQuery(IS_LOGGED_IN)

  if (loading) return <p>Loading</p>

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
            <Button
              onClick={() => {
                signedIn.isLoggedIn
                  ? setDataOpen((prevState) => !prevState)
                  : setPrompt(true)
              }}
            >
              Add new data
            </Button>
            {prompt && (
              <motion.span
                style={{
                  textAlign: "center",
                  margin: 0,
                }}
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
              >
                You must be signed in to add a dataset
              </motion.span>
            )}
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
