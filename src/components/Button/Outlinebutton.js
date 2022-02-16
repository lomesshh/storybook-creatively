import React from 'react'
import './Outlinebutton.css'


const OutlineButton = ({ variant='primary__outline__button', children, ...rest  }) => {
  return (
    <button className={`outlinebutton ${variant}`} {...rest}>
        {children}
    </button>
  )
}

export default OutlineButton