import { useState } from "react"
import Options from "./Options"
import ChartShare from "./ChartShare"
import { useSelection } from "../../../hooks"
import { econ, econTs, econTs2018 } from "../../../data/index"
import styled from "styled-components"
import ChartData from "./ChartData"
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
      <ChartData
        open={open === "data"}
        setOpen={() => setOpen("data")}
        handleChange={handleChange}
      />
      <Options open={open === "viz"} setOpen={() => setOpen("viz")} />
      <Style open={open === "style"} setOpen={() => setOpen("style")} />
      <ChartShare open={open === "share"} setOpen={() => setOpen("share")} />
    </div>
  )
}

export default styled(Form)`
  grid-area: form;
  background: var(--color-foreground);
  display: flex;
  grid-template-columns: repeat(3, auto);
  ${elevation[1]};
  h2 {
    cursor: pointer;
  }
`
