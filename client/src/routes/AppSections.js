import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { Debate, Settings, Stats, Voting, Journal, Session } from './sections'

const SectionRoutes = ({ match }) => (
  <div style={{ backgroundColor: '#e0e0e0', height: '100vh' }}>
    <Navigation />
    <div className="mdc-layout-grid" style={{ maxWidth: 1440 }}>
      <Switch>
        <Route path={'/app/:lang/debate'} component={Debate} />
        <Route path={'/app/:lang/session'} component={Session} />
        <Route path={'/app/:lang/settings'} component={Settings} />
        <Route path={'/app/:lang/journal'} component={Journal} />
        <Route path={'/app/:lang/stats'} component={Stats} />
        <Route path={'/app/:lang/voting'} component={Voting} />
        <Redirect to={`${match.url}/debate`} />
      </Switch>
    </div>
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
