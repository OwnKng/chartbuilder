import styled from "styled-components"
import { CloseButton } from "../elements/CloseButton"
import Modal from "../elements/Modal"
import { useQuery } from "@apollo/client"
import { GET_PUBLIC_CHARTS } from "../../graphql"
import { useHistory } from "react-router-dom"

const CreatedBy = ({ className, setOpen }) => {
  const { data, loading, error } = useQuery(GET_PUBLIC_CHARTS)
  const history = useHistory()

  const handleClick = (url) => {
    setOpen()
    history.push(`/chart${url}`)
  }

  if (error) return null

  return (
    <div className={className}>
      <Modal>
        <CloseButton onClick={setOpen}>X</CloseButton>
        <h4>created with Graphix</h4>
        {loading && <p>Loading</p>}
        {error && <p>An error ocurred. Please try again later</p>}
        {data &&
          data.getPublicCharts.map((d) => (
            <div className='exampleRow'>
              <div className='title'>
                <h4>{d.title}</h4>
                <button
                  className='linkButton'
                  onClick={() => handleClick(d._id)}
                >
                  Show me
                </button>
              </div>
              <span>{d.geometry}</span>
            </div>
          ))}
      </Modal>
    </div>
  )
}

export default styled(CreatedBy)`
  h4 {
    padding-bottom: 30px;
  }

  .exampleRow {
    .title {
      display: flex;
      align-items: baseline;
      justify-content: space-between;

      h4 {
        margin: 0px;
        padding: 5px 0px 0px 0px;
      }
    }
    border-top: 1px solid var(--color-selected);
  }

  .linkButton {
    border: none;
    background: none;
    position: relative;
    color: var(--color-button);
    cursor: pointer;
    padding: 2px 0px;

    :focus {
      outline: none;
    }
    :hover {
      color: var(--color-button);
    }

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
  }
`
