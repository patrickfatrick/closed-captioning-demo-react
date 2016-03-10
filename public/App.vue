<template>
  <div class="container">
    <video-player></video-player>
  </div>
</template>

<script>

import VideoPlayer from './components/VideoPlayer.vue'

export default {
  vuex: {
    getters: {
      test: (state) => state.test
    }
  },
  components: {
    VideoPlayer
  }
}

</script>

<style>
.container {
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  width: 100%;
}
@media all and (min-width: 992px) {
  .container {
    margin-top: 6rem;
    width: 800px;
  }
}
</style>