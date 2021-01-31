import Controls from "../elements/Control"
import { useStyles } from "../../../hooks"
import { verticalLabels, horizontalLabels } from "../elements/VisStyles"

const Style = ({ open, setOpen }) => {
  const { updateStyles } = useStyles()

  return (
    <Controls
      title='Style'
      position={open}
      setPosition={() => setOpen("style")}
    >
      <h4>Style visualisation</h4>
      <button
        onClick={() =>
          updateStyles({
            text: verticalLabels,
          })
        }
      >
        Vertical
      </button>
      <button
        onClick={() =>
          updateStyles({
            text: horizontalLabels,
          })
        }
      >
        Horizontal
      </button>
    </Controls>
  )
}

export default Style
