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
  grid-area: form;
  background: var(--color-foreground);
  display: grid;
  grid-template-columns: repeat(4, auto);
  ${elevation[1]};
  h2 {
    cursor: pointer;
  }
`
