import React from 'react'
import { Tooltip } from '..'
import {
  Paragraph,
  Code,
  Box,
  Button,
  Text,
  Strong,
  IconAircraft,
} from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceTooltip from '!raw-loader!../src/Tooltip'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleAdvanced from './examples/advanced.example'

const name = 'Tooltip'
const introduction = (
  <Paragraph>
    A simple text popup tip. The Tooltip component is used to describe
    something. In some cases tooltips are used to show more content, this should
    be used cautiously since it is hard to be completely accessible.
  </Paragraph>
)

const scope = { Box, Button, Tooltip, Text, IconAircraft, Strong }

const components = [
  {
    name: 'Tooltip',
    source: sourceTooltip,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Tooltip Example',
        description: (
          <Paragraph>
            Very basic <Code>Tooltip</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Advanced Tooltip Examples',
        description: (
          <Paragraph>
            You can use rich html content with <Code>Tooltip</Code> component
            too. Also it handles very long content.
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
