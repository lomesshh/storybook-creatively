import React from 'react'
import './radioInput.css'

const RadioInput = ({ variant, ...rest }) => {
  return (
    <div>
        <input className={`radio ${variant}`} {...rest} type="radio" value="Dogs" name="demo" /> Dogs<br />
        <input className={`radio ${variant}`} {...rest} type="radio" value="Crow" name="demo" /> Crow<br />
        <input className={`radio ${variant}`} {...rest} type="radio" value="Swan" name="demo" /> Swan<br />
        <input className={`radio ${variant}`} {...rest} type="radio" value="Swan" name="demo" /> Goats<br />
    </div>
  )
}

export default RadioInput