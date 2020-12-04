import { darken } from 'polished'
import { css } from 'styled-components'
import { mixin } from '../utils'
import { colorVariant, colorYik } from './color'
import { buttonFocus } from './control'
import {
  inputBtnPaddingY,
  inputBtnPaddingX,
  inputBtnLineHeight,
  inputBtnPaddingYSm,
  inputBtnPaddingXSm,
  inputBtnLineHeightSm,
  inputBtnPaddingYLg,
  inputBtnPaddingXLg,
  inputBtnLineHeightLg,
} from './input'

export const btnPaddingY = inputBtnPaddingY
export const btnPaddingX = inputBtnPaddingX
export const btnLineHeight = inputBtnLineHeight

export const btnPaddingYSm = inputBtnPaddingYSm
export const btnPaddingXSm = inputBtnPaddingXSm
export const btnLineHeightSm = inputBtnLineHeightSm

export const btnPaddingYLg = inputBtnPaddingYLg
export const btnPaddingXLg = inputBtnPaddingXLg
export const btnLineHeightLg = inputBtnLineHeightLg

export const btnBorderWidth = 1
export const btnDisabledOpacity = 0.7

export const btnVariant = mixin('btnVariant', (variant, outline) => p => {
  const color = colorVariant(variant)(p)
  return css`
    ${!outline &&
      `
      color: ${colorYik(color)(p)};
      background-color: ${color};
    `}

    ${outline &&
      `
      color: ${color};
      border-color: ${color};
      background-color: ${p.theme.colors.white};
    `}

    &:focus {
      ${buttonFocus(color)(p)};

      ${!outline &&
        `
        color: ${colorYik(color)(p)};
      `}

      ${outline &&
        `
        color:  ${darken(0.05, color)};
      `}
      /* for links */
      text-decoration: none;
    }

    &:not(:disabled):hover,
    &:not(:disabled):active {
      ${!outline &&
        `
        background-color: ${darken(0.05, color)};
        color: ${colorYik(color)(p)};
      `}

      ${outline &&
        `
        background-color: ${p.theme.tints[variant]};
        color: ${darken(0.05, color)};
      `}

      /* for links */
      text-decoration: none;
    }
  `
})

export const btnIconVariant = mixin('btnIconVariant', variant => p => {
  const color = colorVariant(variant)(p)
  return css`
    color: ${color};

    &:focus {
      ${buttonFocus(color)(p)};
    }

    &:not(:disabled):hover,
    &:not(:disabled):active {
      color: ${darken(0.05, color)};
    }
  `
})
