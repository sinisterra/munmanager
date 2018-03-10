import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Splash from '../Splash'
import AppSections from './AppSections'

const AppRoutes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/app/:lang" component={AppSections} />
      <Redirect from="/app" to="/app/es" />
    </Switch>
  </div>
)

const WithAppRoutes = () => (
  <div>
    <Router>
      <AppRoutes />
    </Router>
  </div>
)

export default WithAppRoutes
