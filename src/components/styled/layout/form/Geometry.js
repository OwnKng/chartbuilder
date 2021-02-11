import { useSelection } from "../../../../hooks"
import Controls from "../../elements/Control"
import { visOptions } from "../../../visualisations/visOptions"
import VisOptions from "./VisOptions"
import styled from "styled-components"
import GeoInput from "./GeoInput"
import { Menu } from "../../elements/Menu"

const Panel = styled.div`
  display: flex;
  margin: 10px 0px;

  button {
    flex: 1;
    text-align: center;
  }
`

const Geometry = ({ open, setOpen }) => {
  const { data, reordered, geometry, updateSelections } = useSelection()

  return (
    <Menu>
      <div className='title' onClick={() => setOpen("viz")}>
        <h2>Visualisation</h2>
      </div>
      <Controls open={open}>
        <h4>Geometry</h4>
        <Panel>
          {Object.keys(visOptions).map((geo, i) => (
            <GeoInput
              key={`geo-${i}`}
              geometry={geo}
              updateSelections={updateSelections}
            />
          ))}
        </Panel>
        <h4>Options</h4>
        <div>
          <VisOptions
            data={data}
            reordered={reordered}
            handleClick={updateSelections}
            {...visOptions[geometry]}
          />
        </div>
      </Controls>
    </Menu>
  )
}

export default Geometry
