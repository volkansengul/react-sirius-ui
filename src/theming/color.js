import { mix, parseToRgb, tint } from 'polished'
import { thd, mixin } from '../utils'

export const black = '#000'
export const white = '#fff'

/**
 * Brand colors
 *  - brand colors variations
 * Contextual colors
 * Grayscale colors
 * Tint colors
 */

export const grays = {
  darker: '#121217',
  dark: '#17171d',
  black: '#000000',
  shaft: '#333333',
  slate: '#5f6e78',
  silver: '#bec4c8',
  smoke: '#dee1e3',
  snow: '#f8f9f9',
  white: '#ffffff',
}

export const blue = '#007ced'
export const bunting = '#ff4f00'
export const indigo = '#6610f2'
export const purple = '#6f42c1'
export const pink = '#e83e8c'
export const red = '#ff3318'
export const brick = '#bd4932'
export const orange = '#ff6d18'
export const yellow = '#ffc200'
export const green = '#24BB5D'
export const teal = '#20c997'
export const cyan = '#1890ff'
export const universe = '#fff8e7'

export const brand = {
  primary: blue,
  secondary: bunting,
  success: green,
  info: cyan,
  warning: yellow,
  danger: red,
  light: grays.silver,
  dark: grays.dark,
}

function getTints() {
  const tintObj = {}

  Object.keys(brand).forEach(key => {
    tintObj[key] = tint(0.875, brand[key])
  })

  return tintObj
}

export const tints = getTints()

export const primary = blue
export const secondary = bunting
export const success = green
export const info = cyan
export const warning = orange
export const danger = red
export const light = grays.silver
export const { dark } = grays

export const colorVariants = thd('colorVariants', [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
])

export const colors = {
  black,
  white,
  ...grays,
  blue,
  indigo,
  purple,
  pink,
  red,
  brick,
  orange,
  yellow,
  green,
  teal,
  cyan,
  universe,
  ...brand,
}

export const colorInterval = thd('colorInterval', 0.08)

export const colorVariant = mixin('colorVariant', variant => p => {
  const thValue = thd(variant)(p)
  if (thValue) return thValue
  const colorValue = colors(p)[variant]
  if (colorValue) return colorValue(p)
  return variant
})

export const colorLevel = mixin('colorLevel', (color, level) => p => {
  const baseColor = level > 0 ? black(p) : white(p)
  const absLevel = Math.abs(level)
  return mix(absLevel * colorInterval(p), baseColor, color)
})

export const yiqContrastedThreshold = thd('yiqContrastedThreshold', 150)
export const yikTextDark = thd('yikTextDark', '#111')
export const yikTextLight = thd('yikTextLight', '#fff')

export const colorYik = mixin('colorYik', color => p => {
  const { red: r, green: g, blue: b } = parseToRgb(color)
  const yik = (r * 299 + g * 587 + b * 114) / 1000
  return yik >= yiqContrastedThreshold(p) ? yikTextDark(p) : yikTextLight(p)
})
