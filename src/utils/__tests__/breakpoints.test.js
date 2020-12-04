import React from 'react'
import { mount } from 'enzyme'
import styled from 'styled-components'
import {
  DEFAULT_BREAKPOINTS,
  getBreakpoints,
  getBreakpointEntries,
  getNextBreakpoint,
  getPreviousBreakpoint,
  getBreakpointMin,
  getBreakpointMax,
  mediaMinWidth,
  mediaMaxWidth,
  mediaBetweenWidth,
  up,
  down,
  between,
} from '..'

describe('breapoints utils', () => {
  let props

  beforeEach(() => {
    props = {
      theme: {
        breakpoints: {
          xs: 0,
          sm: 5,
          md: 10,
          lg: 30,
        },
      },
    }
  })

  describe('#getBreakpoints', () => {
    it('should return default breakpoints', () => {
      expect(getBreakpoints()).toEqual(DEFAULT_BREAKPOINTS)
    })

    it('should return breakpoints from theme', () => {
      expect(getBreakpoints(props)).toEqual({
        xs: 0,
        sm: 5,
        md: 10,
        lg: 30,
      })
    })
  })

  describe('#getBreakpointEntries', () => {
    it('should give sorted breakpoints entries', () => {
      expect(getBreakpointEntries()).toEqual([
        ['xs', 0],
        ['sm', 576],
        ['md', 768],
        ['lg', 992],
        ['xl', 1200],
      ])

      expect(getBreakpointEntries(props)).toEqual([
        ['xs', 0],
        ['sm', 5],
        ['md', 10],
        ['lg', 30],
      ])
    })
  })

  describe('#getNextBreakpoint', () => {
    it('should return next breakpoint', () => {
      expect(getNextBreakpoint('xs', props)).toBe('sm')
      expect(getNextBreakpoint('sm', props)).toBe('md')
      expect(getNextBreakpoint('lg', props)).toBe(null)
    })
  })

  describe('#getPreviousBreakpoint', () => {
    it('should return previous breakpoint', () => {
      expect(getPreviousBreakpoint('lg', props)).toBe('md')
      expect(getPreviousBreakpoint('md', props)).toBe('sm')
      expect(getPreviousBreakpoint('sm', props)).toBe('xs')
      expect(getPreviousBreakpoint('xs', props)).toBe(null)
    })
  })

  describe('#getBreakpointMin', () => {
    it('should return breakpoint minimum value', () => {
      expect(getBreakpointMin('xs', props)).toBe(null)
      expect(getBreakpointMin('sm', props)).toBe(5)
      expect(getBreakpointMin('md', props)).toBe(10)
      expect(getBreakpointMin('lg', props)).toBe(30)
    })
  })

  describe('#getBreakpointMax', () => {
    it('should return breakpoint maximum value', () => {
      expect(getBreakpointMax('xs', props)).toBe(4.98)
      expect(getBreakpointMax('sm', props)).toBe(9.98)
      expect(getBreakpointMax('md', props)).toBe(29.98)
      expect(getBreakpointMax('lg', props)).toBe(null)
    })
  })

  describe('#mediaMinWidth', () => {
    it('should return minimum media query', () => {
      expect(mediaMinWidth(20)).toBe('@media (min-width: 20px)')
      expect(mediaMinWidth(50)).toBe('@media (min-width: 50px)')
    })
  })

  describe('#mediaMaxWidth', () => {
    it('should return minimum media query', () => {
      expect(mediaMaxWidth(20)).toBe('@media (max-width: 20px)')
      expect(mediaMaxWidth(50)).toBe('@media (max-width: 50px)')
    })
  })

  describe('#mediaBetweenWidth', () => {
    it('should return minimum and maximum media query', () => {
      expect(mediaBetweenWidth(1, 20)).toBe(
        '@media (min-width: 1px) and (max-width: 20px)',
      )
      expect(mediaBetweenWidth(21, 50)).toBe(
        '@media (min-width: 21px) and (max-width: 50px)',
      )
    })
  })

  describe('#up', () => {
    it('should generate a media query', () => {
      const TestElement = styled.div`
        color: gray;
        ${up('md', 'color: red;')};
        ${up('lg', 'color: blue;')};
      `

      const wrapper = mount(<TestElement {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'gray')
      expect(wrapper).toHaveStyleRule('color', 'red', {
        media: '(min-width:10px)',
      })
      expect(wrapper).toHaveStyleRule('color', 'blue', {
        media: '(min-width:30px)',
      })
    })

    it('should not add a media query if smallest', () => {
      const TestElement = styled.div`
        color: blue;
        ${up('xs', 'color: red;')};
      `

      const wrapper = mount(<TestElement {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'red')
    })
  })

  describe('#down', () => {
    it('should generate a media query', () => {
      const TestElement = styled.div`
        color: gray;
        ${down('md', 'color: navy')};
        ${down('sm', { color: 'yellow' })};
      `

      const wrapper = mount(<TestElement {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'gray')
      expect(wrapper).toHaveStyleRule('color', 'navy', {
        media: '(max-width:9.98px)',
      })
      expect(wrapper).toHaveStyleRule('color', 'yellow', {
        media: '(max-width:4.98px)',
      })
    })

    it('should not add a media query if largest', () => {
      const TestElement = styled.div`
        color: navy;
        ${down('lg', 'color: yellow;')};
      `

      const wrapper = mount(<TestElement {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'yellow')
    })
  })

  describe('#between', () => {
    it('should return only max if smallest', () => {
      const TestElement = styled.div`
        color: blue;
        ${between('xs', 'sm', 'color: navy')};
        ${between('xs', 'sm', { background: 'yellow' })};
      `

      expect(between('xs', 'lg', { color: 'navy' })(props)).toEqual({
        color: 'navy',
      })

      const wrapper = mount(<TestElement {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'blue')
      expect(wrapper).toHaveStyleRule('color', 'navy', {
        media: '(max-width:4.98px)',
      })
      expect(wrapper).toHaveStyleRule('background', 'yellow', {
        media: '(max-width:4.98px)',
      })
    })

    it('should return only min if largest', () => {
      const TestElement = styled.div`
        color: blue;
        ${between('md', 'lg', 'color: yellow')};
      `

      const wrapper = mount(<TestElement {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'blue')
      expect(wrapper).toHaveStyleRule('color', 'yellow', {
        media: '(min-width:10px)',
      })
    })

    it('should return max and min if middle', () => {
      const TestElement = styled.div`
        color: blue;
        ${between('sm', 'md', 'color: yellow')};
      `

      const wrapper = mount(<TestElement {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'blue')
      expect(wrapper).toHaveStyleRule('color', 'yellow', {
        media: '(min-width:5px) and (max-width:9.98px)',
      })
    })
  })
})
