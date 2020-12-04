import { grayscale } from 'polished'
import { css } from 'styled-components'
import { mixin } from '../utils'
import { colorVariant, colorYik } from './color'
import { lineHeightBase, lineHeightLg, lineHeightSm } from './typography'

export const linePaddingY = '.475rem'
export const linePaddingX = '1rem'
export const lineLineHeight = lineHeightBase

export const linePaddingYSm = '.25rem'
export const linePaddingXSm = '.5rem'
export const lineLineHeightSm = lineHeightSm

export const linePaddingYLg = '.75rem'
export const linePaddingXLg = '1.5rem'
export const lineLineHeightLg = lineHeightLg

export const lineVariant = mixin('lineVariant', variant => p => {
  const color = colorVariant(variant)(p)
  return css`
    color: ${colorYik(color)(p)};
    background-color: ${color};
  `
})

export const linearProgressPaddingY = '.475rem'
export const linearProgressPaddingX = '1rem'
export const linearProgressLineHeight = lineHeightBase

export const linearProgressPaddingYSm = '.25rem'
export const linearProgressPaddingXSm = '.5rem'
export const linearProgressLineHeightSm = lineHeightSm

export const linearProgressPaddingYLg = '.75rem'
export const linearProgressPaddingXLg = '1.5rem'
export const linearProgressLineHeightLg = lineHeightLg

export const linearProgressVariant = mixin(
  'linearProgressVariant',
  variant => p => {
    const color = colorVariant(variant)(p)

    return css`
      background-color: ${grayscale(color)};
    `
  },
)

export const circleVariant = mixin('circleVariant', variant => p => {
  const color = colorVariant(variant)(p)
  return css`
    stroke: ${color};
  `
})

export const circleTextVariant = mixin('circleTextVariant', variant => p => {
  const color = colorVariant(variant)(p)
  return css`
    color: ${color};
  `
})
