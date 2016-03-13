import {combineReducers} from 'redux'
import captions from './captions'
import videoPlayer from './videoPlayer'

const reducers = combineReducers({
  captions,
  videoPlayer
})

export default reducers
