import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation); // Useful for debugging; remove in production

  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';

  return (
    <>
      <Navbar />
      <section>
        {isPageLoading ? (
          <div className='badadabba'>
            <div className='loading'></div>
          </div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
