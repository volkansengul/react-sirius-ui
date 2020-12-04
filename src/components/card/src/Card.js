import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import {
  space,
  textAlign,
  width,
  zIndex,
  maxWidth,
  minWidth,
  minHeight,
} from 'styled-system'

import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import { ImageFluid } from '../../../elements/image'
import { Elevations } from '../../../constants'

const ScCard = styled.div`
  border: 1px solid rgb(228, 231, 235);
  background-color: white;
  border-radius: ${p => p.theme.borderRadius};
  padding: 0;

  ${p => Elevations[p.elevation]}

  ${space}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${zIndex}
`

const ScCardCover = styled.div`
  & > img {
    vertical-align: middle;
    border-style: none;
    border-top-left-radius: ${p => p.theme.borderRadius};
    border-top-right-radius: ${p => p.theme.borderRadius};
  }
`

const ScCardBody = styled.div`
  padding: 1rem;

  ${textAlign}
`

class Card extends PureComponent {
  static propTypes = {
    cover: PropTypes.string,
    title: PropTypes.node,
    actions: PropTypes.node,
    footer: PropTypes.node,
    elevation: PropTypes.number,
    children: PropTypes.node,
  }

  static defaultValues = {
    elevation: 0,
  }

  render() {
    const { title, actions, cover, footer, children, ...props } = this.props
    return (
      <ScCard {...props}>
        {title && <CardHeader title={title}>{actions}</CardHeader>}

        {cover && (
          <ScCardCover>
            <ImageFluid src={cover} />
          </ScCardCover>
        )}

        <ScCardBody>{children}</ScCardBody>

        {footer && <CardFooter>{footer}</CardFooter>}
      </ScCard>
    )
  }
}

export default withTheme(Card)
