import styled from "styled-components"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const ShareLink = ({ className, id }) => {
  const linkRef = useRef(null)
  const [copy, setCopy] = useState("")

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkRef.current.href)
    setCopy("Copied!")
  }

  return (
    <div className={className}>
      <h5>Sharing link created!</h5>
      <Link ref={linkRef} to={`/${id}`}>
        http://localhost:3000/{id}
      </Link>
      <button style={{ display: "block" }} onClick={() => copyToClipboard()}>
        Copy to clipboard
      </button>
      <p>{copy}</p>
    </div>
  )
}

export default styled(ShareLink)`
  white-space: wrap;
  margin-top: 10px;
  a {
    color: var(--color-accent);
    word-wrap: break-word;
  }
  h5 {
    margin: 0px auto;
  }

  button {
    margin: 10px 0px;
    padding: 0.5rem 0.5rem;
    border: none;
    border-radius: 4px;
  }
`
