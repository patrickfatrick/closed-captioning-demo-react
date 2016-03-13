import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const whitespaceStyles = {
  paddingLeft: '0.1rem',
  paddingRight: '0.1rem'
}

const closedCaptionActiveStyles = {
  backgroundColor: '#FFCC66'
}

const Caption = React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return (
      <span className='caption-container'>
        <a href='#'
          className={'closed-caption' + ((this.props.caption.get('active')) ? ' active' : '')}
          style={(this.props.caption.get('active') ? closedCaptionActiveStyles : null)}
          onClick={() => this.props.captionHandler(this.props.player, this.props.caption.get('start'))}>
          {this.props.caption.get('caption')}
        </a>
        <span className='whitespace' style={whitespaceStyles}></span>
      </span>
    )
  }
})

Caption.propTypes = {
  caption: PropTypes.object.isRequired,
  captionHandler: PropTypes.func.isRequired
}

export default Caption
