import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import SelectionProvider from "./hooks/SelectionProvider"
import StylesProvider from "./hooks/StylesProvider"

ReactDOM.render(
  <SelectionProvider>
    <StylesProvider>
      <App />
    </StylesProvider>
  </SelectionProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
