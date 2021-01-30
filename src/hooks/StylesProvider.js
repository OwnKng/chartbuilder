import React, { createContext, useState } from "react"

export const StylesContext = createContext()

export default function StylesProvider({ children }) {
  const [styles, setStyles] = useState({
    text: {
      fontSize: 11,
      textAnchor: "middle",
    },
  })

  const updateStyles = (value) => {
    setStyles({ ...styles, ...value })
  }

  return (
    <StylesContext.Provider value={{ ...styles, updateStyles }}>
      {children}
    </StylesContext.Provider>
  )
}
