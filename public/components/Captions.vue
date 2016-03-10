<template>
  <div id="button-container">
    <button
      id="closed-captions-button"
      @click="toggleCaptions(!captionsOn)">
      {{(captionsOn) ? 'Turn off Closed Captioning' : 'Turn on Closed Captioning'}}
    </button>
    <button
      id="closed-captions-scroll-button"
      v-if="captionsOn"
      @click="setScroll(!scroll)">
      {{(scroll) ? 'Turn off Auto-Scroll' : 'Turn on Auto-Scroll'}}
    </button>
  </div>
  <div
    id="closed-captions"
    v-if="captionsOn"
    v-el:cccontainer>
    <span
      class="caption-container"
      v-for="caption in captions">
      <a
        href="#"
        class="closed-caption"
        :class="{'active': caption.active}"
        @click.prevent="captionHandler($index)">
        {{caption.caption}}
      </a>
      <span class="whitespace"></span>
    </span>
  </div>
</template>

<script>

import {setCaptionsOn, setCaptions, setTimestamp, setScroll} from '../store/actions'

export default {
  vuex: {
    getters: {
      captionsOn: (state) => state.captionsOn,
      captions: (state) => state.captions,
      scroll: (state) => state.scroll,
      video: (state) => state.video
    },
    actions: {
      setCaptionsOn,
      setCaptions,
      setTimestamp,
      setScroll
    }
  },
  methods: {
    captionHandler (index) {
      this.setTimestamp(this.captions[index].start)
      this.$dispatch('seek')
    },
    toggleCaptions (bool) {
      if (bool === true && !this.captions.length) {
        this.setCaptions()
      }
      this.setCaptionsOn(bool)
      this.$dispatch('captions-on', bool)
    },
    updateScroll () {
      const containerTop = this.$els.cccontainer.offsetTop
      const activeTop = this.$els.cccontainer.querySelector('.active').offsetTop
      this.$els.cccontainer.scrollTop = activeTop - containerTop - 40
    }
  },
  events: {
    'update-scroll': function () {
      this.updateScroll()
    }
  }
}

</script>

<style>
#button-container {
  margin-top: 1rem;
  text-align: center;
}
#closed-captions {
  margin: 1rem;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  border: 1px dashed gray;
  height: 8rem;
  overflow-y: scroll;
  padding: 0.5rem;
}
.closed-caption.active {
  background-color: #FFCC66;
}
a.closed-caption {
  text-decoration: none;
}
a.closed-caption:visited {
  color: inherit;
}
.whitespace {
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
</style>