import React from 'react'
import Component from '@reactions/component'

import Radio from '../src/Radio'
import RadioGroup from '../src/RadioGroup'
import { Box } from '../../box'
import { Paragraph, Code } from '../../typography'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceRadio from '!raw-loader!../src/Radio'
import sourceRadioGroup from '!raw-loader!../src/RadioGroup'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleGroup from './examples/group.example'

const name = 'Radio'
const introduction = (
  <Paragraph>
    The radio and radio group are used for selecting a single option from a
    list. If you need to have an unselected state, just add a radio button with
    a None option.
  </Paragraph>
)

const scope = { Box, Radio, RadioGroup, Component }

const components = [
  {
    name: 'Radio',
    source: sourceRadio,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Radio Example',
        description: (
          <Paragraph>
            Very basic <Code>Radio</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
    ],
  },
  {
    name: 'Radio Group',
    source: sourceRadioGroup,
    underDevelopment: false,
    examples: [
      {
        title: 'Radio Group Example',
        description: (
          <Paragraph>
            Controller <Code>RadioGroup</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleGroup,
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
