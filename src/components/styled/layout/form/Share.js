import Controls from "../../elements/Control"
import { useMutation } from "@apollo/react-hooks"
import { useSelection } from "../../../../hooks"
import { Button } from "../../elements/Button"
import ShareLink from "./ShareLink"
import { Menu } from "../../elements/Menu"
import { SAVEGRAPH, GET_GRAPHICS } from "../../../graphql"
import { Heading } from "../../elements/Heading"
import { motion } from "framer-motion"
import StyledLink from "../../elements/StyledLink"
import { useState, useEffect } from "react"

const ChartShare = ({ open, setOpen }) => {
  const { selections } = useSelection()
  const [reminder, setReminder] = useState(false)

  useEffect(() => {
    setReminder(false)
  }, [selections])

  const [createGraph, { data, error }] = useMutation(SAVEGRAPH, {
    errorPolicy: "all",
    update(cache, { data: { createGraph } }) {
      try {
        const { getCharts } = cache.readQuery({ query: GET_GRAPHICS })
        cache.writeQuery({
          query: GET_GRAPHICS,
          data: {
            getCharts: getCharts.concat([createGraph]),
          },
        })
      } catch {
        cache.writeQuery({
          query: GET_GRAPHICS,
          data: {
            getCharts: [createGraph],
          },
        })
      }
    },
  })

  return (
    <Menu>
      <div className='title' onClick={() => setOpen("share")}>
        <Heading>Share</Heading>
      </div>
      <Controls open={open}>
        <Button
          onClick={() => {
            const required = ["data", "x", "y", "theme", "palette"]
            let keys = Object.keys(selections)
            keys = keys.filter((key) => selections[key] !== false)
            required.every((v) => keys.includes(v))
              ? createGraph({
                  variables: {
                    ...selections,
                    data: JSON.stringify(selections.data),
                  },
                })
              : setReminder(true)
          }}
        >
          Generate Share Link
        </Button>
        {error &&
          error.graphQLErrors.map(({ message }) => (
            <motion.span
              style={{ textAlign: "center", margin: 0 }}
              initial={{ y: -10 }}
              animate={{ y: 0 }}
            >
              {message}
            </motion.span>
          ))}
        {data && <ShareLink id={data.createGraph._id} />}
        {reminder && (
          <span style={{ textAlign: "center" }}>
            Can't save graph until selections are complete. Your graph must have
            an X and Y variable.
          </span>
        )}
        <StyledLink to='/feed'>Manage my graphs</StyledLink>
      </Controls>
    </Menu>
  )
}

export default ChartShare
