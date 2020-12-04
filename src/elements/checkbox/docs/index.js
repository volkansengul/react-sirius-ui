import React from 'react'
import Checkbox from '../src/Checkbox'
import { Box } from '../../box'
import { Paragraph, Code } from '../../typography'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceCheckbox from '!raw-loader!../src/Checkbox'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'

const name = 'Checkbox'
const introduction = (
  <Paragraph>
    The <Code>Checkbox</Code> component maps to a checkbox input and a label.
  </Paragraph>
)

const scope = { Box, Checkbox }

const components = [
  {
    name: 'Checkbox',
    source: sourceCheckbox,
    underDevelopment: false,
    examples: [
      {
        title: 'Checkbox States',
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
