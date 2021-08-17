import styled from 'styled-components';

export const RestaurantsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-image: linear-gradient(to right, black 0%, #434343 100%);
  color: #fff;
`;

export const RestaurantWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const RestaurantCard = styled.div`
  margin: 2.5rem;
  line-height: 2;
  width: 300px;
`;

export const RestaurantImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 5px 5px #fdc100;
  border-radius: 4px;
`;

export const RestaurantHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const RestaurantTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

export const RestaurantAddress = styled.p`
  margin-bottom: 1rem;
`;

export const RestaurantCategory = styled.p`
  margin-bottom: 1rem;
`;

export const RestaurantNeighborhood = styled.p`
  margin-bottom: 1rem;
`;

export const RestaurantPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const RestaurantButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
