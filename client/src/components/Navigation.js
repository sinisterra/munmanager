import React from 'react'
import AppBar from 'material-ui/AppBar'
import Headroom from 'react-headroom'

import { Switch, Route, Link } from 'react-router-dom'
import Tabs, { Tab } from 'material-ui/Tabs'

const Navigation = ({ match: { params: { lang, section } } }) => {
  return (
    <Headroom>
      <AppBar position="static">
        <div>
          <h1 className="mdc-typography--title">MUN Manager</h1>
        </div>
        <Tabs value={section}>
          <Tab
            component={Link}
            to={`/app/${lang}/session`}
            value={'session'}
            label={'session'}
          />
          <Tab
            component={Link}
            to={`/app/${lang}/debate`}
            value={'debate'}
            label={'debate'}
          />
          <Tab
            component={Link}
            to={`/app/${lang}/journal`}
            value={'journal'}
            label={'journal'}
          />
          <Tab
            component={Link}
            to={`/app/${lang}/settings`}
            value={'settings'}
            label={'settings'}
          />
        </Tabs>
      </AppBar>
    </Headroom>
  )
}

const WithSection = () => (
  <Switch>
    <Route path={'/app/:lang/:section'} component={Navigation} />
  </Switch>
)

export default WithSection
