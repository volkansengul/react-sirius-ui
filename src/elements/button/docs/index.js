import React from 'react'
import Button from '../src/Button'
import ButtonLink from '../src/ButtonLink'
import ButtonIcon from '../src/ButtonIcon'
import { Box } from '../../box'
import { Paragraph, Code } from '../../typography'
import {
  IconClipboard,
  IconTrash,
  IconSquaredPlus,
  IconSquaredCross,
  IconEdit,
} from '../../../icons'

// Code examples
import exampleBasic from './examples/basic.example'
import exampleBlock from './examples/block.example'
import exampleSizes from './examples/sizes.example'
import exampleVariants from './examples/variants.example'
import exampleStates from './examples/states.example'
import exampleLinks from './examples/links.example'
import exampleIcons from './examples/icon.example'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceButton from '!raw-loader!../src/Button'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

const name = 'Button'
const introduction = (
  <Paragraph>
    Use <Code>Button</Code> for actions in forms, dialogs, and more with support
    for multiple sizes, states, and more. Buttons align perfectly with inputs
    since they use same spacing variables.
  </Paragraph>
)

const scope = {
  Button,
  ButtonLink,
  ButtonIcon,
  Box,
  IconClipboard,
  IconTrash,
  IconSquaredPlus,
  IconSquaredCross,
  IconEdit,
}

const components = [
  {
    name: 'Button',
    source: sourceButton,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Example',
        description: (
          <Paragraph>
            Very basic <Code>Button</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Block Buttons',
        description: (
          <Paragraph>
            Buttons can be used as blocks. Simply set <Code>block</Code> option.
          </Paragraph>
        ),
        codeText: exampleBlock,
        scope,
      },
      {
        title: 'Sizes',
        description: (
          <Paragraph>
            There are 3 sizes you can use with buttons. <Code>sm</Code>,{' '}
            <Code>md</Code> and <Code>lg</Code>.
          </Paragraph>
        ),
        codeText: exampleSizes,
        scope,
      },
      {
        title: 'Variants',
        description: (
          <Paragraph>
            There are several contextual variants you can apply to buttons.
          </Paragraph>
        ),
        codeText: exampleVariants,
        scope,
      },
      {
        title: 'States',
        description: (
          <Paragraph>You can manage disable and loading states too.</Paragraph>
        ),
        codeText: exampleStates,
        scope,
      },
      {
        title: 'Links',
        description: (
          <Paragraph>
            If you want to use button styles with <Code>anchor</Code> elements,
            you can use <Code>ButtonLink</Code> component.
          </Paragraph>
        ),
        codeText: exampleLinks,
        scope,
      },
      {
        title: 'Icon Buttons',
        description: (
          <Paragraph>
            You can use icons with buttons. Don't remember why i did this?
          </Paragraph>
        ),
        codeText: exampleIcons,
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
