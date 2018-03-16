import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import './index.css'
import { ApolloProvider } from 'react-apollo'
import configureStore from './store'
import client from './apollo/client'
import { Provider } from 'react-redux'

const store = configureStore()

const theme = createMuiTheme()

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <AppRoutes />
      </MuiThemeProvider>
    </ApolloProvider>
  </Provider>
)

export default App
