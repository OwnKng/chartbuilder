import styled from "styled-components"
import { elevation } from "../utilities"
import Nav from "./Nav"

const Header = ({ className, openSignUp, openSignIn }) => (
  <div className={className}>
    <div>
      <h1>graphix</h1>
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
  padding: 0 35px;
  ${elevation[1]};
  min-height: 8vh;
  margin-bottom: 10px;
`
