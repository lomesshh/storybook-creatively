import React from 'react'
import './Rating.css'

const Rating = () => {
  return (
    <div class="star-rating">
        <div class="star-container">
        <input type="radio" name="rate" id="star-5" />
        <label for="star-5" class="fas fa-star"></label>
        <input type="radio" name="rate" id="star-4" />
        <label for="star-4" class="fas fa-star"></label>
        <input type="radio" name="rate" id="star-3" />
        <label for="star-3" class="fas fa-star"></label>
        <input type="radio" name="rate" id="star-2" />
        <label for="star-2" class="fas fa-star"></label>
        <input type="radio" name="rate" id="star-1" />
        <label for="star-1" class="fas fa-star"></label>
        <div class="star-output">
            <h3></h3>
        </div>
        </div>
    </div>                                                                                                                                                                                                                                       
  )
}

export default Rating