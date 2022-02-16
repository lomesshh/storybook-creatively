import React from 'react'
import './Avatar.css'

const Avatar = ({ variant='avatar__small', ...rest }) => {
  return (
    <div class={`avatar ${variant}`} {...rest}>
        <img src="https://i.postimg.cc/MTV5NzZc/avatardemo.png" alt="avatar-demo" />
    </div>
  )
}

export default Avatar