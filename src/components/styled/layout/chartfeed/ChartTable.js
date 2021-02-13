import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/client"
import { GET_GRAPHICS, DELETE_GRAPH } from "../../../graphql"
import StyledLink from "../../elements/StyledLink"
import { elevation } from "../../utilities"

const ChartTable = ({ className }) => {
  const { data, loading, error, refetch } = useQuery(GET_GRAPHICS)
  const [deleted, { error: deleteError }] = useMutation(DELETE_GRAPH, {
    onCompleted: () => {
      refetch()
    },
  })

  if (loading) return <p>Loading</p>

  if (error) return <p>error</p>

  return (
    <div className={className}>
      {data.getCharts.length ? (
        data.getCharts.map((d) => (
          <div className='dataRow' key={`chart-${d._id}`}>
            <p>{d.title || "Unnamed chart"}</p>
            <div className='controls'>
              <StyledLink to={`chart${d._id}`}>View chart</StyledLink>
              <div>
                <button
                  onClick={() =>
                    deleted({
                      variables: {
                        id: d._id,
                      },
                    })
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No graphs found</p>
      )}
    </div>
  )
}

export default styled(ChartTable)`
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
