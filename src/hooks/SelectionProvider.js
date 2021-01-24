import React, { createContext, useState } from "react"
import { econ } from "../data/index"

export const SelectionContext = createContext()

export default function SelectionProvider({ children }) {
  const [selections, setSelections] = useState({
    data: econ,
    x: "gdpPerCap",
    y: "lifeExpectancy",
    color: "region",
    geometry: "point",
  })

  const updateSelections = (value) => {
    const newSelections = { ...selections, ...value }
    setSelections(newSelections)
  }

  return (
    <SelectionContext.Provider value={{ ...selections, updateSelections }}>
      {children}
    </SelectionContext.Provider>
  )
}
