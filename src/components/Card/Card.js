import React from 'react'
import './Card.css'

const Card = ({ variant='cardOne', ...rest }) => {
  return (
    <div class={`card ${variant}`} {...rest}>
        <div class="hidden__heading">
          <h2 class="card__info card__heading--first">Our Changing Planet</h2>
          <p class="card__info card__heading--second">by Kurt Wagner</p>
        </div>
        <div class="section__one">
          <div class="img">
            <img class="card__img" src="https://i.postimg.cc/Mps9bQWq/card-bg.jpg" alt="demo" />
          </div>
          <div class="heading">
            <h2 class="card__info card__heading--first">Our Changing Planet</h2>
            <p class="card__info card__heading--second">by Kurt Wagner</p>
          </div>
        </div>
        <div class="para">
          <p class="card__info card__desc">
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </p>
        </div>
        <div class="card__info card__footer">
          <div class="card__footer--first">
            <button class="card__button">READ</button>
            <button class="card__button">BOOKMARK</button>
          </div>
          <div class="card__info card__footer--second">
            <i class="far fa-heart"></i>
            <i class="fas fa-share-alt"></i>
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
  )
}

export default Card