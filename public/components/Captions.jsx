import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Caption from './Caption.jsx'
import m from './m'

const Captions = React.createClass({
  mixins: [PureRenderMixin],
  styles: {
    closedCaptionsContainer: {
      margin: '1rem',
      overflowY: 'scroll',
      fontFamily: 'Lato, sans-serif',
      fontSize: '1rem',
      border: '1px dashed gray',
      height: '8rem',
      padding: '0.5rem'
    },
    closedCaptionsContainerOff: {
      display: 'none'
    }
  },
  render () {
    return (
      <div
        id='closed-captions-container'
        style={m(
          this.styles.closedCaptionsContainer,
          !this.props.captionsOn && this.styles.closedCaptionsContainerOff
        )}
        ref={(node) => {
          this.cccontainer = node
        }}>
        {(this.props.captionsOn) &&
          <div
            id='closed-captions'>
            {this.props.captions.map((caption, i) => {
              return (
                <Caption
                  key={i}
                  caption={caption}
                  player={this.props.player}
                  captionHandler={this.props.captionHandler}
                />
              )
            })}
          </div>
        }
      </div>
    )
  },
  componentDidMount () {
    this.props.refCaptionWindow(this.cccontainer)
  }
})

Captions.propTypes = {
  captionsOn: PropTypes.bool.isRequired,
  captions: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      caption: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  timestamp: PropTypes.number.isRequired,
  refCaptionWindow: PropTypes.func.isRequired
}

export default Captions
