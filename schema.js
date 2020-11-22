
// const {gql} = require('apollo-server');
import {gql} from 'apollo-server';

// The GraphQL schema
export const typeDefs = gql`
  type Query {
    bookById(id: ID): Book
    allBooks: [Book]
  }
  
  type Book {
    id: ID
    name: String
    pageCount: Int
    author: Author
  }
  
  type Author {
    id: ID
    firstName: String
    lastName: String
  }
`;