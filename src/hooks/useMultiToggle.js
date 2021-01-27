import { useState } from "react"

const useMultToggle = () => {
  const [toggle, setToggle] = useState({
    one: true,
    two: false,
  })
}
