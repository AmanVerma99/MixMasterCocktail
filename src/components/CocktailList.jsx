import React from 'react'
import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard';
const CocktailList = ({drinks}) => {
    if(!drinks){
        return (
            <h4 style={{textAlign: 'center'}}>kuch shi value search kr bhai.. ye nhi milri</h4>
        )
    }
    const formattedDrinks = drinks.map((item)=>{
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item;
        return {id: idDrink ,
            name:strDrink ,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass
        };
    });
    return  <Wrapper>
        {formattedDrinks.map((item)=>{
            return <CocktailCard key={item.id} {...item}/>
        })}
    </Wrapper>
} 

export default CocktailList