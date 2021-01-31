import Visualisation from "../styled/layout/Visualisation"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { useSelection } from "../../hooks"
import styled from "styled-components"

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

const Shared = ({ className, match }) => {
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
    <div className={className}>
      <Visualisation />
    </div>
  )
}

export default styled(Shared)`
  width: 95vw;
  margin: 0px auto;
`
