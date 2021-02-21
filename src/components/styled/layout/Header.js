import styled from "styled-components"
import { elevation } from "../utilities"
import Nav from "./Nav"
import StyledLink from "../elements/StyledLink"

const Header = ({ className, openMenu }) => (
  <div className={className}>
    <div>
      <StyledLink className='logo' to='/'>
        graphix
      </StyledLink>
    </div>
    <Nav openMenu={openMenu} />
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

  @media only screen and (max-width: 600px) {
    display: block;
  }

  .logo {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 2rem;
    color: var(--color-button);
    padding-top: 5px;
    line-height: 1;
  }
`
