import { gql } from "@apollo/client"

export const SIGNIN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password })
  }
`
