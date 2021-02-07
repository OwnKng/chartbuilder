import styled from "styled-components"
import { Button } from "./styled/elements/Button"
import { useState } from "react"
import { useMutation, useApolloClient } from "@apollo/client"
import { IS_LOGGED_IN } from "./graphql/query"
import { SIGNIN } from "./graphql/mutation"
import Modal from "./styled/elements/Modal"
import { CloseButton } from "./styled/elements/CloseButton"
import { Input } from "./styled/elements/Input"
import { useHistory } from "react-router-dom"

const SignIn = ({ className, setOpen = (f) => f }) => {
  const [values, setValues] = useState()
  let history = useHistory()

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const client = useApolloClient()

  const [signIn, { error }] = useMutation(SIGNIN, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signIn)
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: true,
        },
      })
      history.push("/")
      history.go()
    },
  })

  return (
    <Modal>
      <form
        className={className}
        onSubmit={(event) => {
          event.preventDefault()
          signIn({
            variables: {
              ...values,
            },
          })
        }}
      >
        <h4>Sign in to graphix</h4>
        <CloseButton onClick={setOpen}>X</CloseButton>
        <label htmlFor='email'>Email</label>
        <Input id='email' name='email' type='text' onChange={onChange} />
        <label htmlFor='password'>Password</label>
        <Input
          id='password'
          name='password'
          type='password'
          onChange={onChange}
        />
        <div>
          <Button type='submit'>Sign in</Button>
        </div>
        {error && <p>Invalid credentials</p>}
      </form>
    </Modal>
  )
}

export default styled(SignIn)`
  h4 {
    padding-bottom: 2rem;
    text-align: center;
  }

  label {
    display: block;
    color: var(--color-heading);
    text-transform: uppercase;
  }

  margin-bottom: 30px;
`
