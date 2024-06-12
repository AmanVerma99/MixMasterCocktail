import { useLoaderData } from "react-router-dom";
// import axios from 'axios';
// import CocktailList from '../components/CocktailList';
import axios from 'axios';
import CocktailList from '../components/CocktailList'
import SearchForm from "../components/SearchForm";
const CocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

import { useQueries, useQuery } from "@tanstack/react-query";

export const loader = async ({request}) => {
  console.log(request);
  const url = new URL(request.url);

    const searchTerm = url.searchParams.get('search') || '';
    const response = await axios.get(`${CocktailSearchUrl}${searchTerm}`);
    return {drinks :response.data.drinks, searchTerm};
};

// const searchCocktailsQuery = (searchTerm) =>{
//     return {
//         queryKey: ['search',searchTerm || 'all'],
//         queryFn: async () =>{
//             const response = await axios.get(`${CocktailSearchUrl}${searchTerm}`);
//             return response.data.drinks;
//         },
//     };
// };

// export const loader =
//   (queryClient) =>
//   async ({ request }) => {
//     const url = new URL(request.url);

//     const searchTerm = url.searchParams.get('search') || '';
//     await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
//     return { searchTerm };
//   };


  const Landing = () =>{
    const { drinks ,searchTerm } = useLoaderData();
    // console.log(drinks);
    // console.log('hi');
    return (
        <>
            <SearchForm searchTerm={searchTerm}  />

            <CocktailList drinks={drinks} />
        </>
    );
  };
  export default Landing;