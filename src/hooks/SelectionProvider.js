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
    reordered: false,
    label: "country",
    theme: "dark",
    title: "Chart title",
    subtitle: "Subtitle",
    palette: "default",
  })

  const updateSelections = (value) => {
    const key = Object.keys(value).toString()
    let newSelections

    if (key === "data") {
      newSelections = {
        ...value,
        theme: selections.theme,
        palette: selections.palette,
      }
    } else if (key === "geometry") {
      newSelections = {
        ...selections,
        ...value,
        x: false,
        y: false,
        label: false,
        color: "none",
      }
    } else {
      newSelections = { ...selections, ...value }
    }
    setSelection(newSelections)
  }

  return (
    <SelectionContext.Provider
      value={{ ...selections, updateSelections, setSelection, selections }}
    >
      {children}
    </SelectionContext.Provider>
  )
}
