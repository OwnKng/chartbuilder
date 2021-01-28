import { useType } from "../../hooks"
import { VizInput } from "./VizInput"
import { useState } from "react"
import { ButtonOptions } from "./styled/elements/ButtonOptions"

const Aesthetics = ({ data, x, y, color, reorder, handleClick }) => {
  const { types } = useType(data)
  const [check, setCheck] = useState(false)

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
            checked={check}
            onChange={() => {
              setCheck((prevState) => !prevState)
              handleClick({ reorder: check })
            }}
            id='reorder'
          />
          <label htmlFor='reorder'>Reorder bars</label>
        </div>
      )}
    </>
  )
}

export default Aesthetics
