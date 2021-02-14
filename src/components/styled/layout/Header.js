import styled from "styled-components"
import { elevation } from "../utilities"
import Nav from "./Nav"
import { Link } from "react-router-dom"

const Header = ({ className, openSignUp, openSignIn }) => (
  <div className={className}>
    <div>
      <Link to='/'>
        <h1>graphix</h1>
      </Link>
    </div>
    <Nav openSignUp={openSignUp} openSignIn={openSignIn} />
  </div>
)

export default styled(Header)`
  grid-area: header;
  display: flex;
  place-items: center;
  justify-content: space-between;
  background: var(--color-foreground);
  padding: 0 10px;
  ${elevation[1]};

  a {
    text-decoration: none;
  }
`
