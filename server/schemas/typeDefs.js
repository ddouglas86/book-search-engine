const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input inputBook {
    authors: [String]
    title: String
    bookId: ID!
    description: String
    image: String
    link: String
  }
  type Auth {
    token: String
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: inputBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;