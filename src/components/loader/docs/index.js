import React from 'react'
import Loader from '../src/Loader'
import { Box } from '../../../elements/box'
import { Divider } from '../../../elements/divider'
import { Paragraph, Code } from '../../../elements/typography'
import { IconEdit } from '../../../icons'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceLoader from '!raw-loader!../src/Loader'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleSpread from './examples/spread.example'

const name = 'Loader'
const introduction = (
  <Paragraph>
    Loader is an informational loading component that can be used to block users
    from interacting with a current part or all of the appication.
  </Paragraph>
)

const scope = { Box, Paragraph, Divider, Loader }

const components = [
  {
    name: 'Loader',
    source: sourceLoader,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Examples',
        description: (
          <Paragraph>
            You can change title and description of <Code>Loader</Code>{' '}
            component.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Spread Examples',
        description: (
          <Paragraph>
            <Code>Loader</Code> component can spread to their parent element if{' '}
            <Code>spread</Code> options is passed.
          </Paragraph>
        ),
        codeText: exampleSpread,
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
