import React from 'react'
import './Alert.css'


const Alert = ({ variant='primary__alert', children, ...rest  }) => {
  return (
    <p className={`alert ${variant}`} {...rest}>
        {children}
    </p>
  )
}

export default Alert