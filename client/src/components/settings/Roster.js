import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { actions as rosterActions, selectors } from '../../reducers/roster'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const defaultInput = {
  name: ''
}

class Roster extends React.Component {
  state = {
    editing: false,
    input: defaultInput
  }

  handleChange = property => e =>
    this.setState({
      input: { ...this.state.input, [property]: e.target.value }
    })

  save = () => {
    if (this.state.editing) {
      this.props.rosterEdit(this.state.input)
    } else {
      this.props.rosterAdd({ ...this.state.input, active: true, member: true })
    }
    this.setState({ input: defaultInput, editing: false })
  }

  loadEntry = entry => {
    this.setState({ input: entry, editing: true })
  }

  render() {
    const { input } = this.state
    const {
      rosterList = [],
      toggleActive,
      toggleStatus,
      activeCount,
      memberCount,
      observerCount
    } = this.props
    return (
      <Fragment>
        <TextField
          label="Delegation name"
          name="name"
          value={input.name}
          onChange={this.handleChange('name')}
        />
        <Button variant="raised" color="primary" onClick={this.save}>
          Guardar
        </Button>
        <h2 className="mdc-typography--title">
          Roster
          <span className="mdc-typography--caption">
            {'  '}
            {activeCount} active, {memberCount} members, {observerCount}{' '}
            observers
          </span>
        </h2>
        <List dense style={{ maxHeight: 56 * 5, overflowY: 'auto' }}>
          {rosterList.map(entry => {
            const { code, name, active } = entry
            return (
              <ListItem
                button
                key={code}
                onClick={() => {
                  toggleActive(code)
                  toggleStatus(code)
                }}>
                <Checkbox checked={active} />
                <ListItemText
                  primary={name}
                  secondary={active ? 'Activo' : 'Inactivo'}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => {
                      this.loadEntry(entry)
                    }}>
                    <Icon>edit</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>
      </Fragment>
    )
  }
}

export default compose(
  connect(
    state => ({
      roster: state.roster,
      rosterList: selectors.getRoster(state),
      memberCount: selectors.getMemberCount(state),
      activeCount: selectors.getActiveCount(state),
      observerCount: selectors.getObserverCount(state)
    }),
    rosterActions
  )
)(Roster)
