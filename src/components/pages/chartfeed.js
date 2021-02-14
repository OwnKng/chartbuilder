import styled from "styled-components"
import { useQuery } from "@apollo/client"
import ChartTable from "../../components/styled/layout/chartfeed/ChartTable"
import ChartDataSets from "../../components/styled/layout/chartfeed/ChartDataSets"
import { IS_LOGGED_IN } from "../graphql"

const ChartFeed = ({ className }) => {
  const { data } = useQuery(IS_LOGGED_IN)

  if (data.isLoggedIn === false)
    return (
      <div style={{ textAlign: "center", margin: "0px auto" }}>
        <p>Please sign in to view your charts</p>
      </div>
    )

  return (
    <div className={className}>
      <h2>My Graphs</h2>
      <ChartTable />
      <h2>My Datasets</h2>
      <ChartDataSets />
    </div>
  )
}

export default styled(ChartFeed)`
  min-height: 100vh;
  max-width: 1000px;
  margin: 0px auto;
`
