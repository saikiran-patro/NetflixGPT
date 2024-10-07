import React from 'react';
import Stag from './Stag';
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toggleWindow, toggleShimmer } from '../utils/suggestedMoviesSlice';
import RecommendedMoviesShimmer from './RecommendedMoviesShimmer';

const SuggestionsContainer = () => {
  const dispatch = useDispatch();
  const showShimmer = useSelector((store) => store.suggestedMovie.showShimmer);

  const closeWindow = () => {
    dispatch(toggleWindow());
    dispatch(toggleShimmer());
  };

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-center items-center fixed top-0 backdrop-blur-2xl z-30">
      {showShimmer ? (
        <RecommendedMoviesShimmer />
      ) : (
        <div className="w-[100%] flex justify-end items-center flex-col">
          <div className="flex justify-end items-center w-[80%] text-white text-3xl cursor-pointer" onClick={closeWindow}>
            <IoCloseOutline />
          </div>
          <div className="flex justify-center items-center text-white font-bold text-[2rem]">
            Recommend Movies
          </div>
          <Stag />
        </div>
      )}
    </div>
  );
};

export default SuggestionsContainer;
