import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./home"
import Shared from "./shared"

const Pages = () => {
  return (
    <>
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/:chartID' component={Shared}></Route>
      </Router>
    </>
  )
}

export default Pages
