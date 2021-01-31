import { useSelection } from "../../../hooks"
import Controls from "../elements/Control"
import { visOptions } from "../../visualisations/visOptions"
import VisOptions from "./VisOptions"
import styled from "styled-components"
import GeoInput from "../layout/GeoInput"

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
      title='visualise'
      position={open}
      setPosition={() => setOpen("viz")}
    >
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
      <h4>chart options</h4>
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
