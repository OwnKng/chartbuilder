import styled from "styled-components"

const Footer = ({ className }) => (
  <div className={className}>
    <span>Created with love using React, Visx and Netlify</span>
  </div>
)

export default styled(Footer)`
  color: var(--color-paragraph);
  margin: 10px 0px 10px 10px;
  opacity: 0.4;
`
