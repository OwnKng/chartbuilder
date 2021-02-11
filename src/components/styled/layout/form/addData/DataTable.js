import styled from "styled-components"
import { useType } from "../../../../../hooks"
import { Table } from "../../../elements/Table"
import { motion } from "framer-motion"

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}

const DataTable = ({ data, className }) => {
  let { types } = useType(data)
  const slice = data.slice(0, 5)
  if (!types) return null

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      className={className}
    >
      <Table>
        <thead>
          <tr>
            {types.map(({ variable }) => (
              <th>{variable}</th>
            ))}
          </tr>
          <tr className='types'>
            {types.map(({ type }) => (
              <td>{type.substring(0, 3)}.</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {slice.map((s) => (
            <tr>
              {types.map(({ type, variable }) => {
                return type === "number" ? (
                  <td>
                    {s[variable]
                      ? `${Math.round(s[variable] * 100) / 100}`
                      : `-`}
                  </td>
                ) : (
                  <td>{`${s[variable]}`}</td>
                )
              })}
            </tr>
          ))}
          <tr>
            {types.map(() => (
              <td>...</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </motion.div>
  )
}

export default styled(DataTable)`
  overflow-x: scroll;
  max-width: 100%;

  th,
  td {
    min-width: 30px;
    max-width: 50px;
    overflow: hidden;
    padding: 0px 5px;
  }

  table {
    font-size: 0.9rem;
  }

  .types {
    opacity: 0.5;
    font-size: 0.8rem;
  }
`
