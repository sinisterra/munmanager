const { GraphQLServer, PubSub } = require('graphql-yoga')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    pubsub
  }
})

const options = {
  port: process.env.PORT || 4000,
  endpoint: '/graphql',
  playground: '/playground'
}

server.start(options, () => {
  console.log('Server started!')
})
