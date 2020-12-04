import React from 'react'
import { Switch } from '..'
import { Paragraph, Code, Box } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSwitch from '!raw-loader!../src/Switch'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'

const name = 'Switch'
const introduction = (
  <Paragraph>
    The <Code>Switch</Code> component is used as an alternative for the Checkbox
    component. Except indeterminate and label are not supported.
  </Paragraph>
)

const scope = { Box, Switch }

const components = [
  {
    name: 'Switch',
    source: sourceSwitch,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Switch Example',
        description: (
          <Paragraph>
            Very basic <Code>Switch</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
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
