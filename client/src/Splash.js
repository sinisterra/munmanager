import React from 'react'
import Paper from 'material-ui/Paper'
import queryString from 'query-string'
import { withRouter, Link } from 'react-router-dom'
import { compose, withProps } from 'recompose'
import Button from 'material-ui/Button'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Splash = ({ data, queryString: { lang = 'es' } }) => (
  <div>
    <div className="mdc-layout-grid" style={{ height: '100vh' }}>
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <div className="text-center">
            <h1 className="mdc-typography--display4 text-center nm-b">
              MUN Manager
            </h1>
            <div className="layout-row layout-align-center">
              <Button color="primary" component={Link} to={'/app/es'}>
                Español
              </Button>
              <Button color="primary" component={Link} to={'/app/en'}>
                English
              </Button>
              <Button color="primary" component={Link} to={'/app/fr'}>
                Francais
              </Button>
            </div>
          </div>
        </div>
        <div className="mdc-layout-grid__cell">
          <Paper>To the left</Paper>
        </div>
        <div className="mdc-layout-grid__cell">
          <Paper>
            {data.hello ? <div>{data.hello}</div> : <div>Esperando...</div>}
          </Paper>
        </div>
      </div>
    </div>
  </div>
)

const withQuery = graphql(gql`
  query Hello {
    hello
  }
`)

const enhance = compose(
  withRouter,
  withProps(({ location: { search } }) => ({
    queryString: queryString.parse(search)
  })),
  withQuery
)

export default enhance(Splash)
