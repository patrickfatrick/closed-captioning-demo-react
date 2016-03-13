import {connect} from 'react-redux'
import {setTimestamp, setCaptionWindow} from '../store/actions'
import Captions from '../components/Captions.jsx'

const mapStateToProps = (state) => {
  return {
    captionsOn: state.videoPlayer.get('captionsOn'),
    captions: state.captions,
    timestamp: state.videoPlayer.get('timestamp'),
    player: state.videoPlayer.get('player')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    captionHandler (player, seconds) {
      dispatch(setTimestamp(seconds))
      ownProps.seek(player, seconds)
    },
    refCaptionWindow (node) {
      dispatch(setCaptionWindow(node))
    }
  }
}

const CaptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Captions)

export default CaptionsContainer

