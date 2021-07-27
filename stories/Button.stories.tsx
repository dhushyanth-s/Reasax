import React from 'react'

import {RsButton, RsButtonProps} from '../lib/main'

import { Meta, Story } from '@storybook/react'

export default {
    title: 'Button',
    component: RsButton,
    argTypes: {
        type: {
            options: ['default', 'flat', 'bordered', 'transparent', 'shadow'],
            control: {type: 'radio'}
        }
    },
} as Meta

const Template: Story<RsButtonProps> = (args) => <RsButton {...args}></RsButton>

export const Default = Template.bind({})
Default.args = {
    children: 'Default',
}

export const Flat = Template.bind({})
Flat.args = {
    children: 'Flat',
    type: 'flat'
}

export const Bordered = Template.bind({})
Bordered.args = {
    children: 'Bordered',
    type: 'bordered'
}

export const Transparent = Template.bind({})
Transparent.args = {
    children: 'Transparent',
    type: 'transparent'
}

export const Shadow = Template.bind({})
Shadow.args = {
    children: 'Shadow',
    type: 'shadow'
}