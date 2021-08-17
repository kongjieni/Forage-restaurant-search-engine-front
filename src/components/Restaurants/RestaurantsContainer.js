import React from 'react';
import {
  RestaurantsContainer,
  RestaurantWrapper,
  RestaurantHeading,
  RestaurantTitle,
  RestaurantCard,
  RestaurantImg,
  RestaurantInfo,
  RestaurantAddress,
  RestaurantPrice,
  RestaurantCategory,
  RestaurantNeighborhood
} from './RestaurantElements';

// function getRandom(restaurants, n) {
//   var result = new Array(n),
//       len = restaurants.length,
//       taken = new Array(len);
//   if (n > len)
//       throw new RangeError("getRandom: more elements taken than available");
//   while (n--) {
//       var x = Math.floor(Math.random() * len);
//       result[n] = restaurants[x in taken ? taken[x] : x];
//       taken[x] = --len in taken ? taken[len] : len;
//   }
//   return result;
// }

const getRandom = (restaurants, n) => {
  var result = new Array(n),
      len = restaurants.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = restaurants[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const Restaurants = ({ restaurants }) => {
  return (
    <RestaurantsContainer>
      <RestaurantHeading>Restaurants of the day</RestaurantHeading>
      <RestaurantWrapper>
        {restaurants.length > 3 && getRandom(restaurants, 3).map((restaurant, index) => {
          return (
            <RestaurantCard key={index}>
              <RestaurantImg src={restaurant.image} alt={restaurant.alt} />
              <RestaurantInfo>
                <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                <RestaurantCategory>{restaurant.category}</RestaurantCategory>
                <RestaurantNeighborhood>{restaurant.neighborhood}</RestaurantNeighborhood>
                <RestaurantAddress>{restaurant.address}</RestaurantAddress>
                <RestaurantPrice>{restaurant.price}</RestaurantPrice>
              </RestaurantInfo>
            </RestaurantCard>
          );
        })}
      </RestaurantWrapper>
    </RestaurantsContainer>
  );
};

export default Restaurants;
