import {List} from 'immutable'

const captions = (state = List([]), action) => {
  function setActiveCaption (state, timestamp) {
    const cur = state.findEntry((caption) => {
      return caption.get('active')
    })[0]
    const next = state.findEntry((caption) => {
      return (timestamp >= caption.get('start') && timestamp < caption.get('end'))
    })[0]

    if (cur === next) return state
    return state.setIn([cur, 'active'], false)
    .setIn([next, 'active'], true)
  }

  switch (action.type) {
    case 'SET_CAPTIONS':
      return List(action.captions)
    case 'SET_ACTIVE_CAPTION':
      return setActiveCaption(state, action.timestamp)
    default:
      return state
  }
}

export default captions
