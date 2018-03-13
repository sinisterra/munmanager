import React, { Fragment } from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import moment from 'moment'

const SessionsPrevious = ({ sessions = [] }) => (
  <div>
    <List />
  </div>
)

const SessionsAgenda = ({
  sessionDays = [
    {
      day: moment(),
      sessions: [
        {
          index: 1,
          startDate: moment(),
          endDate: moment()
        },
        {
          index: 2,
          startDate: moment(),
          endDate: moment()
        },
        {
          index: 3,
          startDate: moment(),
          endDate: moment()
        }
      ]
    }
  ]
}) => (
  <div>
    <List>
      {sessionDays.map(({ day, sessions }, i) => (
        <Fragment key={i}>
          <h2 className="mdc-typography--subheading2">
            {day.format('dddd M YYYY')}
          </h2>
          {sessions.map((s, d) => (
            <ListItem>
              <Avatar>{s.index}</Avatar>
              <ListItemText primary={`Session ${s.index}`} />
            </ListItem>
          ))}
        </Fragment>
      ))}
    </List>
  </div>
)
const SessionList = ({ activeTab = 'agenda' }) => {
  return (
    <Paper>
      <Tabs value={activeTab}>
        <Tab value="agenda" label="Agenda" />
        <Tab value="previous" label="Previas" />
      </Tabs>
      <Divider />
      <div style={{ height: 56 * 8, maxHeight: '100vh', overflowY: 'auto' }}>
        {activeTab === 'agenda' && <SessionsAgenda />}
        {activeTab === 'previous' && <SessionsPrevious />}
      </div>
    </Paper>
  )
}

export default SessionList
