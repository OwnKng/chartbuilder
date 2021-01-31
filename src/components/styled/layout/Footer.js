import styled from "styled-components"

const Footer = ({ className }) => (
  <div className={className}>
    <p>Created with love using React, Visx and Netlify</p>
  </div>
)

export default styled(Footer)`
  color: var(--color-paragraph);
  margin: 10px 0px 10px 10px;
  opacity: 0.4;
`
