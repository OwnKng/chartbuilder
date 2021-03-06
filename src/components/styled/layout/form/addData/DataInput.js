import styled from "styled-components"
import { Button } from "../../../elements/Button"
import { useMutation } from "@apollo/client"
import { CREATEDATASET, GET_DATASETS } from "../../../../graphql"
import { useState } from "react"
import Modal from "../../../elements/Modal"
import { CloseButton } from "../../../elements/CloseButton"
import Papa from "papaparse"
import DataTable from "./DataTable"
import { motion } from "framer-motion"
import StyledLink from "../../../elements/StyledLink"

const DataInput = ({ className, toggle = (f) => f }) => {
  const [data, setData] = useState(false)
  const [title, setTitle] = useState()

  const [createDataset, { error }] = useMutation(CREATEDATASET, {
    errorPolicy: "all",
    onCompleted: (data) => {
      if (data) toggle()
    },
    update(cache, { data: { createDataset } }) {
      const { getDatasets } = cache.readQuery({ query: GET_DATASETS })
      cache.writeQuery({
        query: GET_DATASETS,
        data: { getDatasets: getDatasets.concat([createDataset]) },
      })
    },
  })

  const handleCSV = (event) => {
    let { data, errors } = Papa.parse(event.target.value, {
      header: true,
      dynamicTyping: true,
    })

    if (errors.length) {
      setData(false)
      return null
    }
    setData(data)
  }

  return (
    <Modal maxWidth={800}>
      <CloseButton onClick={() => toggle()}>X</CloseButton>
      <div className={className}>
        <h4>Add data</h4>
        <div className='flex'>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (data && title) {
                createDataset({
                  variables: {
                    data: JSON.stringify(data),
                    name: title,
                  },
                })
              }
            }}
          >
            <label className='textLabel' htmlFor='dataName'>
              Name of dataset
            </label>
            <input
              className='nameInput'
              id='dataName'
              name='name'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <label className='textLabel' htmlFor='dataInput'>
              Paste csv data here
            </label>
            <textarea id='dataInput' name='data' onChange={handleCSV} />
            <Button type='submit'>Add new data</Button>
          </form>
          <div className='preview'>
            <p>preview</p>
            {data ? (
              <DataTable data={data} />
            ) : (
              <span>Awaiting valid CSV data</span>
            )}
          </div>
        </div>
        <div style={{ height: 40 }}>
          {error && (
            <>
              {error.graphQLErrors.map(({ message }) => (
                <motion.span
                  style={{ textAlign: "center", margin: 0 }}
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                >
                  {message}
                </motion.span>
              ))}
              <StyledLink to='/feed'>Manage your datasets</StyledLink>
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default styled(DataInput)`
  padding: 1rem;

  h4 {
    text-align: center;
    margin-bottom: 10px;
  }

  .flex {
    display: flex;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  form {
    color: var(--color-paragraph);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 50%;
  }

  input {
    padding: 0.5rem 0;
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 200px;
    resize: none;
  }

  label {
    display: block;
    text-transform: uppercase;
  }

  .preview {
    min-height: 280px;
    padding: 0 20px;
    flex-grow: 1;
    overflow: scroll;

    p {
      text-transform: uppercase;
      margin: 0px;
    }
  }
`
