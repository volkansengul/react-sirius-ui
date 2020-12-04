import styled, { withTheme } from 'styled-components'

const MenuDivider = styled.div`
  background-color: ${p => p.theme.colors.smoke};
  height: 1px;
  margin: 0.75rem 0.5rem;
  opacity: 0.5;
`
export default withTheme(MenuDivider)
