import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import './index.css'
import { ApolloProvider } from 'react-apollo'
import client from './apollo/client'

const theme = createMuiTheme()

const App = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <AppRoutes />
    </MuiThemeProvider>
  </ApolloProvider>
)

export default App
