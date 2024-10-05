import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector((store)=> store.movies)
    const movieCategory = ["Now Playing", "Popular", "Top Rated" , "Upcoming"]
    const movieMapper={
        'Now Playing':'nowPlayingMovies',
        'Popular':'popularMovies',
        'Top Rated':'topRatedMovies',
        'Upcoming':'upComingMovies'
    }
  return (
    <div className="bg-black">
         { movies && movieCategory.map((category)=> <MovieList key={category} title={category} data={movies[movieMapper[category]]} ></MovieList>) }

         
     
        
        </div>
  )
}

export default SecondaryContainer