import Controls from "../elements/Control"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { useSelection } from "../../../hooks"
import { Button } from "../elements/Button"
import ShareLink from "./ShareLink"
import { Menu } from "../elements/Menu"

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
    $theme: String!
    $palette: String!
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
        theme: $theme
        palette: $palette
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
    <Menu>
      <div className='title' onClick={() => setOpen("share")}>
        <h2>Share</h2>
      </div>
      <Controls open={open}>
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
    </Menu>
  )
}

export default ChartShare
