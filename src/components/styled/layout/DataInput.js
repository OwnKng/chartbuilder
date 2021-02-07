import styled from "styled-components"
import { Button } from "../elements/Button"
import { useMutation } from "@apollo/client"
import { CREATEDATASET, GET_DATASETS } from "../../graphql"
import { useState } from "react"
import Modal from "../elements/Modal"
import { CloseButton } from "../elements/CloseButton"

const DataInput = ({ className, toggle = (f) => f }) => {
  const [validJSON, setValid] = useState()
  const [data, setData] = useState({
    data: "",
    name: "",
  })

  const [createDataset, { error }] = useMutation(CREATEDATASET, {
    onCompleted: (data) => {
      toggle()
    },
    update(cache, { data: { createDataset } }) {
      const { getDatasets } = cache.readQuery({ query: GET_DATASETS })
      cache.writeQuery({
        query: GET_DATASETS,
        data: { getDatasets: getDatasets.concat([createDataset]) },
      })
    },
  })

  const handleJSON = (event) => {
    let obj
    try {
      obj = JSON.parse(event.target.value)
      setData({
        ...data,
        data: JSON.stringify(obj, undefined, 4),
      })
      setValid(true)
    } catch (err) {
      setData({
        ...data,
        data: event.target.value,
      })
      setValid(false)
    }
  }

  return (
    <Modal>
      <CloseButton onClick={() => toggle()}>X</CloseButton>
      <div className={className}>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            if (validJSON) {
              createDataset({
                variables: {
                  ...data,
                },
              })
            }
          }}
        >
          <h4>Add data</h4>
          <div>
            <label className='textLabel' htmlFor='dataName'>
              Name of dataset
            </label>
            <input
              className='nameInput'
              id='dataName'
              name='name'
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
            />
          </div>
          <div>
            <label className='textLabel' htmlFor='dataInput'>
              Paste data
            </label>
            <textarea
              id='dataInput'
              name='data'
              value={data.data}
              onChange={handleJSON}
            />
            {validJSON === false ? (
              <p>Please enter valid JSON data</p>
            ) : (
              <p></p>
            )}
          </div>
          <Button type='submit'>Add new data</Button>
        </form>
      </div>
    </Modal>
  )
}

export default styled(DataInput)`
  form {
    padding: 2rem;
    color: var(--color-paragraph);
    display: flex;
    flex-direction: column;
    justify-items: space-around;
  }

  .nameInput {
    width: 100%;
    padding: 0.5rem 0;
  }

  textarea {
    width: 100%;
    height: 200px;
    resize: none;
  }

  .textLabel {
    display: block;
  }
`
