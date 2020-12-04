import React, { PureComponent } from 'react'
import { withTheme } from 'styled-components'

import { Box } from '../../../elements/box'

class MediaItem extends PureComponent {
  render() {
    return <Box {...this.props}>{this.props.children}</Box>
  }
}
MediaItem.displayName = 'MediaItem'

export default withTheme(MediaItem)
