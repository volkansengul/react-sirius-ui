import { unit } from '..'

describe('system utils', () => {
  describe('#unit', () => {
    it('should automatically add unit', () => {
      const px = unit('px')
      const em = unit('em')
      const rem = unit('rem')
      expect(px(3)).toBe('3px')
      expect(em(3)).toBe('3em')
      expect(em('3px')).toBe('3px')
      expect(rem(1)).toBe('1rem')
      expect(rem(50)).toBe('50rem')
    })
  })
})
