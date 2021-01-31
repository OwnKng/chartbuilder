import styled from "styled-components"

const Footer = ({ className }) => (
  <div className={className}>
    <p>Created with love using React, Visx and Netlify</p>
  </div>
)

export default styled(Footer)`
  color: var(--color-paragraph);
  opacity: 0.5;
  margin: 0px 30px;
`
