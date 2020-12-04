import React from 'react'
import Alert from '../src/Alert'
import { Box } from '../../../elements/box'
import { Paragraph, Code } from '../../../elements/typography'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceAlert from '!raw-loader!../src/Alert'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleVariants from './examples/variants.example'
import exampleAdvanced from './examples/advanced.example'

const name = 'Alert'
const introduction = (
  <Paragraph>
    Provide contextual feedback messages for typical user actions with the
    handful of available and flexible alert messages. Alerts are available to
    any length of text. You can use title and text at the same time.
  </Paragraph>
)

const scope = { Alert, Box }

const components = [
  {
    name: 'Alert',
    source: sourceAlert,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Alert Example',
        description: (
          <Paragraph>
            Very basic <Code>Alert</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Alert Variants',
        description: <Paragraph>Alert have contextual variants.</Paragraph>,
        codeText: exampleVariants,
        scope,
      },
      {
        title: 'Advanced Alert Examples',
        description: (
          <Paragraph>Here are some advanced alert examples.</Paragraph>
        ),
        codeText: exampleAdvanced,
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
