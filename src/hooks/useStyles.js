import { useContext } from "react"
import { StylesContext } from "./StylesProvider"

export const useStyles = () => useContext(StylesContext)
