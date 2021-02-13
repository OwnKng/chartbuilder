import { useQuery, useMutation } from "@apollo/client"
import { GET_DATASETS, DELETE_DATASET } from "../../../graphql"
import styled from "styled-components"
import { elevation } from "../../utilities"

const ChartDataSets = ({ className }) => {
  const { data, loading, error, refetch } = useQuery(GET_DATASETS)

  const [deleteDataset, { error: deleteError }] = useMutation(DELETE_DATASET, {
    onCompleted: () => {
      refetch()
    },
  })

  if (loading) return <p>Loading</p>

  if (error) return <p>error</p>

  return (
    <div className={className}>
      {data.getDatasets.length ? (
        data.getDatasets.map((d) => (
          <div className='dataRow' key={`dataset-${d._id}`}>
            <p>{d.name}</p>
            <button
              onClick={() => {
                deleteDataset({
                  variables: {
                    id: d._id,
                  },
                })
              }}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No datasets found</p>
      )}
    </div>
  )
}

export default styled(ChartDataSets)`
  .dataRow {
    display: flex;
    padding: 10px 5px;
    justify-content: space-between;
    margin-bottom: 6px;
    background: var(--color-foreground);
    ${elevation[1]}
  }

  p {
    margin: 0px;
  }

  button {
    margin-left: 10px;
  }


  .controls {
    display: flex;  
  }

  button {
    border: none;
    background: none;
    position: relative;
    color: var(--color-button);
    cursor: pointer;
    padding: 2px 0px;

    :focus {
      outline: none;
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
`
