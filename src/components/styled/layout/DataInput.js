import styled from "styled-components"
import { Button } from "../elements/Button"

const DataInput = ({ className, toggle = (f) => f }) => {
  return (
    <div className={className}>
      <form>
        <h4>Add data</h4>
        <div>
          <label className='textLabel' htmlFor='dataInput'>
            Paste data
          </label>
          <textarea id='dataInput' />
        </div>
        <div>
          <label className='textLabel' htmlFor='dataName'>
            Name of dataset
          </label>
          <input id='dataName' />
        </div>
        <div>
          <p>Make data available to</p>
          <input type='radio' id='user' name='available' />
          <label for='user'>Only me</label>
          <input type='radio' id='allUsers' name='available' />
          <label for='allUsers'>All users</label>
        </div>
        <Button
          onClick={() => {
            toggle()
          }}
        >
          Add new data
        </Button>
      </form>
    </div>
  )
}

export default styled(DataInput)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(2, 10, 18, 0.4);
  backdrop-filter: blur(2px);

  form {
    position: relative;
    padding: 2rem;
    top: 25%;
    left: 25%;
    width: 50vw;
    color: var(--color-paragraph);
    display: flex;
    flex-direction: column;
    justify-items: space-around;
    background: var(--color-foreground);
  }

  textarea {
    width: 100%;
    height: 60px;
    resize: none;
  }

  .textLabel {
    display: block;
  }
`
