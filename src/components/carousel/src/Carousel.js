import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ScCarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`

const ScCarouselContainer = styled.div`
  display: flex;
  margin: 0;
  transition: ${props => (props.sliding ? 'none' : 'transform 1s ease')};

  transform: translateX(0%);
`

const ScCarouselSlot = styled.div`
  flex: 1 0;
  flex-basis: 100%;
  order: ${props => props.order};
  opacity: ${props => {
    if (props.numSlides === 1) return 1
    if (props.numSlides === 2) return props.order === props.position ? 1 : 0.75
    return props.order === 0 ? 1 : 0.75
  }};
  transition: opacity 1s ease;
`

const PreviousButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 10px;
`

const NextButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: absolute;
  top: 50%;
  right: 10px;
`

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      direction: props.children.length === 2 ? 'previous' : 'next',
      sliding: false,
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2) return itemIndex

    if (itemIndex - position < 0) return numItems
    return itemIndex - position
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position,
    })

    setTimeout(() => {
      this.setState({
        sliding: false,
      })
    }, 50)
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 1) return
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }

  previousSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 0) return
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  render() {
    const { children } = this.props
    const { sliding, direction, position } = this.state

    const childrenWithProps = Children.map(children, child =>
      cloneElement(child, {
        numSlides: children.length || 1,
      }),
    )

    return (
      <ScCarouselWrapper>
        <ScCarouselContainer
          sliding={sliding}
          direction={direction}
          numSlides={childrenWithProps.length}
        >
          {childrenWithProps.map((child, index) => (
            <ScCarouselSlot
              key={`img-${index}`}
              order={this.getOrder(index)}
              numSlides={childrenWithProps.length}
              position={position}
            >
              {child}
            </ScCarouselSlot>
          ))}
        </ScCarouselContainer>
        <PreviousButton type="button" onClick={this.previousSlide}>
          Previous
        </PreviousButton>
        <NextButton type="button" onClick={this.nextSlide}>
          Next
        </NextButton>
      </ScCarouselWrapper>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.node,
}

export default Carousel
