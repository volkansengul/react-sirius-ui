import React from 'react'
import Box from '../src/Box'
import { Paragraph, Code } from '../../typography'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceBox from '!raw-loader!../src/Box'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBoxBasic from './examples/basic.example'
import exampleBoxAdvanced from './examples/advanced.example'

const name = 'Box'
const introduction = (
  <Paragraph>
    The <Code>Box</Code> component implementes a basic building block that takes
    a lot of styling options. You can use <Code>Box</Code> component as the main
    building block. This component uses almost every property from
    styled-system. <Code>Box</Code> is a required component for Muhsis UI to
    work, since it's referenced from other components to be used as building
    block.
  </Paragraph>
)

const scope = { Box }

const components = [
  {
    name: 'Box',
    source: sourceBox,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Box Example',
        description: (
          <Paragraph>
            Very basic <Code>Box</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBoxBasic,
        scope,
      },
      {
        title: 'Advanced Box Example',
        codeText: exampleBoxAdvanced,
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
