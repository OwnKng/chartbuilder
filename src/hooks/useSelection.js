import { useContext } from "react"
import { SelectionContext } from "./SelectionProvider"

export const useSelection = () => useContext(SelectionContext)
