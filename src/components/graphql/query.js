import { gql } from "@apollo/client"

export const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`
