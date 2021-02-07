import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { IS_LOGGED_IN, GET_USER } from "../../graphql"
import { useHistory } from "react-router-dom"

const Nav = ({ className, openSignUp = (f) => f, openSignIn = (f) => f }) => {
  const { data, client } = useQuery(IS_LOGGED_IN)
  const { data: user } = useQuery(GET_USER)
  let history = useHistory()

  return (
    <div className={className}>
      <nav>
        <ul>
          {data.isLoggedIn && user && (
            <li>
              <p>Welcome back, {user.user.username}</p>
            </li>
          )}
          {data.isLoggedIn ? (
            <>
              <li>
                <a href='/'>Chart Feed</a>
              </li>
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

export default styled(Nav)`
  color: var(--color-paragraph);

  ul {
    display: flex;
  }

  li {
    list-style-type: none;

    padding: 0 10px;
  }

  p {
    color: var(--color-heading);
    margin: 0px;
  }

  a {
    text-decoration: none;
    font-weight: normal;
    color: var(--color-heading);
    :hover {
      color: var(--color-button);
    }
  }

  button {
    border: none;
    background: none;
    color: var(--color-heading);
    cursor: pointer;
    :focus {
      outline: none;
    }
    :hover {
      color: var(--color-button);
    }
  }
`
