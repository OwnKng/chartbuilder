import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./home"
import Shared from "./shared"
import Layout from "../styled/layout/Layout"

const Pages = () => {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/:chartID' component={Shared}></Route>
        </Layout>
      </Router>
    </>
  )
}

export default Pages
