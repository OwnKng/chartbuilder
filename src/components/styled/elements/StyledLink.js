import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = ({ className, to, children }) => (
  <div className={className}>
    <Link to={to}>{children}</Link>
  </div>
)

export default styled(StyledLink)`
  a {
    text-decoration: none;
    font-weight: normal;
    color: var(--color-button);
    position: relative;

    :before {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--color-button);
      visibility: hidden;
      transition: all 0.2s ease-in-out;
    }

    :hover:before {
      visibility: visible;
      width: 100%;
    }

    :hover {
      color: var(--color-button);
      background-size: 100% 88%;
    }
  }
`
