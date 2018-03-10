const typeDefs = `

  type Event {
    id: ID!
  }
  
  type Query {
    hello: String
    event(id: ID): Event
  }

`

module.exports = typeDefs
