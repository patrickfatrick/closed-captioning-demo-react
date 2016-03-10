import {getCaptions} from '../services/caption-service'

export function setCaptionsOn (store, bool) {
  store.dispatch('SET_CAPTIONS_ON', bool)
}

export function setCaptions (store) {
  return getCaptions((captions) => {
    store.dispatch('SET_CAPTIONS', captions)
  })
}

export function setTimestamp (store, seconds) {
  store.dispatch('SET_TIMESTAMP', seconds)
}

export function setScroll (store, bool) {
  store.dispatch('SET_SCROLL', bool)
}

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
