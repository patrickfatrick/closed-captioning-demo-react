import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CaptionsContainer from '../containers/CaptionsContainer.jsx'
import Buttons from './Buttons.jsx'
import m from './m'

const VideoPlayer = React.createClass({
  mixins: [PureRenderMixin],
  styles: {
    videoContainer: {
      marginRight: 'auto',
      marginLeft: 'auto',
      textAlign: 'center'
    }
  },
  render () {
    return (
      <div>
        <div id='video-container' style={m(this.styles.videoContainer)}>
          <video autobuffer controls
            onTimeUpdate={(e) => {
              this.props.timeUpdate(e, this.props.captionWindow, this.props.captionsOn, this.props.scroll)
            }}
            ref={(node) => {
              this.player = node
            }}>
            <source
              src='./public/assets/bob-ross.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <Buttons />
        <CaptionsContainer
          seek={this.props.seek}
        />
      </div>
    )
  },
  componentDidMount () {
    this.props.refPlayer(this.player)
  }
})

VideoPlayer.propTypes = {
  captionsOn: PropTypes.bool.isRequired,
  scroll: PropTypes.bool.isRequired,
  timestamp: PropTypes.number.isRequired,
  timeUpdate: PropTypes.func.isRequired,
  seek: PropTypes.func.isRequired,
  refPlayer: PropTypes.func.isRequired
}

export default VideoPlayer
