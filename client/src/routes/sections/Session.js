import React, { Fragment } from 'react'
import { SessionList } from '../../components/session'

const Session = () => {
  return (
    <Fragment>
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell">
          <SessionList />
        </div>
      </div>
    </Fragment>
  )
}

export default Session
