import React from 'react'
import { Image, ImageFluid } from '../'
import { Box } from '../../box'
import { Paragraph, Code } from '../../typography'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceImage from '!raw-loader!../src/Image'
import sourceImageFluid from '!raw-loader!../src/ImageFluid'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleFluid from './examples/fluid.example'

const name = 'Image'
const introduction = (
  <Paragraph>
    Documentation and examples for opting images into responsive behavior (so
    they never become larger than their parent elements) and add lightweight
    styles to them—all via classes.
  </Paragraph>
)

const scope = { Box, Image, ImageFluid, Paragraph }

const components = [
  {
    name: 'Image',
    source: sourceImage,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Image Example',
        description: (
          <Paragraph>
            Very basic <Code>Image</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
    ],
  },
  {
    name: 'ImageFluid',
    source: sourceImageFluid,
    underDevelopment: false,
    examples: [
      {
        title: 'Fluid Image Example',
        description: (
          <Paragraph>
            Very basic <Code>ImageFluid</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleFluid,
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
