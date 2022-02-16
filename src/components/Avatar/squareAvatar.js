import React from 'react'
import './squareAvatar.css'

const Avatar = ({ variant='avatar__square__small', ...rest }) => {
  return (
    <div class={`avatar__square ${variant}`} {...rest}>
        <img src="https://i.postimg.cc/MTV5NzZc/avatardemo.png" alt="avatar-demo" />
    </div>
  )
}

export default Avatar