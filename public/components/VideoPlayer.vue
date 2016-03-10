<template>
  <div id="video-container">
    <video
      autobuffer
      controls
      v-el:playback>
      <source
        src="./public/assets/bob-ross.mp4"
        type="video/mp4"
      />
    </video>
  </div>
  <captions
    v-on:seek="seek"
    v-on:captions-on="captionsOn">
  </captions>
</template>

<script>

import Captions from './Captions.vue'
import {setTimestamp, setActiveCaption} from '../store/actions'

export default {
  vuex: {
    getters: {
      captions: (state) => state.captions,
      scroll: (state) => state.scroll,
      video: (state) => state.video
    },
    actions: {
      setTimestamp,
      setActiveCaption
    }
  },
  components: {
    Captions
  },
  methods: {
    // Handler for video's `timeupdate` event
    timeUpdate (e) {
      this.setTimestamp(this.$els.playback.currentTime)
      this.setActiveCaption(this.video.timestamp)
      // If scrolling is turned on, send an 'update-scroll' event down to the captions component
      if (this.scroll) this.$broadcast('update-scroll')
    },
    // Set video `currentTime` prop to the timestamp in the state
    seek () {
      this.$els.playback.currentTime = this.video.timestamp
    },
    // Register `timeupdate` event listener with video if scrolling turned on,
    // or remove listener if turned off
    captionsOn (bool) {
      if (bool === false) return this.$els.playback.removeEventListener('timeupdate', this.timeUpdate)
      this.$els.playback.addEventListener('timeupdate', this.timeUpdate)
    }
  }
}

</script>

<style>
#video-container {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
</style>