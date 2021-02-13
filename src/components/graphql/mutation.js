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

export const DELETE_DATASET = gql`
  mutation DeleteDataset($id: ID!) {
    deleteDataset(id: $id)
  }
`

export const DELETE_GRAPH = gql`
  mutation DeleteGraph($id: ID!) {
    deleteGraph(id: $id)
  }
`

export const SAVEGRAPH = gql`
  mutation CreateGraph(
    $data: String!
    $x: String!
    $y: String!
    $geometry: String!
    $color: String
    $reordered: Boolean
    $title: String
    $subtitle: String
    $theme: String!
    $palette: String!
  ) {
    createGraph(
      input: {
        data: $data
        x: $x
        y: $y
        geometry: $geometry
        color: $color
        reordered: $reordered
        title: $title
        subtitle: $subtitle
        theme: $theme
        palette: $palette
      }
    ) {
      _id
      data
      x
      y
      geometry
      color
      reordered
      title
      subtitle
      theme
      palette
    }
  }
`
