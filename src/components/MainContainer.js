import React from 'react'

import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
const MainContainer = () => {

    const popularMovies= useSelector(store=> store.movies?.popularMovies)
    const mainMovie=popularMovies? (popularMovies[0]) :(null)
    if(mainMovie===null) return;

 
  return (
   
   
    
    
    <div className=" relative">
        
      <VideoTitle title={mainMovie.title} description={mainMovie.overview} movieId={mainMovie.id} />
      <VideoBackground movieId={mainMovie.id}/>    
        
      
        
        
    </div>

  )
}

export default MainContainer