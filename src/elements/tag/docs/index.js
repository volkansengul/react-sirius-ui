import React from 'react'
import Tag from '../src/Tag'
import { Paragraph, Code } from '../../typography'

// Code examples
import exampleTag from './examples/tag.example'

const name = 'Tag'
const introduction = (
  <Paragraph>
    Documentation and examples for tags, our small labeling component.
  </Paragraph>
)

const scope = { Tag }

const components = [
  {
    name: 'Tag',
    underDevelopment: false,
    examples: [
      {
        title: 'Tags Example',
        description: (
          <Paragraph>
            Very basic <Code>Tag</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleTag,
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
