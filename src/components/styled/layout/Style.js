import Controls from "../elements/Control"
import { ButtonOptions } from "../elements/ButtonOptions"
import { useSelection } from "../../../hooks"
import { Menu } from "../elements/Menu"

const Style = ({ open, setOpen }) => {
  const { updateSelections } = useSelection()

  return (
    <Menu>
      <div className='title' onClick={() => setOpen("style")}>
        <h2>Style</h2>
      </div>
      <Controls open={open}>
        <h4>Style chart</h4>
        <span>Select Theme</span>
        <ButtonOptions onClick={() => updateSelections({ theme: "light" })}>
          Light Theme
        </ButtonOptions>
        <ButtonOptions onClick={() => updateSelections({ theme: "dark" })}>
          Dark Theme
        </ButtonOptions>
        <span>Select Color Palette</span>
        <ButtonOptions onClick={() => updateSelections({ palette: "default" })}>
          Default
        </ButtonOptions>
        <ButtonOptions onClick={() => updateSelections({ palette: "lancet" })}>
          Two
        </ButtonOptions>
      </Controls>
    </Menu>
  )
}

export default Style
