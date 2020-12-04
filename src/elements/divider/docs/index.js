import React from 'react'
import Divider from '../src/Divider'
import { Box } from '../../box'
import { Paragraph, Code, Text, Link } from '../../typography'
import { IconEdit } from '../../../icons'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceDivider from '!raw-loader!../src/Divider'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleVertical from './examples/vertical.example'

const name = 'Divider'
const introduction = (
  <Paragraph>
    A divider line separates different content. For example you can use{' '}
    <Code>Divider</Code> to divide sections of article, or Divide inline text
    and links such as the operation column of table.
  </Paragraph>
)

const scope = { Box, Divider, Paragraph, Text, Link, IconEdit }

const components = [
  {
    name: 'Divider',
    source: sourceDivider,
    underDevelopment: false,
    examples: [
      {
        title: 'Divider Examples',
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Vertical Dividers',
        description: (
          <Paragraph>
            Dividers can also be used vertically. Just set{' '}
            <Code>direction</Code> property to vertical.
          </Paragraph>
        ),
        codeText: exampleVertical,
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
