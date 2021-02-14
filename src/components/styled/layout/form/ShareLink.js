import styled from "styled-components"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const ShareLink = ({ className, id }) => {
  const linkRef = useRef(null)
  const [copy, setCopy] = useState("")

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkRef.current.href)
    setCopy("Copied!")
  }

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition='easeIn'
      className={className}
    >
      <h5>Sharing link created!</h5>
      <Link ref={linkRef} to={`/chart${id}`}>
        http://localhost:3000/chart{id}
      </Link>
      <button onClick={() => copyToClipboard()}>Copy to clipboard</button>
      <p>{copy}</p>
    </motion.div>
  )
}

export default styled(ShareLink)`
  text-align: center;
  margin: 10px 0px;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--color-background);

  a {
    word-wrap: break-word;
    text-decoration: none;
    font-weight: normal;
    color: var(--color-button);
    position: relative;

    :before {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--color-button);
      visibility: hidden;
      transition: all 0.2s ease-in-out;
    }

    :hover:before {
      visibility: visible;
      width: 100%;
    }

    :hover {
      color: var(--color-button);
      background-size: 100% 88%;
    }
  }

  h5 {
    margin: 0px auto;
  }

  button {
    text-align: center;
    display: block;
    margin: 10px auto;
    padding: 0.5rem 0.5rem;
    border: 1px solid var(--color-paragraph);
    border-radius: 4px;
    background: var(--color-foreground);
    color: var(--color-heading);
    transition: all 0.2s ease-in-out;

    :hover {
      border: 1px solid var(--color-button);
    }
  }

  p {
    margin: 0px;
  }
`
