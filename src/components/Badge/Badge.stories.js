import React from 'react'
import Badge from './Badge'

export default {
    title: 'Badge/Status Badge',
    component: Badge
}

export const onlineBadge = () => {
    return (
        <Badge variant='status__online'/>
    )
}

export const offlineBadge = () => {
    return (
        <Badge variant='status__offline'/>
    )
}