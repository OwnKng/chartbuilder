import { useType } from "../../hooks"
import { VizInput } from "./VizInput"
import { ButtonOptions } from "./styled/elements/ButtonOptions"

const VisOptions = ({ data, x, y, color, reordered, reorder, handleClick }) => {
  const { types } = useType(data)

  if (!x) return null

  return (
    <>
      <div>
        <span>Select X</span>
        <VizInput
          name='x'
          types={types}
          accepted={x}
          handleClick={handleClick}
        />
      </div>
      <div>
        <span>Select Y</span>
        <VizInput
          name='y'
          types={types}
          accepted={y}
          handleClick={handleClick}
        />
      </div>
      {color && (
        <div>
          <span>Color By</span>
          <ButtonOptions onClick={() => handleClick({ color: false })}>
            None
          </ButtonOptions>
          <VizInput
            name='color'
            types={types}
            accepted={color}
            handleClick={handleClick}
          />
        </div>
      )}
      {reorder && (
        <div>
          <input
            type='checkbox'
            checked={reordered}
            onChange={() => handleClick({ reordered: !reordered })}
            id='reorder'
          />
          <label htmlFor='reorder'>Reorder bars</label>
        </div>
      )}
    </>
  )
}

export default VisOptions
