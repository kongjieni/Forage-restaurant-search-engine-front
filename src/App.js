import React from 'react';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Restaurants from './components/Restaurants/RestaurantsContainer';
import Footer from './components/Footer';

function App() {

  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = () => {
    fetch('http://localhost:3000/restaurants')
      .then(response => response.json())
      .then(apiRestaurants => setRestaurants(apiRestaurants))
  }

  useEffect(getRestaurants, [])

  // if (restaurants.length === 0) {
  //   return (
  //     <Router>
  //       <GlobalStyle />
  //       <Hero />
  //       <Restaurants>Loading...</Restaurants>
  //       <Footer />
  //     </Router>
  //   );
  // }
  // else {   
    return (
      <Router>
        <GlobalStyle />
        <Hero restaurants={restaurants}/>
        <Restaurants restaurants={restaurants} />
        <Footer />
      </Router>
    );
  }

export default App;
