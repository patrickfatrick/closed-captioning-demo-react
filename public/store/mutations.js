export default {
  SET_CAPTIONS_ON (state, bool) {
    state.captionsOn = bool
  },
  SET_CAPTIONS (state, captions) {
    state.captions = captions
  },
  SET_TIMESTAMP (state, seconds) {
    state.video.timestamp = seconds
  },
  SET_SCROLL (state, bool) {
    state.scroll = bool
  },
  SET_ACTIVE_CAPTION (state, index, boolean) {
    state.captions[index].active = boolean
  }
}
