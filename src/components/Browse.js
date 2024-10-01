import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import useListMovies from '../utils/hooks/useListMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';





const Browse = () => {

  useListMovies();
 
 
  


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    
    </div>
  );
};

export default Browse;
