import styled from "styled-components"
import { Button } from "./styled/elements/Button"
import { useState } from "react"
import { useMutation, useApolloClient } from "@apollo/client"
import { IS_LOGGED_IN } from "./graphql/query"
import { SIGNUP } from "./graphql/mutation"
import Modal from "./styled/elements/Modal"
import { CloseButton } from "./styled/elements/CloseButton"
import { Input } from "./styled/elements/Input"
import { useHistory } from "react-router-dom"

const SignUp = ({ className, setOpen = (f) => f }) => {
  const [values, setValues] = useState()
  let history = useHistory()

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const client = useApolloClient()

  const [signUp, { error }] = useMutation(SIGNUP, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp)
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
      <CloseButton onClick={() => setOpen()}>X</CloseButton>
      <div className={className}>
        <h4>Sign Up to graphix</h4>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            signUp({
              variables: {
                ...values,
              },
            })
          }}
        >
          <label htmlFor='email'>Username</label>
          <Input
            id='username'
            name='username'
            type='text'
            onChange={onChange}
          />
          <label htmlFor='email'>Email</label>
          <Input id='email' name='email' type='email' onChange={onChange} />
          <label htmlFor='password'>Password</label>
          <Input
            id='password'
            name='password'
            type='password'
            onChange={onChange}
          />
          <div>
            <Button type='submit'>Sign up</Button>
          </div>
          {error && <p>Invalid credentials</p>}
        </form>
      </div>
    </Modal>
  )
}

export default styled(SignUp)`
  h4 {
    padding-bottom: 2rem;
    text-align: center;
  }

  label {
    display: block;
  }
`
