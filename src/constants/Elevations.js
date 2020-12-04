import { css } from 'styled-components'

export default {
  0: () => css`
    box-shadow: none;
  `,
  1: () => css`
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 2px 4px -2px rgba(67, 90, 111, 0.47);
  `,
  2: () => css`
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 5px 8px -4px rgba(67, 90, 111, 0.47);
  `,
  3: () => css`
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 8px 10px -4px rgba(67, 90, 111, 0.47);
  `,
  4: () => css`
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 16px 24px -8px rgba(67, 90, 111, 0.47);
  `,
}
