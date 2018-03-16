import {
  pipe,
  over,
  lensPath,
  mergeAll,
  set,
  not,
  omit,
  view,
  values,
  filter,
  propEq,
  length
} from 'ramda'
import shortId from 'shortid'
const module = type => `munmanager/roster/${type}`

export const ROSTER_LOAD = module`ROSTER_LOAD`
export const ROSTER_UPDATE = module`ROSTER_UPDATE`
export const ROSTER_ADD = module`ROSTER_ADD`
export const ROSTER_DELETE = module`ROSTER_DELETE`
export const ROSTER_TOGGLE_ACTIVE = module`ROSTER_TOGGLE_ACTIVE`
export const ROSTER_TOGGLE_MEMBER = module`ROSTER_TOGGLE_MEMBER`

export const actions = {
  setRoster: roster => ({ type: ROSTER_LOAD, payload: { roster } }),
  rosterEdit: entry => ({ type: ROSTER_UPDATE, payload: { entry } }),
  rosterAdd: entry => ({ type: ROSTER_ADD, payload: { entry } }),
  toggleActive: code => ({ type: ROSTER_TOGGLE_ACTIVE, payload: { code } }),
  toggleStatus: code => ({ type: ROSTER_TOGGLE_MEMBER, payload: { code } })
}

const getRoster = pipe(view(lensPath(['roster', 'byCode'])), values)
const getActives = pipe(getRoster, filter(propEq('active', true)))
const getMembers = pipe(getActives, filter(propEq('member', true)))
const getObservers = pipe(getActives, filter(propEq('member', false)))
const getActiveCount = pipe(getActives, length)
const getObserverCount = pipe(getObservers, length)
const getMemberCount = pipe(getMembers, length)

export const selectors = {
  getRoster,
  getActives,
  getMembers,
  getObservers,
  getActiveCount,
  getObserverCount,
  getMemberCount
}

const initialState = {
  byCode: {}
}

const baseEntry = {
  name: '',
  active: false,
  member: false,
  img: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ROSTER_DELETE:
      return over(lensPath(['byCode']), omit([action.payload.code]), state)
    case ROSTER_TOGGLE_MEMBER:
      return over(
        lensPath(['byCode', action.payload.code, 'member']),
        not,
        state
      )
    case ROSTER_TOGGLE_ACTIVE:
      return over(
        lensPath(['byCode', action.payload.code, 'active']),
        not,
        state
      )
    case ROSTER_ADD:
      const code = shortId.generate()
      return set(
        lensPath(['byCode', code]),
        { ...baseEntry, code, ...action.payload.entry },
        state
      )
    case ROSTER_UPDATE:
      return pipe(
        over(lensPath(['byCode', action.payload.entry.code]), e =>
          mergeAll([baseEntry, e, action.payload.entry])
        )
      )(state)
    case ROSTER_LOAD:
      return state
    default:
      return state
  }
}

export default reducer
