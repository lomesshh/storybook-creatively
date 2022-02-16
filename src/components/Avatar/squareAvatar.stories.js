import React from 'react'
import Avatar from './squareAvatar'

export default {
    title: "Avatar/Square Avatar",
    component: Avatar
}

export const smallAvatar = () => {
    return(
        <Avatar variant='avatar__square__small' />
    )
}

export const mediumAvatar = () => {
    return(
        <Avatar variant='avatar__square__medium' />
    )
}

export const largeAvatar = () => {
    return(
        <Avatar variant='avatar__square__large' />
    )
}