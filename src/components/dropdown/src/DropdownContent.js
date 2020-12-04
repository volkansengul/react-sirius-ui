import styled, { withTheme } from 'styled-components'
import { minWidth } from 'styled-system'

const DropdownContent = styled.div`
  display: ${p => (p.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  background-color: ${p => p.theme.white};
  border-radius: ${p => p.theme.borderRadius};
  border: 1px solid ${p => p.theme.colors.smoke};

  ${p =>
    p.align === 'left' &&
    `
    left: 0;
  `}

  ${p =>
    p.align === 'right' &&
    `
    right: 0;
  `}

  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  /* margin-bottom: -0.5rem;
  transform: translate(-50%, 100%); */
  z-index: 10;

  ${minWidth}
`
DropdownContent.displayName = 'DropdownContent'
export default withTheme(DropdownContent)
