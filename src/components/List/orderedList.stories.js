import React from 'react'
import OrderedList from './orderedList';

export default {
    title: 'List/Ordered List',
    component: OrderedList
}

export const Number = () => {
    return(
        <OrderedList type='ordered-list-number' />
    )
}

export const UpperRoman = () => {
    return(
        <OrderedList type='ordered-list-upper-roman' />
    )
}

export const LowerRoman = () => {
    return(
        <OrderedList type='ordered-list-lower-roman' />
    )
}

export const UpperAlpha = () => {
    return(
        <OrderedList type='ordered-list-upper-alpha' />
    )
}

export const LowerAplha = () => {
    return(
        <OrderedList type='ordered-list-lower-alpha' />
    )
}