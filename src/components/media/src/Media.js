import React, { PureComponent } from 'react'
import { withTheme } from 'styled-components'
import { Box } from '../../../elements/box'

class Media extends PureComponent {
  render() {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        {...this.props}
      >
        {this.props.children}
      </Box>
    )
  }
}
Media.displayName = 'Media'

export default withTheme(Media)
