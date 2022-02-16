import React from 'react'
import './unorderedList.css'

const List = ({ type='unordered-list-circle', ...rest }) => {
  return (
    <div>
        <ul className={type} {...rest}>
            <li>First Point</li>
            <li>Second Point</li>
            <li>Third Point</li>
        </ul>
    </div>
  )
}

export default List