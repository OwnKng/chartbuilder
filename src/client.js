import { ApolloClient, InMemoryCache } from "@apollo/client"
import { HttpLink } from "apollo-link-http"
import { setContext } from "@apollo/client/link/context"
import { gql } from "@apollo/client"

const link = new HttpLink({ uri: process.env.REACT_APP_DB })
const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token")
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(link),
  resolvers: {},
  cache,
})

const data = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
}

const LOGGEDIN_QUERY = gql`
  query isLoggedIn {
    isLoggedIn
  }
`

cache.writeQuery({
  query: LOGGEDIN_QUERY,
  data: data,
})

export default client
