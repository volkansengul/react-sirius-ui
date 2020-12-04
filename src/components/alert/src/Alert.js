import React, { PureComponent } from 'react'
import styled, { css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

const IconCheck = ({ fill }) => (
  <svg
    enableBackground="new 0 0 96 96"
    id="square_check"
    version="1.1"
    viewBox="0 0 96 96"
  >
    <path
      fill={fill}
      d="M80,4H16C9.37,4,4,9.37,4,16v64c0,6.63,5.37,12,12,12h64c6.63,0,12-5.37,12-12V16C92,9.37,86.63,4,80,4z M84,80  c0,2.21-1.79,4-4,4H16c-2.21,0-4-1.79-4-4V16c0-2.21,1.79-4,4-4h64c2.21,0,4,1.79,4,4V80z"
    />
    <path
      fill={fill}
      d="M66.385,35.272c-1.562-1.562-4.095-1.562-5.656,0L43.757,52.243l-8.485-8.485c-1.562-1.562-4.095-1.562-5.657,0  c-1.562,1.562-1.562,4.095,0,5.657l11.312,11.312c1.562,1.562,4.095,1.562,5.657,0l19.799-19.799  C67.947,39.367,67.947,36.835,66.385,35.272z"
    />
  </svg>
)

const IconInfo = ({ fill }) => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
  >
    <rect stroke={fill} height="18" rx="2" ry="2" width="18" x="3" y="3" />
    <line stroke={fill} x1="12" x2="12" y1="8" y2="16" />
    <line stroke={fill} x1="8" x2="16" y1="12" y2="12" />
  </svg>
)

const IconWarning = ({ fill }) => (
  <svg
    fill="none"
    height="24"
    stroke={fill}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12" y1="17" y2="17" />
  </svg>
)

const IconDanger = ({ fill }) => (
  <svg enableBackground="new 0 0 96 96" id="square_cross" viewBox="0 0 96 96">
    <path
      fill={fill}
      d="M80,4H16C9.37,4,4,9.37,4,16v64c0,6.63,5.37,12,12,12h64c6.63,0,12-5.37,12-12V16C92,9.37,86.63,4,80,4z M84,80  c0,2.21-1.79,4-4,4H16c-2.21,0-4-1.79-4-4V16c0-2.21,1.79-4,4-4h64c2.21,0,4,1.79,4,4V80z"
    />
    <path
      fill={fill}
      d="M53.657,48l8.485-8.484c1.562-1.562,1.562-4.096,0-5.658c-1.562-1.562-4.096-1.562-5.658,0L48,42.343l-8.485-8.485  c-1.562-1.562-4.095-1.562-5.657,0c-1.562,1.562-1.562,4.097,0,5.658L42.343,48l-8.485,8.484c-1.562,1.562-1.562,4.096,0,5.658  c1.562,1.562,4.095,1.562,5.657,0L48,53.657l8.484,8.485c1.562,1.562,4.096,1.562,5.658,0c1.562-1.562,1.562-4.097,0-5.658  L53.657,48z"
    />
  </svg>
)

const variantStyles = {
  success: p => css`
    border-left-color: ${p.theme.success};
  `,
  info: p => css`
    border-left-color: ${p.theme.info};
  `,
  warning: p => css`
    border-left-color: ${p.theme.warning};
  `,
  danger: p => css`
    border-left-color: ${p.theme.danger};
  `,
}

const variantIconStyles = {
  success: p => css`
    color: ${p.theme.success};
  `,
  info: p => css`
    color: ${p.theme.info};
  `,
  warning: p => css`
    color: ${p.theme.warning};
  `,
  danger: p => css`
    color: ${p.theme.danger};
  `,
}

const getVariantIcon = variant => {
  if (variant === 'success') return <IconCheck fill="currentColor" />
  if (variant === 'info') return <IconInfo fill="currentColor" />
  if (variant === 'warning') return <IconWarning fill="currentColor" />
  if (variant === 'danger') return <IconDanger fill="currentColor" />

  return <IconInfo fill="currentColor" />
}

const ScAlert = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid #d5dee6;
  border-left-width: 4px;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.415),
    0 2px 4px -2px rgba(67, 90, 111, 0.301);
  border-radius: ${p => p.theme.borderRadius};
  background: #fff;
  color: #1f4160;
  padding: 1rem;
  text-align: left;
  pointer-events: all;

  ${p => variantStyles[p.variant]}
  ${space}
`

const ScAlertContent = styled.div`
  margin-right: 1rem;
`

const ScAlertIcon = styled.div`
  font-size: 2rem;
  padding: 0 1.25rem 0 0.5rem;

  ${p => variantIconStyles[p.variant]}
`

const ScAlertTitle = styled.div`
  font-size: ${p => p.theme.fontSizeBase};
  font-weight: 600;
`

const ScAlertText = styled.p`
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: #1f4160;
  font-size: ${p => p.theme.fontSizeBase};
`

const ScAlertClose = styled.span`
  position: absolute;
  cursor: pointer;
  right: 0.5rem;
  top: 0.5rem;
  font-size: 1.2rem;
  opacity: 0.6;
`

class Alert extends PureComponent {
  static propTypes = {
    variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    title: PropTypes.node,
    text: PropTypes.node,
    hasIcon: PropTypes.bool,
    isRemovable: PropTypes.bool,
    onRemove: PropTypes.func,
  }

  static defaultProps = {
    variant: 'info',
    title: null,
    text: null,
    hasIcon: false,
    isRemovable: false,
  }

  render() {
    const IconTag = getVariantIcon(this.props.variant)
    const { title, text, hasIcon, isRemovable, onRemove, ...props } = this.props

    return (
      <ScAlert {...props}>
        {hasIcon && (
          <ScAlertIcon variant={props.variant}>
            <IconTag />
          </ScAlertIcon>
        )}
        <ScAlertContent>
          {title && <ScAlertTitle>{title}</ScAlertTitle>}
          {text && <ScAlertText>{text}</ScAlertText>}
        </ScAlertContent>
        {isRemovable && <ScAlertClose onClick={onRemove}>x</ScAlertClose>}
      </ScAlert>
    )
  }
}
Alert.displayName = 'Alert'

export default withTheme(Alert)
