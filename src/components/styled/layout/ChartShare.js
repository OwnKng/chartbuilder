import Controls from "../elements/Control"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { useSelection } from "../../../hooks"

const SAVEGRAPH = gql`
  mutation CreateGraph(
    $data: String!
    $x: String!
    $y: String!
    $geometry: String!
    $color: String
    $reordered: Boolean
    $title: String
    $subtitle: String
  ) {
    createGraph(
      input: {
        data: $data
        x: $x
        y: $y
        geometry: $geometry
        color: $color
        reordered: $reordered
        title: $title
        subtitle: $subtitle
      }
    ) {
      _id
    }
  }
`

const ChartShare = ({ open, setOpen }) => {
  const [saveGraph, newChart] = useMutation(SAVEGRAPH)
  const {
    data,
    x,
    y,
    geometry,
    color,
    reordered,
    title,
    subtitle,
  } = useSelection()

  return (
    <Controls title='Share' position={open} setPosition={() => setOpen("data")}>
      <h4>Share chart</h4>
      <button
        onClick={() =>
          saveGraph({
            variables: {
              data: JSON.stringify(data),
              x: x,
              y: y,
              geometry: geometry,
              color: color,
              reordered: reordered,
              title: title,
              subtitle: subtitle,
            },
          })
        }
      >
        Share
      </button>
      <button>Download</button>
      {newChart.data && <p>{newChart.data.createGraph._id}</p>}
    </Controls>
  )
}

export default ChartShare
