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
  
  body {
    margin: 0px;
    box-sizing: border-box;
    background: var(--color-background);
  }

  h1, h2, h3, h4, h5 {
    color: var(--color-heading);
  }

  h1 {
      text-transform: uppercase;
      padding: 0px;
      margin: 0px;
  }

  p {
      color: var(--color-paragraph);
      margin: 0px;
  }
  
  .app {
    display: grid;
    grid-template-areas: "header header" "visualisation form" "footer footer";
    grid-template-columns: 70vw 30vw;
    grid-template-rows: 5vh 90vh 5vh;
    margin: 0px auto;
    height: 100vh;
    margin: 0px;
    grid-gap: 10px;
  }
  
  .header {
    grid-area: header;
  }
  
  .footer {
    grid-area: footer;
  }
  
  h4 {
    margin: 0px;
    text-transform: uppercase;
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
