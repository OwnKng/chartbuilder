import { useSelection } from "../../../hooks"
import Controls from "../elements/Control"
import { visOptions } from "../../visualisations/visOptions"
import VisOptions from "./VisOptions"
import styled from "styled-components"
import { ButtonOptions } from "../elements/ButtonOptions"

const Panel = styled.div`
  display: flex;
  margin: 10px 0px;

  button {
    flex: 1;
    text-align: center;
  }
`

const Options = ({ open, setOpen }) => {
  const { data, reordered, geometry, updateSelections } = useSelection()

  return (
    <Controls
      title='Visualisation'
      position={open}
      setPosition={() => setOpen("viz")}
    >
      <h4>Geometry</h4>
      <Panel>
        <ButtonOptions
          onClick={(e) => updateSelections({ geometry: e.target.value })}
          value='point'
        >
          Point
        </ButtonOptions>
        <ButtonOptions
          onClick={(e) => updateSelections({ geometry: e.target.value })}
          value='bar'
        >
          Bar
        </ButtonOptions>
        <ButtonOptions
          onClick={(e) => updateSelections({ geometry: e.target.value })}
          value='line'
        >
          Line
        </ButtonOptions>
      </Panel>
      <h4>Map aesthetics</h4>
      <div>
        <VisOptions
          data={data}
          reordered={reordered}
          handleClick={updateSelections}
          {...visOptions[geometry]}
        />
      </div>
    </Controls>
  )
}

export default Options
