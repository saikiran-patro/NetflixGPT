import React from 'react'
import { IMG_BASE_URL } from '../utils/constant'
import { FcLike } from "react-icons/fc";
import { FaPlay } from "react-icons/fa";
import useMainTrailer from '../utils/hooks/useMainTrailer';
import { Link } from 'react-router-dom';
const MovieItem = ({movie}) => {
    function formatNumber(num) {
        if (num >= 1000 && num < 1000000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'; // Convert to 'k' format
        } else if (num >= 1000000 && num < 1000000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; // Convert to 'M' format
        } else if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'; // Convert to 'B' format
        } else {
            return num.toString(); // Return the number as is if less than 1000
        }
    }

    let movieVideo=useMainTrailer(movie.id)
  return (
    movieVideo && <div className="relative h-fit text-white cursor-pointer group">
  <div className="movieDetails absolute flex flex-col w-[300px] h-full bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h3 className="text-xl font-bold break-words">{movie.title}</h3>
    <div className="flex justify-end items-center gap-5 absolute bottom-2 right-2">
      <span className="flex justify-center items-center gap-2 bg-white text-black p-2 rounded-[10px]">
        <FcLike />
        <p>{formatNumber(movie?.vote_count)}</p>
      </span>
     
         
     <Link to={"https://www.youtube.com/watch?v="+movieVideo[0]?.key} target="_blank" rel="noopener noreferrer" > <span className="p-2 bg-transparent text-white rounded-full text-center flex justify-center items-center border-3 border-white" style={{ border: '3px solid white' }}>
        <FaPlay />
      </span></Link>
      
    </div>
  </div>
  <div className="imageHolder w-[300px]">
    <img key={movie.id} className="w-[300px] px-2 rounded-[15px]" src={IMG_BASE_URL + movie?.backdrop_path} alt="Netflix Video" />
  </div>
</div>
  )
}

export default MovieItem