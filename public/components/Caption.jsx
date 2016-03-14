import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const Caption = React.createClass({
  mixins: [PureRenderMixin],
  styles: {
    whitespace: {
      paddingLeft: '0.1rem',
      paddingRight: '0.2rem'
    },
    closedCaptionActive: {
      backgroundColor: '#FFCC66'
    }
  },
  render () {
    return (
      <span className='caption-container'>
        <a href='#'
          className={'closed-caption' + ((this.props.caption.get('active')) ? ' active' : '')}
          style={(this.props.caption.get('active') ? this.styles.closedCaptionActive : null)}
          onClick={() => this.props.captionHandler(this.props.player, this.props.caption.get('start'))}>
          {this.props.caption.get('caption')}
        </a>
        <span className='whitespace' style={this.styles.whitespace}></span>
      </span>
    )
  }
})

Caption.propTypes = {
  caption: PropTypes.object.isRequired,
  captionHandler: PropTypes.func.isRequired
}

export default Caption
