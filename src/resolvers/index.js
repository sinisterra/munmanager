const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    event: (_, { id }) => ({
      id,
      name: 'Event id'
    })
  }
}

module.exports = resolvers
