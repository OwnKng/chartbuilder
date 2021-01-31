import Form from "../styled/layout/Form"
import Visualisation from "../styled/layout/Visualisation"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { useSelection } from "../../hooks"

const GETCHART = gql`
  query GetChart($id: ID!) {
    selection(id: $id) {
      _id
      data
      geometry
      x
      y
      geometry
      color
      reordered
      title
      subtitle
    }
  }
`

const Shared = ({ match }) => {
  const id = match.url.substring(1)
  const { updateSelections } = useSelection()

  const { loading, error } = useQuery(GETCHART, {
    variables: { id },
    onCompleted: (data) => {
      const { selection } = data
      updateSelections({
        ...selection,
        data: JSON.parse(selection.data),
      })
    },
  })

  if (loading) return null
  if (error) return null

  return (
    <div className='app'>
      <div className='header'>Header</div>
      <Visualisation />
      <Form />
      <div className='footer'>footer</div>
    </div>
  )
}

export default Shared
