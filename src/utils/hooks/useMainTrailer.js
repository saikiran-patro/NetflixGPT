import React, { useEffect, useState } from 'react';
import { API_OPTIONS, API_BASE_VIDEO_URL, LANG_VIDEO_OPTIONS } from '../constant';
const useMainTrailer = (movieId) => {
    const [movieVideo, setMovieVideo] = useState(null);

    useEffect(() => {
      const getMovieVideos = async (movieId) => {
        try {
          const response = await fetch(API_BASE_VIDEO_URL + movieId + LANG_VIDEO_OPTIONS, API_OPTIONS);
          const dataJson = await response.json();
          let listMovies = dataJson.results.filter((result) => result.type === 'Trailer');
          listMovies = listMovies.length ? listMovies : [dataJson.results[0]]; // Ensure it's an array
          console.log("Movie ID: ", movieId, listMovies);
          setMovieVideo(listMovies);
        } catch (error) {
          console.error('Error fetching movie videos:', error);
        }
      };
  
      if (movieId) {
        getMovieVideos(movieId);
      }
    }, [movieId]); // Added movieId to the dependency array

    return movieVideo;
}

export default useMainTrailer