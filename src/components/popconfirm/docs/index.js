import React from 'react'
import { PopConfirm } from '..'
import { Paragraph, Code, Box, Button } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourcePopconfirm from '!raw-loader!../src/PopConfirm'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'

const name = 'Pop Confirm'
const introduction = (
  <Paragraph>
    A simple and compact dialog used for asking for user confirmation. It's more
    lightweight than the static popped full-screen confirm modal.
  </Paragraph>
)

const scope = { Box, Button, PopConfirm }

const components = [
  {
    name: 'Pop Confirm',
    source: sourcePopconfirm,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Popconfirm Example',
        description: (
          <Paragraph>
            Very basic <Code>Popconfirm</Code> component examples.
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
