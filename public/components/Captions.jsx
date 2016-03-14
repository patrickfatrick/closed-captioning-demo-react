import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Caption from './Caption.jsx'

const Captions = React.createClass({
  mixins: [PureRenderMixin],
  closedCaptionsContainerStyles: {
    margin: '1rem',
    overflowY: 'scroll',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1rem',
    border: '1px dashed gray',
    height: '8rem',
    padding: '0.5rem'
  },
  closedCaptionsContainerStylesOff: {
    display: 'none'
  },
  render () {
    return (
      <div
        id='closed-captions-container'
        className={(this.props.captionsOn) ? 'captions-on' : ''}
        style={(this.props.captionsOn) ? this.closedCaptionsContainerStyles : this.closedCaptionsContainerStylesOff}
        ref={(node) => {
          this.cccontainer = node
        }}>
        {(this.props.captionsOn)
          ? <div
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
          : null
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
