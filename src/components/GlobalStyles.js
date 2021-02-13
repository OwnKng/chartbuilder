import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const GlobalStyles = createGlobalStyle`
${normalize}

:root {
    --color-background: ${({ theme }) => theme.background};
    --color-foreground: ${({ theme }) => theme.foreground};
    --color-selected: ${({ theme }) => theme.selected};
    --color-input: ${({ theme }) => theme.input};
    --color-paragraph: ${({ theme }) => theme.paragraph};
    --color-heading: ${({ theme }) => theme.heading};
    --color-boxshadow: ${({ theme }) => theme.boxshadow};
    --color-accent: ${({ theme }) => theme.accent};
    --color-accentTwo: ${({ theme }) => theme.accentTwo};
    --color-button: ${({ theme }) => theme.button};
    --color-button-hover: ${({ theme }) => theme.hover};
    --color-userInput: ${({ theme }) => theme.userInput};
  }
  
html {font-size: 100%} /*16px*/

@media screen and (max-width: 600px) {
  html {
      font-size: 70%;
  }
}

body {
  font-family: 'Saira', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  height: 100vh;
  margin: 0px;
  box-sizing: border-box;
  background: var(--color-background);
}

p {
  color: var(--color-paragraph);
}

span {
  color: var(--color-paragraph);
}

h1, h2, h3, h4, h5 {
  color: var(--color-heading);
  margin: 3rem 0 1.38rem;
  font-family: 'Saira', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  text-transform: uppercase;
  padding: 0px;
  margin: 0px;
  font-weight: 800;
}

h4 {margin: 0px;
  text-transform: uppercase;}


small, .text_small {font-size: 0.8rem;}

  .visx-axis-label {
    fill: var(--color-paragraph);
    font-size: 12px;
    text-transform: capitalize;
  }
  
  .header {
    grid-area: header;
  }
  
  .footer {
    grid-area: footer;
  }
  
`
