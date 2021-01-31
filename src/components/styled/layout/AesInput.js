import { ButtonOptions } from "../elements/ButtonOptions"
import { useActive } from "../../../hooks"

const AesInput = ({ name, types, accepted, handleClick }) => {
  const { active } = useActive(name)

  return (
    <>
      {types
        .filter((t) => accepted.includes(t.type))
        .map((key) => (
          <ButtonOptions
            style={{
              background:
                key.variable === active ? "var(--color-selected)" : "",
            }}
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
export default AesInput
