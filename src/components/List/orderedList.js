import React from 'react'
import './orderedList.css'

const OrderedList = ({ type='ordered-list-number', ...rest }) => {
  return (
    <div>
        <ol className={type} {...rest}>
            <li>First Point</li>
            <li>Second Point</li>
            <li>Third Point</li>
        </ol>
    </div>                                                                                                         
  )
}

export default OrderedList