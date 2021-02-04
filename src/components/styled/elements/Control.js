import styled from "styled-components"
import { motion } from "framer-motion"

const Controls = ({ open, className, children }) => {
  const variants = {
    open: { height: "400px" },
    closed: { height: "0px" },
    transition: "ease",
  }
  return (
    <div className={className}>
      <motion.div
        variants={variants}
        animate={open ? "open" : "closed"}
        initial={false}
        transition='ease'
        className='wrapper'
      >
        <div className='controls'>{children}</div>
      </motion.div>
    </div>
  )
}

export default styled(Controls)`
  overflow-y: scroll;
  max-height: 400px;

  h4 {
    margin: 10px 0px;
  }

  span {
    color: var(--color-paragraph);
    font-weight: bold;
    margin: 20px 0px;
  }

  .controls {
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
`
