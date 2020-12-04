import React from 'react'
import { Table, TableCell, TableResponsive } from '../'
import { Box } from '../../box'
import { Tag } from '../../tag'
import { Paragraph, Code, Link } from '../../typography'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceTable from '!raw-loader!../src/Table'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'

const name = 'Table'
const introduction = (
  <Paragraph>
    A table displays rows of data. Use <Code>Table</Code> To display a
    collection of structured data, sort, search, paginate, filter data. The{' '}
  </Paragraph>
)

const scope = { Box, Table, TableResponsive, TableCell, Tag, Link }

const components = [
  {
    name: 'Table',
    source: sourceTable,
    underDevelopment: true,
    examples: [
      {
        title: 'Basic Example',
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
