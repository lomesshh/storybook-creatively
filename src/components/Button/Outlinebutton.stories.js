import React from 'react'
import Button from './Outlinebutton'

export default {
    title: 'Button/Outline Buttons',
    component: Button
}

export const Primary = () => {
    return(
        <Button variant='primary__outline__button' >Primary Button</Button>
    )
}

export const Success = () => {
    return(
        <Button variant='success__outline__button' >Success Button</Button>
    )
}

export const Warning = () => {
    return(
        <Button variant='warning__outline__button' >Warning Button</Button>
    )
}

export const Danger = () => {
    return(
        <Button variant='danger__outline__button' >Danger Button</Button>
    )
}

export const Dark = () => {
    return(
        <Button variant='dark__outline__button' >Dark Button</Button>
    )
}

Primary.storyName = 'Primary Outline Button'
Success.storyName = 'Success Outline Button'
Warning.storyName = 'Warning Outline Button'
Danger.storyName = 'Danger Outline Button'
Dark.storyName = 'Dark Outline Button'