import styled from "styled-components"
import { CloseButton } from "../elements/CloseButton"
import { Button } from "../elements/Button"
import { useType, useSelection } from "../../../hooks"

const DataBrowser = ({ className, close = (f) => f }) => {
  const { data } = useSelection()
  let { types } = useType(data)
  const slice = data.slice(0, 5)

  return (
    <div className={className}>
      <div className='inner'>
        <CloseButton onClick={() => close()}>X</CloseButton>
        <h2>Edit Data</h2>
        <div className='tableWrapper'>
          <table>
            <tr>
              {types.map((type) => (
                <td>
                  <input value={type.variable} />
                  <button>Delete</button>
                </td>
              ))}
            </tr>
            <tr>
              {types.map((type) => (
                <td>
                  <select>
                    <option>number</option>
                    <option>string</option>
                    <option>delete</option>
                  </select>
                </td>
              ))}
            </tr>
            {slice.map((row) => (
              <tr>
                {types.map(({ variable }) => (
                  <td>{row[variable]}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>

        <Button>Update</Button>
      </div>
      <div className='backdrop'></div>
    </div>
  )
}

export default styled(DataBrowser)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    position: relative;
    background: var(--color-foreground);
    color: var(--color-paragraph);
    padding: 20px;
    width: 95%;
    max-width: 800px;
    min-width: 320px;
    z-index: 1;
    border-radius: 10px;
    background: var(--color-background);
  }

  td {
    min-width: 100px;
  }

  .tableWrapper {
    overflow-y: scroll;
  }

  table {
    width: 100%;
    white-space: nowrap;
  }

  select {
    display: block;
    width: 90%;
  }

  td {
    max-width: 50px;
    overflow: hidden;
  }

  .backdrop {
    position: fixed;
    top: 0px;
    left: 0px;
    pointer-events: all;
    background: linear-gradient(
      142.24deg,
      rgba(0, 8, 15, 0.9) 10%,
      rgba(93, 253, 202, 0.4) 250%
    );
    backdrop-filter: blur(3px);
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }
`
