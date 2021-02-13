import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./home"
import ChartID from "./chartid"
import Layout from "../styled/layout/Layout"
import ChartFeed from "./chartfeed"

const Pages = () => {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/chart:chartID' component={ChartID}></Route>
          <Route exact path='/feed' component={ChartFeed}></Route>
        </Layout>
      </Router>
    </>
  )
}

export default Pages
