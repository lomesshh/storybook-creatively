import React from "react";
import CheckboxInput from './checkboxInput';

export default {
    title: 'Input/Checkbox',
    component: CheckboxInput
}

export const checkboxInput = () => {
    return (
        <CheckboxInput variant='square'/>
    )
}
