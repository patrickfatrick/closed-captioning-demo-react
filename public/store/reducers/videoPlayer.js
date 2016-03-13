import {Map} from 'immutable'

const initialState = Map({
  captionsOn: false,
  scroll: false,
  timestamp: 0,
  player: null,
  captionWindow: null
})

const videoPlayer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CAPTIONS_ON':
      return state.set('captionsOn', action.bool)
    case 'SET_TIMESTAMP':
      return state.set('timestamp', action.seconds)
    case 'SET_SCROLL':
      return state.set('scroll', action.bool)
    case 'SET_PLAYER':
      return state.set('player', action.node)
    case 'SET_CAPTION_WINDOW':
      return state.set('captionWindow', action.node)
    default:
      return state
  }
}

export default videoPlayer
