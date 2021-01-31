import styled from "styled-components"
import { useSelection } from "../../../hooks"
import Scatter from "../../visualisations/Scatter"
import Bar from "../../visualisations/Bar"
import Line from "../../visualisations/Line"
import { elevation } from "../utilities/"

const Visualisation = ({ className }) => {
  const { x, geometry, title, subtitle, updateSelections } = useSelection()

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
        onChange={(e) => updateSelections({ title: e.target.value })}
      />
      <input
        type='text'
        className='subtitle'
        value={subtitle}
        onChange={(e) => updateSelections({ subtitle: e.target.value })}
      />
      {x && <div style={{ position: "relative" }}>{renderChart(geometry)}</div>}
    </div>
  )
}

export default styled(Visualisation)`
  grid-area: visualisation;
  display: grid;
  grid-template-areas: "title" "subtitle" "visualisation";
  grid-template-rows: 6vh 4vh 75vh;
  width: 100%;
  padding: 1rem 0.5rem;
  background: var(--color-foreground);
  ${elevation[1]};

  input {
    border: none;
    outline: none;
    margin: 3px 30px;
    padding: 0px 0.5rem;
    background: var(--color-input);
    color: var(--color-heading);
  }

  .title {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
`
