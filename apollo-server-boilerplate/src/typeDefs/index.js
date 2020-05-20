import { gql } from 'apollo-server'

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    user: User!
  }
`

export default typeDefs
