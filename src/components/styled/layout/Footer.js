import styled from "styled-components"

const Footer = ({ className }) => (
  <div className={className}>
    <span>
      GRAPHIX is an experimental data visualisation app created by{" "}
      <a href='https://ownkng.dev/'>Owen King</a>
    </span>
  </div>
)

export default styled(Footer)`
  color: var(--color-paragraph);
  margin: 0px auto;
  text-align: center;
  opacity: 0.4;

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
