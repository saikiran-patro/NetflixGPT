import React from 'react'

import { MdKeyboardArrowLeft,MdKeyboardArrowRight  } from "react-icons/md";

import MovieItem from './MovieItem';
import useController from '../utils/hooks/useController';
const MovieCard = ({movies}) => {
   const[imageContainerRef,scrollLeft,scrollRight] =useController()

   console.log("debug check",movies)
    
   
  return (

   <div className="relative">
     <button onClick={scrollLeft} id="scrollLeft" className="px-4 py-2 bg-transparent text-4xl absolute top-[35%] text-white z-20">
     <MdKeyboardArrowLeft />
      </button>
    <div ref={imageContainerRef} className="imageContainer flex  align-center overflow-x-scroll flex-nowrap" >
     
      {
        movies && movies.map((movie, i) => movie.backdrop_path!==null && <MovieItem movie={movie}/>)
      }


    </div>
    <button onClick={scrollRight} id="scrollRight" className="px-4 py-2 bg-transparent text-4xl text-white absolute right-0  top-[35%] z-20">
    <MdKeyboardArrowRight />
      </button>
    </div>
  )
}

export default MovieCard