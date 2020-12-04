import React from 'react'
import { Tab, TabGroup } from '..'
import { Paragraph, Code, Box, Button, Text, IconAddUser } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceTab from '!raw-loader!../src/Tab'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'

const name = 'Tabs'
const introduction = (
  <Paragraph>Tabs make it easy to switch between different views.</Paragraph>
)

const scope = { Box, Button, TabGroup, Tab, Text, IconAddUser }

const components = [
  {
    name: 'Tab',
    source: sourceTab,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Tab Example',
        description: <Paragraph>Basic tabbed navigation example.</Paragraph>,
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
