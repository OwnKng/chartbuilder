import { useActive } from "../../../hooks"
import { ButtonOptions } from "../elements/ButtonOptions"

const GeoInput = ({ geometry, updateSelections }) => {
  const { active } = useActive("geometry")

  return (
    <ButtonOptions
      style={{
        background: geometry === active ? "var(--color-selected)" : "",
      }}
      onClick={(e) => updateSelections({ geometry: e.target.value })}
      value={geometry.toLowerCase()}
    >
      {geometry}
    </ButtonOptions>
  )
}

export default GeoInput
