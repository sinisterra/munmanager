import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: '/graphql' })
})

persistCache({
  cache,
  storage: window.localStorage
})

export default client
