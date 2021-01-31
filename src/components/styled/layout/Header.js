import styled from "styled-components"
import { elevation } from "../utilities"

const Header = ({ className }) => (
  <div className={className}>
    <h1>graphix</h1>
  </div>
)

export default styled(Header)`
  grid-area: header;
  display: flex;
  place-items: center;
  background: var(--color-foreground);
  padding: 0 35px;
  ${elevation[3]};
`
