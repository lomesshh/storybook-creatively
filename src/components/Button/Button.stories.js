import React from 'react'
import Button from './Button'

export default {
    title: 'Button/Default Buttons',
    component: Button,
    args: { textColor: "white" },
    argTypes: { onClick: { action: 'clicked' } }
}

const Template = args => <Button {...args} />


export const Primary = Template.bind({})
Primary.args = {
    backgroundColor: '#1C8CCF',
    children: 'Primary Button'
}

export const Success = Template.bind({})
Success.args = {
    backgroundColor: '#198754',
    children: 'Success Button'
}

export const Warning = Template.bind({})
Warning.args = {
    backgroundColor: '#F1BB16',
    children: 'Warning Button'
}

export const Danger = Template.bind({})
Danger.args = {
    backgroundColor: '#DC3545',
    children: 'Danger Button'
}

export const Dark = Template.bind({})
Dark.args = {
    backgroundColor: '#333333',
    children: 'Dark Button'
}


Primary.storyName = 'Primary Button'
Success.storyName = 'Success Button'
Warning.storyName = 'Warning Button'
Danger.storyName = 'Danger Button'
Dark.storyName = 'Dark Button'