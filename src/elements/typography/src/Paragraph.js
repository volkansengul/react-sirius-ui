import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system'

const Paragraph = styled.p`
  color: ${p => p.theme.colors.dark};
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => p.theme.fontSizeBase};
  line-height: ${p => p.theme.lineHeightBase};
  margin-bottom: 1rem;

  ${p =>
    p.isLead &&
    `
    font-size: ${p.theme.fontSizeLg};
  `}

  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${textAlign}
`

Paragraph.displayName = 'Paragraph'
Paragraph.propTypes = {
  isLead: PropTypes.bool,
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
}

Paragraph.defaultProps = {
  isLead: false,
}

export default withTheme(Paragraph)
