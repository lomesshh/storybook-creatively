import React from 'react'
import './Input.css'

const Input = ({ variant='inputText__small', ...rest }) => {
  return (
    <input type="text" placeholder='Type here' className={`inputText ${variant}`} {...rest} />
  )
}

export default Input