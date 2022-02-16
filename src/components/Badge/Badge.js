import React from 'react'
import './Badge.css'

const Badge = ({ variant='status-online', ...rest }) => {
  return (
    <div class="badge badge-status">
	    <img src="https://i.postimg.cc/MTV5NzZc/avatardemo.png" alt="badge-demo"/>
	    <div class={variant} {...rest}></div>
    </div>
  )
}

export default Badge