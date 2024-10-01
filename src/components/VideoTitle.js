import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({title,description}) => {
  return (
    <div className=' h-[100vh] w-[100vw] relative flex justify-start align-middle bg-gradient-to-r from-black to-transparent ' style={{background: "linear-gradient(to right, black , transparent)" ,height: 'calc(80vh - 10rem)'}}>
  <div className="px-[50px] text-white  absolute top-[18%]  ">
     
     <h1 className="text-6xl font-bold my-3">{title}</h1>
     <p className="w-1/4 my-[20px]">{description}</p>
     <div className="flex gap-8">
        <button className="flex justify-center items-center gap-2.5 bg-white text-black px-8 py-2.5 rounded cursor-pointer"> <FaPlay /> Play</button>
        <button className="flex justify-center items-center gap-2.5  bg-slate-400    text-black px-8 py-2.5 rounded cursor-pointer   "> <FaInfoCircle /> More Info</button>
       
     </div>

  </div>

    </div>
  
  )
}

export default VideoTitle