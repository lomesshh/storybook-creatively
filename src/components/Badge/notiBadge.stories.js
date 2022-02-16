import React from 'react'
import Badge from './notiBadge'

export default{
    title:"Badge/Notification Badge",
    component: Badge
}

export const notificaitonBadge = () => {
    return (
        <Badge variant='badge-notification'/>
    )
}