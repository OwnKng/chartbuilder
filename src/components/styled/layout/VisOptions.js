import { useType } from "../../../hooks"
import { VizInput } from "./VizInput"
import { ButtonOptions } from "../elements/ButtonOptions"
import styled from "styled-components"
import { Panel } from "../elements/Panel"

const VisOptions = ({
  classname,
  data,
  x,
  y,
  color,
  reordered,
  reorder,
  handleClick,
}) => {
  const { types } = useType(data)

  if (!x) return null

  return (
    <div className={classname}>
      <Panel>
        <span>Select X</span>
        <VizInput
          name='x'
          types={types}
          accepted={x}
          handleClick={handleClick}
        />
      </Panel>
      <Panel>
        <span>Select Y</span>
        <VizInput
          name='y'
          types={types}
          accepted={y}
          handleClick={handleClick}
        />
      </Panel>
      {color && (
        <Panel>
          <span>Color By</span>
          <ButtonOptions onClick={() => handleClick({ color: "none" })}>
            None
          </ButtonOptions>
          <VizInput
            name='color'
            types={types}
            accepted={color}
            handleClick={handleClick}
          />
        </Panel>
      )}
      {reorder && (
        <Panel>
          <input
            type='checkbox'
            checked={reordered}
            onChange={() => handleClick({ reordered: !reordered })}
            id='reorder'
          />
          <label htmlFor='reorder'>Reorder bars</label>
        </Panel>
      )}
    </div>
  )
}

export default styled(VisOptions)``
