import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const GlobalStyles = createGlobalStyle`
${normalize}

:root {
    --color-background: #03080D;
    --color-foreground: #0C1A29;
    --color-input: #12283F;
    --color-paragraph: #a7a9be;
    --color-heading: #fffffe;
    --color-boxshadow: #2e2f3e;
    --color-accent: #FF0A12;
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

h2 {font-size: 2.441rem;}

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

/*
cardParagraph: "#a7a9be",
button: "#00A7E1",
buttonText: "#fffffe",
stroke: "#a7a9be",
main: "#fffffe",
highlight: "#ff8906",
secondary: "#00A7E1",
tertiary: "#FB3640",
boxShadow: "#2e2f3e",

*/
