import React from 'react'
import './Button.css'


const Button = ({ variant='primary__button', children, backgroundColor, textColor, ...rest  }) => {
  return (
    <button className={`button ${variant}`} style={{ backgroundColor: backgroundColor, color: textColor }}  {...rest}>
        {children}
    </button>
  )
}

export default Button