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
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards