import Controls from "./styled/Control"

const ChartShare = ({ open, setOpen }) => {
  return (
    <Controls title='Share' position={open} setPosition={() => setOpen("data")}>
      <h4>Share chart</h4>
      <button>Share</button>
      <button>Download</button>
    </Controls>
  )
}

export default ChartShare
