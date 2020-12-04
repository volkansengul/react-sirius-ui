import React from 'react'
import { SkeletonBodyText, SkeletonHeading, SkeletonThumbnail } from '..'
import { Paragraph, Code, Box } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSkeletonBodyText from '!raw-loader!../src/SkeletonBodyText'
import sourceSkeletonHeading from '!raw-loader!../src/SkeletonHeading'
import sourceSkeletonThumbnail from '!raw-loader!../src/SkeletonThumbnail'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBody from './examples/body.example'
import exampleHeading from './examples/heading.example'
import exampleHeadingVariants from './examples/heading-variants.example'
import exampleThumbnail from './examples/thumbnail.example'

const name = 'Skeleton'
const introduction = (
  <Paragraph>
    Skeleton elements are used to provide a low fidelity representation of
    content before it appears on the page, and improves load times perceived by
    users.
  </Paragraph>
)

const scope = { Box, SkeletonBodyText, SkeletonHeading, SkeletonThumbnail }

const components = [
  {
    name: 'Skeleton Body Text',
    source: sourceSkeletonBodyText,
    underDevelopment: false,
    examples: [
      {
        title: 'Body Text Examples',
        description: (
          <Paragraph>
            <Code>SkeletonBodyText</Code> component also takes{' '}
            <Code>lines</Code> to render desired amount of lines.
          </Paragraph>
        ),
        codeText: exampleBody,
        scope,
      },
    ],
  },
  {
    name: 'Skeleton Heading',
    source: sourceSkeletonHeading,
    underDevelopment: false,
    examples: [
      {
        title: 'Heading Examples',
        description: (
          <Paragraph>
            <Code>SkeletonHeading</Code> component also takes <Code>width</Code>{' '}
            to render heading with desired width. Default width is{' '}
            <Code>200px</Code>.
          </Paragraph>
        ),
        codeText: exampleHeading,
        scope,
      },
      {
        title: 'Heading Variants',
        description: (
          <Paragraph>
            <Code>SkeletonHeading</Code> can also take <Code>variant</Code>{' '}
            property to match the exact same height of headings.
          </Paragraph>
        ),
        codeText: exampleHeadingVariants,
        scope,
      },
    ],
  },
  {
    name: 'Skeleton Thumbnail',
    source: sourceSkeletonThumbnail,
    underDevelopment: false,
    examples: [
      {
        title: 'Thumbnail Examples',
        description: (
          <Paragraph>
            <Code>SkeletonThumbnail</Code> component takes <Code>width</Code>{' '}
            and <Code>height</Code> properties. And also{' '}
            <Code>borderRadius</Code>.
          </Paragraph>
        ),
        codeText: exampleThumbnail,
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
