import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,data}) => {
  console.log("SaiKi")
  return (
    <div >
        <div className="p-[30px]">


       
        <div className="mt-[15px] mb-[24px] text-2xl text-white font-bold">
        {title}
        </div>
       
        <MovieCard title={title} movies={data}/>
        </div>

    </div>
  )
}

export default MovieList