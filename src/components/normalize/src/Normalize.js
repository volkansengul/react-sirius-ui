import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const Normalize = createGlobalStyle`
  ${normalize()}

  * {
    box-sizing: border-box;
  }
`

export default Normalize
