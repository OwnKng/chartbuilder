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
    --color-button: ${({ theme }) => theme.button};
    --color-button-hover: ${({ theme }) => theme.hover};
  }
  
@import url('https://fonts.googleapis.com/css?family=Saira:400|Archivo+Black:400');

html {font-size: 80%;} /*16px*/

body {
  background: white;
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
  margin: 0px;
}

span {
  color: var(--color-paragraph);
}

h1, h2, h3, h4, h5 {
  color: var(--color-heading);
  margin: 3rem 0 1.38rem;
  font-family: 'Archivo Black', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  font-size: 3.052rem;
  text-transform: uppercase;
  padding: 0px;
  margin: 0px;
  font-weight: 800;
}

h2 {font-size: 2rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;
  margin: 0px;
  text-transform: uppercase;}

h5 {font-size: 1.25rem;}

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
