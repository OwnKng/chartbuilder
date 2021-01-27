import { useState, useEffect } from "react"
import ChartOptions from "./ChartOptions"
import ChartShare from "./ChartShare"
import { useSelection } from "../../hooks"
import { econ, econTs, econTs2018 } from "../../data/index"
import styled from "styled-components"
import ChartData from "./ChartData"
import Style from "./Style"

const Form = ({ className }) => {
  const { data, updateSelections } = useSelection()
  const [keys, setKeys] = useState(false)
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

  useEffect(() => {
    setKeys(Object.keys(data[0]))
  }, [data, updateSelections])

  return (
    <div className={className}>
      <ChartData
        open={open === "data"}
        setOpen={() => setOpen("data")}
        handleChange={handleChange}
      />
      {keys && (
        <ChartOptions
          open={open === "viz"}
          setOpen={() => setOpen("viz")}
          keys={keys}
        />
      )}
      <Style open={open === "style"} setOpen={() => setOpen("style")} />
      <ChartShare open={open === "share"} setOpen={() => setOpen("share")} />
    </div>
  )
}

export default styled(Form)`
  grid-area: form;
  border: 5px solid black;
  border-right: none;
  display: flex;
  grid-template-columns: repeat(3, auto);
`
