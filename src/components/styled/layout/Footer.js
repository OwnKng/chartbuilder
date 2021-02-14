import styled from "styled-components"

const Footer = ({ className }) => (
  <div className={className}>
    <span>GRAPHIX V1.0 created with React, Visx and Netlify</span>
  </div>
)

export default styled(Footer)`
  color: var(--color-paragraph);
  margin: 0px 5px;
  opacity: 0.4;
`
