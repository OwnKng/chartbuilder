import { useState } from "react"
import Geometry from "./Geometry"
import Share from "./Share"
import { useSelection } from "../../../../hooks"
import styled from "styled-components"
import Data from "./Data"
import Style from "./Style"
import { elevation } from "../../utilities"
import { useQuery } from "@apollo/client"
import { GET_DATA } from "../../../graphql/query"

const Form = ({ className }) => {
  const { updateSelections } = useSelection()
  const [id, setId] = useState()
  const [open, setOpen] = useState("data")

  const { data, error, loading } = useQuery(GET_DATA, {
    variables: { id },
    onCompleted: (data) => {
      updateSelections({
        data: JSON.parse(data.getDataset.data),
      })
    },
  })

  return (
    <div className={className}>
      <Data open={open === "data"} setOpen={setOpen} handleChange={setId} />
      <Geometry open={open === "viz"} setOpen={setOpen} />
      <Style open={open === "style"} setOpen={setOpen} />
      <Share open={open === "share"} setOpen={setOpen} />
    </div>
  )
}

export default styled(Form)`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  min-width: 300px;
  ${elevation[1]};
  height: 85vh;
  overflow: hidden;

  background: var(--color-foreground);

  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`
