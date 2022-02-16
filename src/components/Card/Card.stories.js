import React from 'react'
import Card from './Card'

export default {
    title: 'Card/Cards',
    component: Card
}

export const primaryCard = () => {
    return (
    <Card variant='cardOne' />
    )
}

export const secondaryCard = () => {
    return (
    <Card variant='cardTwo' />
    )
}

export const horizontalCard = () => {
    return (
    <Card variant='cardFive' />
    )
}

primaryCard.storyName = 'Vertical Card'
secondaryCard.storyName = 'Text Overlay Card'
horizontalCard.storyName = 'Horizontal Card'