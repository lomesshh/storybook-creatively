import React from 'react'
import './Heading.css'

const Heading = ({ tag, ...rest }) => {
  return (
    <text className={tag} {...rest}>Heading - {tag}</text>
  )
}

export default Heading