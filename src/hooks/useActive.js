import { useSelection } from "./useSelection"

export const useActive = (key) => {
  let { selections } = useSelection()

  const getActive = (d) => d[key]

  return { active: getActive(selections, key) }
}
