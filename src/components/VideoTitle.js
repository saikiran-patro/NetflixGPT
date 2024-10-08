import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useMainTrailer from '../utils/hooks/useMainTrailer';
const VideoTitle = ({title,description,movieId}) => {

    const movieVideo=useMainTrailer(movieId);
  return (
    movieVideo &&
    <div className='videoTitle h-[100vh] w-[100vw] relative flex justify-start align-middle bg-gradient-to-r from-black to-transparent ' style={{background: "linear-gradient(to right, black , transparent)" ,height: 'calc(80vh - 10rem)'}}>
  <div className="px-[50px] text-white  absolute top-[18%] max-lg:top-[90px] max-lg:w-[100vw] max-lg:p-[25px] ">
     
     <h1 className="text-6xl font-bold my-3 max-md:text-[18px]">{title}</h1>
     <p className="w-1/4 my-[20px] max-md:text-[12px] max-md:w-[80%] max-lg:w-[90%]">{description}</p>
     <div className="flex gap-8 max-md:justify-end">
     <Link to={"https://www.youtube.com/watch?v="+movieVideo[0]?.key} target="_blank" rel="noopener noreferrer" ><button className="flex justify-center items-center gap-2.5 bg-white text-black px-8 py-2.5 rounded cursor-pointer max-md:transform max-md:scale-[0.7]"> <FaPlay /> Play</button></Link>
        <button className="flex justify-center items-center gap-2.5  bg-[#ffcdbb]   text-black px-8 py-2.5 rounded cursor-pointer max-md:hidden "> <FaInfoCircle /> More Info</button>
       
     </div>

  </div>

    </div>
  
  )
}

export default VideoTitle