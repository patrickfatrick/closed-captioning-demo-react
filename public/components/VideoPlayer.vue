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
    timeUpdate (e) {
      this.setTimestamp(this.$els.playback.currentTime)
      this.setActiveCaption(this.video.timestamp)
      if (this.scroll) this.$broadcast('update-scroll')
    },
    seek () {
      this.$els.playback.currentTime = this.video.timestamp
    },
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