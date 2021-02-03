import { useState } from "react"
import Geometry from "./Geometry"
import Share from "./Share"
import { useSelection } from "../../../hooks"
import { econ, econTs, econTs2018 } from "../../../data/index"
import styled from "styled-components"
import Data from "./Data"
import Style from "./Style"
import { elevation } from "../utilities"

const Form = ({ className }) => {
  const { updateSelections } = useSelection()

  const [open, setOpen] = useState("data")

  const handleChange = (value) => {
    let selected
    switch (value) {
      case "economicData":
        selected = econ
        break
      case "timeSeries":
        selected = econTs
        break
      case "timeSeries2018":
        selected = econTs2018
        break
      default:
        selected = econ
    }
    updateSelections({
      data: selected,
    })
  }

  return (
    <div className={className}>
      <Data
        open={open === "data"}
        setOpen={setOpen}
        handleChange={handleChange}
      />
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
  width: 30vw;
  margin-left: 5px;
  ${elevation[1]};
  padding: 1rem 0.5rem;
  height: 85vh;
  overflow: hidden;

  background: var(--color-foreground);

  h2 {
    cursor: pointer;
    margin: 10px 0px;
  }
`
