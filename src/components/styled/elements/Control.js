import styled from "styled-components"
import { motion } from "framer-motion"

const Controls = ({ className, children, title, position, setPosition }) => {
  const variants = {
    open: { width: "15vw" },
    closed: { width: "0px" },
    transition: "ease",
  }
  return (
    <div className={className}>
      <div className='title' onClick={setPosition}>
        <h2>{title}</h2>
      </div>
      <motion.div
        variants={variants}
        animate={position ? "open" : "closed"}
        transition='ease'
        className='wrapper'
        initial={false}
      >
        <div className='controls'>{children}</div>
      </motion.div>
    </div>
  )
}

export default styled(Controls)`
  .title {
    position: relative;
  }

  h2 {
    margin: 0px;
    position: absolute;
    top: 10px;
    left: 0;
    writing-mode: vertical-rl;
    text-transform: uppercase;
  }

  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 1fr;
  align-items: self-start;
  overflow: hidden;
  border-left: 3px solid var(--color-background);

  h4 {
    margin: 10px 0px;
  }

  span {
    color: var(--color-paragraph);
    font-weight: bold;
    margin: 20px 0px;
  }

  .wrapper {
    overflow: hidden;
    white-space: nowrap;
  }

  .controls {
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`
