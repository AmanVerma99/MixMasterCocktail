import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const { data } = await axios.get(`${singleCocktailUrl}${id}`);
    if (data.drinks) {
      return { id, drink: data.drinks[0] }; // Return the first drink
    } else {
      throw new Error('No drink found');
    }
  } catch (error) {
    return { error: error.message }; // Handle the error
  }
};

const Cocktail = () => {
  const { drink, error } = useLoaderData();

  if (error) {
    return (
      <Wrapper>
        <header>
          <Link to='/' className='btn'>Back Home</Link>
          <h3>Error: {error}</h3>
        </header>
      </Wrapper>
    );
  }

  const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions } = drink;

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>Back Home</Link>
        <h3>{name}</h3>
      </header>
      <div className='infor' style={{padding: '40px'}}>
        <div className='drink'>
          <img src={image} alt={name} className='img' />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>Name: </span>
              {name}
            </p>
            <p>
              <span className='drink-data'>Category: </span>
              {category}
            </p>
            <p>
              <span className='drink-data'>Info: </span>
              {info}
            </p>
            <p>
              <span className='drink-data'>Glass: </span>
              {glass}
            </p>
            <p>
              <span className='drink-data'>Instructions: </span>
              {instructions}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cocktail;
