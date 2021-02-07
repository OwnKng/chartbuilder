import { gql } from "@apollo/client"

export const SIGNIN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password })
  }
`

export const SIGNUP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(input: { username: $username, email: $email, password: $password })
  }
`

export const CREATEDATASET = gql`
  mutation CreateDataset($name: String!, $data: String!) {
    createDataset(input: { name: $name, data: $data }) {
      data
      public
      createdBy
    }
  }
`
