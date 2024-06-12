import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import About from './pages/About';
import HomeLayout from './pages/HomeLayout';
import Newsletter , {action as newsLetterAction} from './pages/Newsletter';
import Error from './pages/Error';
import Landing from './pages/Landing';
import SinglePageError from './pages/SinglePageError';
import { loader as landingLoader } from './pages/Landing';
import Cocktail from './pages/Cocktail';
import { loader as singleCocktailLoader } from './pages/Cocktail';
// import { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        // path: 'Landing',
        index:true,
        element: <Landing />,
        errorElement:<SinglePageError/>,
        loader: landingLoader,
      },
      {
        path: 'about',
        element: <About />,
        errorElement:   <SinglePageError/>,

      },
      {
        path: 'Newsletter',
        element: <Newsletter/>,
        action : newsLetterAction,
        
      },
      {
        path: 'Cocktail/:id',
        element: <Cocktail/>,
        loader:singleCocktailLoader,
        errorElement:<SinglePageError/>,
      }
    ],
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
