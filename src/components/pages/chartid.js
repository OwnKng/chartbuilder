import Visualisation from "../styled/layout/visualisation/Visualisation"
import { useQuery } from "@apollo/react-hooks"
import { useSelection } from "../../hooks"
import styled from "styled-components"
import { GETCHART } from "../graphql"

const ChartID = ({ className, match }) => {
  const id = match.params.chartID
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

export default styled(ChartID)`
  height: 85vh;
  width: 99vw;
  margin: 10px auto;
`
