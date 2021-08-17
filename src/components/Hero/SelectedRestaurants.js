import React from 'react'
import './RestaurantCard.css'

function SelectedRestaurants( {restaurants} ) {

    return (
        <div className="restaurant-card">
          <img className="restaurant-img" src={restaurants[0]?.image}></img>
          <div className="restaurant-info">
            <h2 className="restaurant-name">{restaurants[0]?.name}</h2>
            <p className="general-info">{restaurants[0]?.category}</p>
            <p className="general-info">{restaurants[0]?.neighborhood}</p>
            <p className="general-info">{restaurants[0]?.address}</p>
            <p className="restaurant-price">{restaurants[0]?.price}</p>
          </div>
        </div>
    )
}

export default SelectedRestaurants;