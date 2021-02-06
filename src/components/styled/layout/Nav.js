import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { IS_LOGGED_IN } from "../../graphql/query"
import { useHistory } from "react-router-dom"

const Nav = ({ className, openSignUp = (f) => f, openSignIn = (f) => f }) => {
  const { data, client } = useQuery(IS_LOGGED_IN)
  let history = useHistory()

  return (
    <div className={className}>
      <nav>
        <ul>
          <li>
            <a href='/'>Chart Feed</a>
          </li>
          {data.isLoggedIn ? (
            <>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("token")
                    client.watchQuery({
                      query: IS_LOGGED_IN,
                      data: { isLoggedIn: false },
                    })
                    history.push("/")
                    history.go()
                  }}
                >
                  Sign out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={() => openSignUp()}>Sign up</button>
              </li>
              <li>
                <button onClick={() => openSignIn()}>Sign in</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

/* 

*/

export default styled(Nav)`
  color: var(--color-paragraph);

  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    font-weight: bold;
    padding: 0 0.5rem;
  }
`
