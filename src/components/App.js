import Pages from "./pages/index"
import { GlobalStyles } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { darkMode, lightMode } from "../components/styled/utilities"
import { useSelection } from "../hooks"

const App = () => {
  const { theme } = useSelection()
  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkMode : lightMode}>
        <GlobalStyles />
        <Pages />
      </ThemeProvider>
    </>
  )
}

export default App
