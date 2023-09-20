import React from 'react'
import CardItem from './CardItem';
import "../components/Cards.css"

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out These Epic Deals</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem
                src="images/img-9.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
                />
                 <CardItem
                src="images/img-8.jpg"
                text="Challenge yourself in 8 hour hike in Sahara desert"
                label="Hiking"
                path="/services"
                />
                 <CardItem
                src="images/img-2.jpg"
                text="Unforgettable 10 days trip to Bora Bora"
                label="Luxury"
                path="/services"
                />
                 <CardItem
                src="images/img-1.jpg"
                text="Have you ever dreamed of reach the top of the World? Climb mount Tibidabo"
                label="Hiking"
                path="/services"
                />
                 <CardItem
                src="images/img-5.jpg"
                text="Unforgetable night in the center of Miami with dinner"
                label="Hotels"
                path="/services"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
