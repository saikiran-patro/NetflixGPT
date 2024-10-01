import React from 'react'

import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
const MainContainer = () => {

    const nowPlayingMovies= useSelector(store=> store.movies?.nowPlayingMovies)
    const mainMovie=nowPlayingMovies? (nowPlayingMovies[0]) :(null)
    if(mainMovie===null) return;

 
  return (
   
   
    
    
    <div className=" relative">
        
      <VideoTitle title={mainMovie.title} description={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id}/>    
        
      
        
        
    </div>

  )
}

export default MainContainer