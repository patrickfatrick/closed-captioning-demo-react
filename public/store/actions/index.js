export const setCaptionsOn = (bool) => {
  return {
    type: 'SET_CAPTIONS_ON',
    bool
  }
}

export const setCaptions = (captions) => {
  return {
    type: 'SET_CAPTIONS',
    captions
  }
}

export const setTimestamp = (seconds) => {
  return {
    type: 'SET_TIMESTAMP',
    seconds
  }
}

export const setScroll = (bool) => {
  return {
    type: 'SET_SCROLL',
    bool
  }
}

export const setActiveCaption = (timestamp) => {
  return {
    type: 'SET_ACTIVE_CAPTION',
    timestamp
  }
}

export const setPlayer = (node) => {
  return {
    type: 'SET_PLAYER',
    node
  }
}

export const setCaptionWindow = (node) => {
  return {
    type: 'SET_CAPTION_WINDOW',
    node
  }
}
