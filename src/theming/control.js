import { rgba, transparentize, lighten } from 'polished'
import { css } from 'styled-components'
import { mixin } from '../utils'

export const baseFocus = mixin('baseFocus', color => () => css`
  outline: 0;
  border-color: ${lighten(0.25, color)};
  box-shadow: 0 0 2px ${transparentize(0.1, color)};
`)

export const controlFocus = mixin('controlFocus', color => () => css`
  outline: 0;
  border-color: ${lighten(0.25, color)};
  box-shadow: 0 0 0 0.2rem ${rgba(color, 0.25)};
`)

export const buttonFocus = mixin('buttonFocus', color => () => css`
  outline: 0;
  box-shadow: 0 0 0 0.25rem ${rgba(color, 0.25)};
`)
