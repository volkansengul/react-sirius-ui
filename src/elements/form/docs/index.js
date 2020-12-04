import React from 'react'

import { FormGroup, FormHint, FormLabel, FormValidationMessage } from '../'
import { Button } from '../../button'
import { TextInput, TextArea, NumberInput, SelectInput } from '../../input'
import { Paragraph, Code } from '../../typography'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceFormGroup from '!raw-loader!../src/FormGroup'
import sourceFormHint from '!raw-loader!../src/FormHint'
import sourceFormLabel from '!raw-loader!../src/FormLabel'
import sourceFormValidationMessage from '!raw-loader!../src/FormValidationMessage'

import sourceTextInput from '!raw-loader!../../input/src/TextInput'
import sourceTextArea from '!raw-loader!../../input/src/TextArea'
import sourceNumberInput from '!raw-loader!../../input/src/NumberInput'
import sourceSelectInput from '!raw-loader!../../input/src/SelectInput'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleTextInput from './examples/textinput.example'
import exampleTextInputInline from './examples/textinput-inline.example'
import exampleTextInputSizes from './examples/textinput-sizes.example'

import exampleNumberInput from './examples/numberinput.example'
import exampleNumberInputAdvanced from './examples/numberinput-advanced.example'

import exampleSelectInput from './examples/selectinput.example'
import exampleSelectInputSizes from './examples/selectinput-sizes.example'

import exampleTextarea from './examples/textarea.example'
import exampleSink from './examples/sink.example'

const name = 'Form Elements'
const introduction = (
  <Paragraph>
    Examples and usage guidelines for form control styles, layout options, and
    custom components for creating a wide variety of forms.
  </Paragraph>
)

const scope = {
  FormGroup,
  FormHint,
  FormLabel,
  FormValidationMessage,
  TextInput,
  TextArea,
  NumberInput,
  SelectInput,
  Paragraph,
  Button,
}

const components = [
  {
    name: 'TextInput',
    source: sourceTextInput,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic TextInput Example',
        description: (
          <Paragraph>
            Very basic <Code>TextInput</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleTextInput,
        scope,
      },
      {
        title: 'Inline TextInput',
        description: (
          <Paragraph>
            You can use <Code>TextInput</Code> component as inline.
          </Paragraph>
        ),
        codeText: exampleTextInputInline,
        scope,
      },
      {
        title: 'Sizes',
        description: (
          <Paragraph>
            You can use different size variants for <Code>TextInput</Code>.
          </Paragraph>
        ),
        codeText: exampleTextInputSizes,
        scope,
      },
    ],
  },
  {
    name: 'NumberInput',
    source: sourceNumberInput,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic NumberInput Example',
        description: (
          <Paragraph>
            Very basic <Code>NumberInput</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleNumberInput,
        scope,
      },
      {
        title: 'Advanced NumberInput Example',
        description: (
          <Paragraph>
            You can find some advanced <Code>NumberInput</Code> component
            examples here.
          </Paragraph>
        ),
        codeText: exampleNumberInputAdvanced,
        scope,
      },
    ],
  },
  {
    name: 'SelectInput',
    source: sourceSelectInput,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic SelectInput Example',
        description: (
          <Paragraph>
            Very basic <Code>SelectInput</Code> component examples. No search
            and other capabilities. Use <Code>Combobox</Code> component for
            advanced functionality.
          </Paragraph>
        ),
        codeText: exampleSelectInput,
        scope,
      },
      {
        title: 'Select Sizes',
        description: (
          <Paragraph>
            You can use different size variants for <Code>SelectInput</Code>.
          </Paragraph>
        ),
        codeText: exampleSelectInputSizes,
        scope,
      },
    ],
  },
  {
    name: 'TextArea',
    source: sourceTextArea,
    underDevelopment: false,
    examples: [
      {
        title: 'TextArea Example',
        description: (
          <Paragraph>
            You can use <Code>TextArea</Code> component for multi-line inputs.
          </Paragraph>
        ),
        codeText: exampleTextarea,
        scope,
      },
    ],
  },
  {
    name: 'FormGroup',
    source: sourceFormGroup,
    underDevelopment: false,
    examples: [
      {
        title: 'Form Elements Sink',
        description: (
          <Paragraph>
            You can find some examples using all of the form elements.
          </Paragraph>
        ),
        codeText: exampleSink,
        scope,
      },
    ],
  },
  {
    name: 'FormLabel',
    source: sourceFormLabel,
    underDevelopment: false,
    examples: [],
  },
  {
    name: 'FormHint',
    source: sourceFormHint,
    underDevelopment: false,
    examples: [],
  },
  {
    name: 'FormValidationMessage',
    source: sourceFormValidationMessage,
    underDevelopment: false,
    examples: [],
  },
]

export default {
  name,
  introduction,
  components,
}
