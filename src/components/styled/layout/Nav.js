import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { IS_LOGGED_IN, GET_USER } from "../../graphql"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

const Nav = ({ className, openMenu }) => {
  const { data, client } = useQuery(IS_LOGGED_IN)
  const { data: user } = useQuery(GET_USER)
  let history = useHistory()

  return (
    <div className={className}>
      <nav>
        <ul>
          {data.isLoggedIn && user ? (
            <>
              <li className='greeting'>
                <p>Welcome back, {user.user.username}</p>
              </li>
              <li>
                <div>
                  <Link to='/feed'>My Graphs</Link>
                </div>
              </li>
              <li>
                <div>
                  <button onClick={() => openMenu("createdBy")}>
                    Created with GRAPHIX
                  </button>
                </div>
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
                <button onClick={() => openMenu("signUp")}>Sign up</button>
              </li>
              <li>
                <button onClick={() => openMenu("signIn")}>Sign in</button>
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

  @media only screen and (max-width: 600px) {
    .greeting {
      display: none;
    }
  }

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
    position: relative;

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

    :hover {
      color: var(--color-button);
      background-size: 100% 88%;
    }
  }

  button {
    border: none;
    background: none;
    position: relative;
    color: var(--color-heading);
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
