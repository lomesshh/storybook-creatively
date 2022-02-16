import React from 'react'
import Avatar from './Avatar'

export default {
    title: "Avatar/Circular Avatar",
    component: Avatar
}

export const smallAvatar = () => {
    return(
        <Avatar variant='avatar__small' />
    )
}

export const mediumAvatar = () => {
    return(
        <Avatar variant='avatar__medium' />
    )
}

export const largeAvatar = () => {
    return(
        <Avatar variant='avatar__large' />
    )
}