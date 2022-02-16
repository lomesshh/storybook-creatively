import React from 'react'
import './checkboxInput.css'

const CheckboxInput = ({ variant, ...rest }) => {
  return (
      <div>
        <input className={`checkbox ${variant}`} {...rest} type="checkbox" value="Dogs" name="demo1" /> Dogs<br />
        <input className={`checkbox ${variant}`} {...rest} type="checkbox" value="Crow" name="demo2" /> Crow<br />
        <input className={`checkbox ${variant}`} {...rest} type="checkbox" value="Swan" name="demo2" /> Swan<br />
        <input className={`checkbox ${variant}`} {...rest} type="checkbox" value="Goats" name="demo3" /> Duck<br />
    </div>
    )
}

export default CheckboxInput