import React from 'react'
import List from './unorderedList';

export default {
    title: 'List/Unordered List',
    component: List
}

export const unorderedCircle = () => {
    return(
        <List type='unordered-list-circle' />
    )
}

export const unorderedSquare = () => {
    return(
        <List type='unordered-list-square' />
    )
}