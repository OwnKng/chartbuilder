import { gql } from "@apollo/client"

export const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`

export const GET_DATA = gql`
  query GetDataset($id: ID!) {
    getDataset(id: $id) {
      _id
      name
      data
    }
  }
`

export const GET_DATASETS = gql`
  query GetDatasets {
    getDatasets {
      name
      _id
    }
  }
`

export const GET_USER = gql`
  query User {
    user {
      username
    }
  }
`
