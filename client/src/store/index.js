import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import persistState from 'redux-localstorage'
// import { createEpicMiddleware } from 'redux-observable'
// import { includes } from 'lodash'

import appReducer from '../reducers'

// const epicMiddleware = createEpicMiddleware(rootEpic)
const loggerMiddleware = createLogger({
  collapsed: 'true'
})

const getComposer = env =>
  env === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

const getComposeEnhancer = (env, middleware) =>
  getComposer(env)(
    applyMiddleware(...middleware)
    // persistState()
  )

function configureStore() {
  let middleware = []

  const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_STORE') {
      state = undefined
    }
    return appReducer(state, action)
  }

  switch (process.env.NODE_ENV) {
    case 'production':
      middleware = [loggerMiddleware, ...middleware]
      break
    case 'development':
    default:
      middleware = [loggerMiddleware, ...middleware]
      break
  }

  return createStore(
    rootReducer,
    getComposeEnhancer(process.env.NODE_ENV, middleware)
  )
}

export default configureStore
