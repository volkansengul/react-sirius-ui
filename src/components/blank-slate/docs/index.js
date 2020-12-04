import React from 'react'
import { BlankSlate } from '..'
import { Paragraph, Code, Box, Button, Divider } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceBlankSlate from '!raw-loader!../src/BlankSlate'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleAdvanced from './examples/advanced.example'

const name = 'Blank Slate'
const introduction = (
  <Paragraph>
    Empty states are used when a list, table, or chart has no items or data to
    show. This is an opportunity to provide explanation or guidance to help
    users progress. The empty state component is intended for use when a full
    page in the app is empty, and not for individual elements or areas in the
    interface.
  </Paragraph>
)

const scope = { Box, BlankSlate, Button, Divider }

const components = [
  {
    name: 'Blank Slate',
    source: sourceBlankSlate,
    underDevelopment: true,
    examples: [
      {
        title: 'Basic Example',
        description: (
          <Paragraph>
            Basic <Code>BlankSlate</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Advanced Example',
        description: (
          <Paragraph>
            You can change the properties of <Code>BlankSlate</Code> component.
          </Paragraph>
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
