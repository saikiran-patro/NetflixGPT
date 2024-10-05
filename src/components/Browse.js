import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import Header from './Header';
import useListMovies from '../utils/hooks/useListMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import SuggestionsContainer from './SuggestionsContainer';
import { useSelector } from 'react-redux';






const Browse = () => {

  useListMovies();
 
 
  const suggestedWindow=useSelector( store => store.suggestedMovie.showWindow)


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {suggestedWindow && <SuggestionsContainer /> }
    </div>
  );
};

export default Browse;
