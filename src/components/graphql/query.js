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
      public
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

export const GET_GRAPHICS = gql`
  query GetGraphs {
    getCharts {
      _id
      title
      geometry
    }
  }
`

export const GETCHART = gql`
  query GetChart($id: ID!) {
    selection(id: $id) {
      _id
      data
      geometry
      x
      y
      geometry
      color
      reordered
      title
      theme
      subtitle
    }
  }
`

export const GET_PUBLIC_CHARTS = gql`
  query GetPublicCharts {
    getPublicCharts {
      _id
      title
      geometry
    }
  }
`
