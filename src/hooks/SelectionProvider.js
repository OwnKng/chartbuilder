import React, { createContext, useState } from "react"
import { econ } from "../data/index"

export const SelectionContext = createContext()

export default function SelectionProvider({ children }) {
  const [selections, setSelection] = useState({
    data: econ,
    x: "gdpPerCap",
    y: "lifeExpectancy",
    color: "region",
    geometry: "point",
    reorder: false,
  })

  const updateSelections = (value) => {
    const key = Object.keys(value).toString()
    let newSelections

    if (key === "data") {
      newSelections = value
    } else if (key === "geometry") {
      newSelections = {
        ...selections,
        ...value,
        x: false,
        y: false,
        color: false,
      }
    } else {
      newSelections = { ...selections, ...value }
    }
    setSelection(newSelections)
  }

  return (
    <SelectionContext.Provider
      value={{ ...selections, updateSelections, setSelection }}
    >
      {children}
    </SelectionContext.Provider>
  )
}
