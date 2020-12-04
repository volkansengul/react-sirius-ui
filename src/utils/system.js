import { num } from './misc'

export const unit = unit => value => {
  return num(value) ? `${value}${unit}` : value
}
