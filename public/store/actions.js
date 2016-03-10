import {getCaptions} from '../services/caption-service'

// Simply turns on captions in the state
export function setCaptionsOn (store, bool) {
  store.dispatch('SET_CAPTIONS_ON', bool)
}

// Gets the caption data and puts 'em in the state
export function setCaptions (store) {
  return getCaptions((captions) => {
    store.dispatch('SET_CAPTIONS', captions)
  })
}

// Sets the time in the state that's used to control video currentTime
export function setTimestamp (store, seconds) {
  store.dispatch('SET_TIMESTAMP', seconds)
}

// Turns on auto-scrolling in the state
export function setScroll (store, bool) {
  store.dispatch('SET_SCROLL', bool)
}

// Each caption is given an `active` property, this turns it off in the currently
// active caption, turns it on in another
export function setActiveCaption (store, timestamp) {
  const cur = store.state.captions.findIndex((caption) => {
    return caption.active
  })
  const active = store.state.captions.findIndex((caption) => {
    return (timestamp >= caption.start && timestamp < caption.end)
  })

  if (cur === active) return
  store.dispatch('SET_ACTIVE_CAPTION', cur, false)
  store.dispatch('SET_ACTIVE_CAPTION', active, true)
}
