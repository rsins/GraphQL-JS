
// const {ApolloServer} = require('apollo-server');
import {ApolloServer} from 'apollo-server';

// The GraphQL schema
import {typeDefs} from './schema.js';

// Import resolvers
import {resolvers} from './resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async({req}) => {
      return null;
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
