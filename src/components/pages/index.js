import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./home"
import ChartID from "./chartid"
import Layout from "../styled/layout/Layout"
import Feed from "./feed"

const Pages = () => {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/:chartID' component={ChartID}></Route>
          <Route exact path='/feed' component={Feed}></Route>
        </Layout>
      </Router>
    </>
  )
}

export default Pages
