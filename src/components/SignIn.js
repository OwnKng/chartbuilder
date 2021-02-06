import styled from "styled-components"
import { Button } from "./styled/elements/Button"
import { useState } from "react"
import { useMutation, useApolloClient, useQuery } from "@apollo/client"
import { IS_LOGGED_IN } from "./graphql/query"
import { SIGNIN } from "./graphql/mutation"

const SignIn = ({ className, setOpen = (f) => f }) => {
  const [values, setValues] = useState()

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const client = useApolloClient()
  const { data } = useQuery(IS_LOGGED_IN)

  const [signIn, { error }] = useMutation(SIGNIN, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signIn)
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: true,
        },
      })
      setOpen()
    },
  })

  return (
    <div className={className}>
      <h4>Login</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          signIn({
            variables: {
              ...values,
            },
          })
        }}
      >
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' type='text' onChange={onChange} />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={onChange}
        />
        <div>
          <Button type='submit'>SignIn</Button>
        </div>
        {error && <p>Invalid credentials</p>}
      </form>
    </div>
  )
}

export default styled(SignIn)`
  position: absolute;
  top: 0px;
  background: var(--color-foreground);
  color: var(--color-paragraph);
  margin: 0px auto;
  padding: 2rem;
  width: 80%;
  max-width: 400px;
  z-index: 1;

  label {
    display: block;
  }

  input {
    padding: 0.5rem 0;
    width: 90%;
  }
`
