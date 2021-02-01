import Controls from "../elements/Control"
import { ButtonOptions } from "../elements/ButtonOptions"
import { useSelection } from "../../../hooks"
import { NextSpan } from "../elements/NextSpan"

const Style = ({ open, setOpen }) => {
  const { updateSelections } = useSelection()

  return (
    <Controls
      title='Style'
      position={open}
      setPosition={() => setOpen("style")}
    >
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
      <NextSpan onClick={() => setOpen("share")}>
        Share your chart &#8594;
      </NextSpan>
    </Controls>
  )
}

export default Style
