import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { Box } from '../../../elements/box'
import { Image } from '../../../elements/image'
import { Heading, Paragraph } from '../../../elements/typography'

const ScBlankSlateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ScBlankSlate = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  padding: 1rem 3rem;
  flex-direction: row;
  align-items: center;
`

const ScBlankSlateDetails = styled.div`
  max-width: 400px;
  z-index: 10;
`

const ScBlankSlateImageContainer = styled.div`
  flex: 1 1 auto;
  z-index: 0;
  text-align: right;
`

const ScBlankSlateImage = styled(Image)`
  position: relative;
  z-index: 0;
  margin-top: 0;
  max-width: none;
`

class BlankSlate extends PureComponent {
  static propTypes = {
    /**
     * Set the title of the blank slate.
     */
    title: PropTypes.string,
    /**
     * Set the description of the blank slate.
     */
    text: PropTypes.string,
    /**
     * Actions area of blank slate.
     */
    actions: PropTypes.node,
    /**
     * Image url for side illustration.
     */
    image: PropTypes.string,
  }

  static defaultProps = {
    title: 'No Data!',
    text:
      'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  }

  render() {
    const { title, text, image, actions } = this.props

    return (
      <ScBlankSlateContainer>
        <ScBlankSlate>
          <ScBlankSlateDetails>
            <Box>
              <Heading variant="h3" m={0} p={0}>
                {title}
              </Heading>
              <Paragraph
                m={0}
                mt={3}
                color="slate"
                lineHeight="1.4"
                fontSize="1rem"
              >
                {text}
              </Paragraph>

              {actions && <Box mt={3}>{actions}</Box>}
            </Box>
          </ScBlankSlateDetails>
          {image && (
            <ScBlankSlateImageContainer>
              <ScBlankSlateImage src={image} alt="No Data!" />
            </ScBlankSlateImageContainer>
          )}
        </ScBlankSlate>
      </ScBlankSlateContainer>
    )
  }
}
BlankSlate.displayName = 'BlankSlate'

export default withTheme(BlankSlate)
