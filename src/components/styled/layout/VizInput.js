import { ButtonOptions } from "../elements/ButtonOptions"

export const VizInput = ({ name, types, accepted, handleClick }) => {
  return (
    <>
      {types
        .filter((t) => accepted.includes(t.type))
        .map((key) => (
          <ButtonOptions
            key={`select-option-key-${key.variable}`}
            value={key.variable}
            onClick={() => handleClick({ [name]: key.variable })}
          >
            {key.variable}
          </ButtonOptions>
        ))}
    </>
  )
}
