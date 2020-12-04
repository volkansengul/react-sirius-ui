import React from 'react'
import { Avatar, AvatarInitials } from '../index'
import Box from '../../box/src/Box'
import { Paragraph, Code } from '../../typography'

// Code examples
import exampleAvatarBasic from './examples/basic.example'
import exampleAvatarInitials from './examples/initials.example'
import exampleAvatarSizes from './examples/sizes.example'
import exampleAvatarVariants from './examples/variants.example'

const name = 'Avatar'
const introduction = (
  <Paragraph>
    Avatar is a basic component that you can use to show a user's picture or
    initials.
  </Paragraph>
)

const scope = { Avatar, AvatarInitials, Box }

const components = [
  {
    name: 'Avatar',
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Avatar Example',
        description: (
          <Paragraph>
            Very basic <Code>Avatar</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleAvatarBasic,
        scope,
      },
      {
        title: 'Avatar Initials',
        codeText: exampleAvatarInitials,
        scope,
      },
      {
        title: 'Avatar Sizes',
        codeText: exampleAvatarSizes,
        scope,
      },
      {
        title: 'Avatar Variants',
        description: (
          <Paragraph>
            You can use contextual variants with <Code>AvatarInitials</Code>{' '}
            component.
          </Paragraph>
        ),
        codeText: exampleAvatarVariants,
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
