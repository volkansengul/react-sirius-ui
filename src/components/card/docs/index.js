import React from 'react'
import { Card, CardHeader, CardFooter } from '../../../'
import { Paragraph, Code } from '../../../elements/typography'
import { Box } from '../../../elements/box'
import { Button } from '../../../elements/button'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceCard from '!raw-loader!../src/Card'
import sourceCardHeader from '!raw-loader!../src/CardHeader'
import sourceCardFooter from '!raw-loader!../src/CardFooter'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleAdvanced from './examples/advanced.example'

const name = 'Card'
const introduction = (
  <Paragraph>
    Cards provide a flexible and extensible content container with multiple
    variants and options.
  </Paragraph>
)

const scope = { Box, Button, Card, CardHeader, CardFooter }

const components = [
  {
    name: 'Card',
    source: sourceCard,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Box Example',
        description: (
          <Paragraph>
            Very basic <Code>Card</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Advanced Card Examples',
        description: (
          <Paragraph>
            You can also apply elevation to <Code>Card</Code> component.
          </Paragraph>
        ),
        codeText: exampleAdvanced,
        scope,
      },
    ],
  },
  {
    name: 'CardHeader',
    source: sourceCardHeader,
    underDevelopment: false,
    examples: [],
  },
  {
    name: 'CardFooter',
    source: sourceCardFooter,
    underDevelopment: false,
    examples: [],
  },
]

export default {
  name,
  introduction,
  components,
}
