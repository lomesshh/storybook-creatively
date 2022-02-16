import React from 'react'
import Alert from './Alert'

export default {
    title: 'Alert/Default Alerts',
    component: Alert
}

export const Primary = () => {
    return(
        <Alert variant='primary__alert' >This is primary alert</Alert>
    )
}

export const Success = () => {
    return(
        <Alert variant='success__alert' >This is success alert</Alert>
    )
}

export const Warning = () => {
    return(
        <Alert variant='warning__alert' >This is warning alert</Alert>
    )
}

export const Danger = () => {
    return(
        <Alert variant='danger__alert' >This is danger alert</Alert>
    )
}

export const Dark = () => {
    return(
        <Alert variant='dark__alert' >This is dark alert</Alert>
    )
}

Primary.storyName = 'Primary Alert'
Success.storyName = 'Success Alert'
Warning.storyName = 'Warning Alert'
Danger.storyName = 'Danger Alert'
Dark.storyName = 'Dark Alert'