import {connect} from 'react-redux'
import {setTimestamp, setActiveCaption, setPlayer} from '../store/actions'
import VideoPlayer from '../components/VideoPlayer.jsx'

const mapStateToProps = (state) => {
  return {
    captionsOn: state.videoPlayer.get('captionsOn'),
    scroll: state.videoPlayer.get('scroll'),
    timestamp: state.videoPlayer.get('timestamp'),
    player: state.videoPlayer.get('player'),
    captionWindow: state.videoPlayer.get('captionWindow')
  }
}

const mapDispatchToProps = (dispatch) => {
  const updateTimes = (e) => {
    return (dispatch) => {
      dispatch(setTimestamp(e.target.currentTime))
      dispatch(setActiveCaption(e.target.currentTime))
    }
  }

  const scrollHandler = (captionWindow) => {
    const containerTop = captionWindow.offsetTop
    const activeTop = captionWindow.querySelector('.active').offsetTop
    captionWindow.scrollTop = activeTop - containerTop - 40
  }

  return {
    timeUpdate (e, captionWindow, captionsOn, scroll) {
      if (!captionsOn) return
      dispatch(updateTimes(e))
      if (scroll) scrollHandler(captionWindow)
    },
    seek (player, seconds) {
      player.currentTime = seconds
    },
    refPlayer (node) {
      dispatch(setPlayer(node))
    }
  }
}

const VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer)

export default VideoPlayerContainer
