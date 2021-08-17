import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import RestaurantsCategories from './category'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroBtn
} from './HeroElements';
import SelectedRestaurants from './SelectedRestaurants';


const Hero = ({restaurants}) => {

  const [isOpen, setIsOpen] = useState(false);

  const [category, setCategory] = useState("Sushi")

  const [price, setPrice] = useState("$$$$")

  const [visible, setVisible] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getCategories = (restaurants) => {
    let categories = []
    restaurants.map( restaurant => {
      if (!categories.includes(restaurant.category)){
        categories.push(restaurant.category)
      }
    })
    return categories
  } 

  const setCategoryAndPrice = () => {
    let selectedCategory = document.querySelector("#selected-category").value
    let selectedPrice = document.querySelector("#selected-price").value
    setCategory(selectedCategory)
    setPrice(selectedPrice)
    setVisible(false)
  }

  const getMatchingRestaurants = () => {
    let matchingRestaurants = []
    {restaurants.map( restaurant => {
      if (restaurant.category === category && restaurant.price === price){
        matchingRestaurants.push(restaurant)
      }
    })}
    return matchingRestaurants
  }

  const displaySelectedRestaurants = (restaurants) => {
    return <SelectedRestaurants restaurants={restaurants}/>
  }

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <form>
            <label>Categories:  </label>
            <select id='selected-category' style={{marginRight: 15 + 'px'}}>
              {getCategories(restaurants).map(category => {
                return <RestaurantsCategories category={category} />
              })}
            </select>
            <label>Price:  </label>
            <select id='selected-price'>
              <option>$</option>
              <option>$$</option>
              <option>$$$</option>
              <option>$$$$</option>
            </select>
          </form>
          <HeroBtn onClick={() => setCategoryAndPrice()}>Search</HeroBtn>
          {visible ? null : displaySelectedRestaurants(getMatchingRestaurants())}
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
