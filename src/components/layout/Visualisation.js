import styled from "styled-components"
import { useSelection } from "../../hooks"
import Scatter from "../visualisations/Scatter"
import Bar from "../visualisations/Bar"
import Line from "../visualisations/Line"
import { useState } from "react"

const Visualisation = ({ className }) => {
  const { geometry } = useSelection()
  const [title, setTitle] = useState("Chart title")
  const [subtitle, setSubtile] = useState("subtitle")

  const renderChart = (geometry) => {
    switch (geometry) {
      case "point":
        return <Scatter />
      case "bar":
        return <Bar />
      case "line":
        return <Line />
      default:
        return null
    }
  }

  return (
    <div className={className}>
      <input
        type='text'
        className='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        className='subtitle'
        value={subtitle}
        onChange={(e) => setSubtile(e.target.value)}
      />
      {renderChart(geometry)}
    </div>
  )
}

export default styled(Visualisation)`
  grid-area: visualisation;
  display: grid;
  grid-template-areas: "title" "subtitle" "visualisation";
  grid-template-rows: 5vh 5vh 80vh;
  width: 100%;
  border: 5px solid black;
  border-right: none;
  padding: 0.5rem;

  input {
    border: none;
    outline: none;
    margin: 0px 30px;
  }

  .title {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
`
