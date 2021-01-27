import Controls from "./styled/Control"

const Style = ({ open, setOpen }) => {
  return (
    <Controls
      title='Style'
      position={open}
      setPosition={() => setOpen("style")}
    >
      <p>Hello World</p>
    </Controls>
  )
}

export default Style
