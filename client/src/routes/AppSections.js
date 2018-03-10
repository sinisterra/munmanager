import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from '../components/Navigation'
const Debate = () => <div>Sección de debate</div>
const Settings = () => <div>App Settings</div>

const SectionRoutes = ({ match }) => (
  <div>
    <Navigation />
    <Switch>
      <Route path={'/app/:lang/debate'} component={Debate} />
      <Route path={'/app/:lang/settings'} component={Settings} />
      <Redirect to={`${match.url}/debate`} />
    </Switch>
  </div>
)

const WithLang = props => (
  <div>
    <Switch>
      <Route path="/app/:lang" component={SectionRoutes} />
    </Switch>
  </div>
)

const AppSections = () => (
  <div>
    <Switch>
      <Route path={'/app/es'} component={WithLang} />
      <Route path={'/app/en'} component={WithLang} />
      <Route path={'/app/fr'} component={WithLang} />
      <Redirect to={'/app/es'} />
    </Switch>
  </div>
)

export default AppSections
