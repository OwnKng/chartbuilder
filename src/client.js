import { ApolloClient, InMemoryCache } from "@apollo/client"
import { HttpLink } from "apollo-link-http"

const link = new HttpLink({ uri: "http://localhost:4000/api" })
const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
})

export default client
