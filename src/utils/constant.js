import OpenAI from "openai";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };

export const API_BASE_URL='https://api.themoviedb.org/3/movie/'
export const LANG_OPTIONS='?language=en-US&page=1'

export const API_BASE_VIDEO_URL='https://api.themoviedb.org/3/movie/'
export const LANG_VIDEO_OPTIONS='/videos?language=en-US'
export const IMG_BASE_URL='https://image.tmdb.org/t/p/original'

export const GEMINI_KEY= process.env.REACT_APP_GEMINI_KEY
export const SEARCH_API='https://api.themoviedb.org/3/search/movie?include_adult=false&page=1'

// Pass the API key here
