import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes } from 'styled-components'
import { rgba } from 'polished'
import { space } from 'styled-system'

import { Box } from '../../../elements/box'
import { Text } from '../../../elements/typography'

const blobBottomAnimation = keyframes`
  25%, 50%, 75% {
    top: 50%;
    left: 100%;
  }
  100% {
    top: 0;
    left: 50%;
  }
`

const blobLeftAnimation = keyframes`
  25% {
    top: 50%;
    left: 0;
  }
  50%, 100% {
    top: 100%;
    left: 50%;
  }
`

const blobTopAnimation = keyframes`
  50% {
    top: 0;
    left: 50%;
  }
  75%, 100% {
    top: 50%;
    left: 0;
  }
`

const blobMoverAnimation = keyframes`
  0%, 100% {
    top: 0;
    left: 50%;
  }
  25% {
    top: 50%;
    left: 100%;
  }
  50% {
    top: 100%;
    left: 50%;
  }
  75% {
    top: 50%;
    left: 0;
  }
`

const ScLoader = styled.div`
  background-color: ${p => rgba(p.theme.colors.white, 0.875)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${p =>
    p.spread &&
    `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `}

  ${space}
`

const ScBlobContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  top: -15px;
`

const ScBlob = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  border: 2px solid ${p => p.theme.colors.smoke};
  background-color: ${p => p.theme.colors.smoke};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

const ScBlobTop = styled(ScBlob)`
  top: 0;
  animation: ${blobTopAnimation} 1s infinite ease-in;
`

const ScBlobBottom = styled(ScBlob)`
  top: 100%;
  animation: ${blobBottomAnimation} 1s infinite ease-in;
`

const ScBlobLeft = styled(ScBlob)`
  left: 0;
  animation: ${blobLeftAnimation} 1s infinite ease-in;
`

const ScBlobMove = styled(ScBlob)`
  border: 2px solid ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.primary};
  top: 0;
  animation: ${blobMoverAnimation} 1s infinite ease-in;
`

class Loader extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    spread: PropTypes.bool,
  }

  static defaultProps = {
    title: 'Yükleniyor',
    text: 'Lütfen işlem devam ederken bekleyiniz.',
    spread: false,
  }

  render() {
    return (
      <ScLoader {...this.props}>
        <ScBlobContainer>
          <ScBlobTop theme={this.props.theme} />
          <ScBlobBottom theme={this.props.theme} />
          <ScBlobLeft theme={this.props.theme} />

          <ScBlobMove theme={this.props.theme} />
        </ScBlobContainer>

        <Box mt={4} maxWidth={400} textAlign="center">
          <Text display="block" fontSize="1.2rem" fontWeight={500}>
            {this.props.title}
          </Text>
          <Text color="slate" fontSize="1rem">
            {this.props.text}
          </Text>
        </Box>
      </ScLoader>
    )
  }
}

export default withTheme(Loader)
