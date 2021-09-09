import React from 'react'

import { RsInput } from '../lib/main'

import { Meta, Story } from '@storybook/react'

export default {
  title: 'Input',
  component: RsInput,
  argTypes: {
    labelType: {
      options: ['subtle', 'fixed', 'floating'],
      control: { type: 'radio' },
    },
  },
} as Meta

const Template: Story = (args) => (
  <RsInput
    {...args}
  ></RsInput>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Default',
  // label: 'Label',
  prefix: 'https',
  loading: true
}