import React from 'react'
import Input from './Input';

export default {
    title:'Input/Text',
    component: Input
}

export const smallInput = () => {
    return(
        <Input variant='inputText__small' />
    )
}

export const mediumInput = () => {
    return(
        <Input variant='inputText__medium' />
    )
}

export const largeInput = () => {
    return(
        <Input variant='inputText__large' />
    )
}