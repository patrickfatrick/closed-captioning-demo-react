import React, {PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {connect} from 'react-redux'
import {setCaptionsOn, setCaptions, setScroll} from '../store/actions'
import {getCaptions} from '../services/caption-service'

const buttonContainerStyles = {
  marginTop: '1rem',
  textAlign: 'center'
}

const buttonStyles = {
  marginRight: '0.3rem',
  marginLeft: '0.3rem'
}

const Buttons = React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return (
      <div id='button-container' style={buttonContainerStyles}>
        <button
          id='closed-captions-button'
          title='Closed Captions'
          style={buttonStyles}
          onClick={() => this.props.toggleCaptions(this.props.player, this.props.captions, !this.props.captionsOn)}>
          Turn {(this.props.captionsOn) ? 'off' : 'on'} Closed Captioning
        </button>
        {(this.props.captionsOn)
          ? <button
            id='closed-captions-scroll-button'
            title='Auto-Scroll'
            style={buttonStyles}
            onClick={() => this.props.toggleScroll(!this.props.scroll)}>
            Turn {(this.props.scroll) ? 'off' : 'on'} Auto-Scroll
          </button>
          : null
        }
      </div>
    )
  }
})

Buttons.propTypes = {
  captionsOn: PropTypes.bool.isRequired,
  captions: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      caption: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  scroll: PropTypes.bool.isRequired
}

function mapStatetoProps (state) {
  return {
    player: state.videoPlayer.get('player'),
    captions: state.captions,
    captionsOn: state.videoPlayer.get('captionsOn'),
    scroll: state.videoPlayer.get('scroll')
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  const getCaptionsAsync = () => {
    return (dispatch) => {
      getCaptions((captions) => {
        dispatch(setCaptions(captions))
      })
    }
  }
  return {
    toggleCaptions (player, captions, bool) {
      dispatch(setCaptionsOn(bool))
      if (bool === true && !captions.size) {
        dispatch(getCaptionsAsync())
      }
    },
    toggleScroll (bool) {
      dispatch(setScroll(bool))
    }
  }
}

const ButtonsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Buttons)

export default ButtonsContainer
