import React from 'react'
import { Spinner } from '..'
import { Paragraph, Code, Box } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSpinner from '!raw-loader!../src/Spinner'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleVariants from './examples/variants.example'
import exampleCentering from './examples/centering.example'

const name = 'Spinner'
const introduction = (
  <Paragraph>
    The <Code>Spinner</Code> component is used to indicate a loading state.
    Spinner takes the color and height of its parent. If you want you can set{' '}
    <Code>size</Code> property to manually size the spinner.
  </Paragraph>
)

const scope = { Box, Spinner }

const components = [
  {
    name: 'Spinner',
    source: sourceSpinner,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Spinner Example',
        description: (
          <Paragraph>
            Very basic <Code>Spinner</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Contextual Variants',
        description: (
          <Paragraph>
            You can apply contextual color variants to <Code>Spinner</Code>{' '}
            component.
          </Paragraph>
        ),
        codeText: exampleVariants,
        scope,
      },
      {
        title: 'Centering in a Container',
        description: (
          <Paragraph>
            You can center a <Code>Spinner</Code> component in a container like
            this.
          </Paragraph>
        ),
        codeText: exampleCentering,
        scope,
      },
    ],
  },
]

export default {
  name,
  introduction,
  components,
}
