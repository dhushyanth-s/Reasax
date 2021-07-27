import React from 'react'

import {RsButton, RsButtonProps} from '../lib/main'

import { Meta, Story } from '@storybook/react'

export default {
    title: 'Button',
    component: RsButton
} as Meta

const Template: Story<RsButtonProps> = (args) => <RsButton {...args}></RsButton>

export const Default = Template.bind({})

Default.args = {
    children: 'Default',
    type: 'bordered',
    onClick: () => {
        console.log("hello")
    },
    disabled: true
}