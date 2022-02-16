import React from 'react'
import './notiBadge.css'

const Badge = ({ variant, ...rest }) => {
  return (
    <div class={`badge ${variant}`} {...rest}>
        <i class="fa-solid fa-bell"></i>
        <div>20</div>
    </div>
  )
}

export default Badge