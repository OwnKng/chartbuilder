import styled from "styled-components"
import { useSelection } from "../../../../hooks"
import Scatter from "../../../visualisations/Scatter"
import Bar from "../../../visualisations/Bar"
import Line from "../../../visualisations/Line"
import { elevation } from "../../utilities"

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
      <div className='Input'>
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
      </div>
      <div className='viz'>{x && renderChart(geometry)}</div>
    </div>
  )
}

export default styled(Visualisation)`
  background: var(--color-foreground);
  ${elevation[1]};
  width: 100%;
  padding-top: 5px;

  .viz {
    position: relative;
    height: 70vh;

    @media only screen and (max-width: 1024) {
      height: 550px;
    }
  }

  input {
    display: block;
    border: none;
    outline: none;
    width: calc(100% - 40px);
    margin: 4px 0px;
    padding: 5px 10px;
    background: var(--color-userInput);
    color: var(--color-heading);
  }

  .Input {
    margin: 10px 0px 0px 20px;
  }

  .title {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
`
