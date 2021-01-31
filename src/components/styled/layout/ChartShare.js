import Controls from "../elements/Control"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { useSelection } from "../../../hooks"
import { Button } from "../elements/Button"
import ShareLink from "./ShareLink"

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
  const [saveGraph, { data, error }] = useMutation(SAVEGRAPH)
  const { selections } = useSelection()

  return (
    <Controls title='Share' position={open} setPosition={() => setOpen("data")}>
      <h4>Share chart</h4>
      <Button
        onClick={() =>
          saveGraph({
            variables: {
              ...selections,
              data: JSON.stringify(selections.data),
            },
          })
        }
      >
        Generate Share Link
      </Button>
      {error && <p>An error occured</p>}
      {data && <ShareLink id={data.createGraph._id} />}
    </Controls>
  )
}

export default ChartShare
