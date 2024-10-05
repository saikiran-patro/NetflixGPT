import OpenAI from "openai";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU0OGZiOGMyNTM0MGZmOGU0OTY4MDU2MWFhOTM3MiIsIm5iZiI6MTcyNzM4MzQ2MC44OTU2MjUsInN1YiI6IjY2ZjNiNTZhZjViNDk3ODY0MzIyZWNhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NTeadaICNgFhbPeCPdt3KOcoSQ3NzbDGqZkKQ77HPZ8'
    }
  };

export const API_BASE_URL='https://api.themoviedb.org/3/movie/'
export const LANG_OPTIONS='?language=en-US&page=1'

export const API_BASE_VIDEO_URL='https://api.themoviedb.org/3/movie/'
export const LANG_VIDEO_OPTIONS='/videos?language=en-US'
export const IMG_BASE_URL='https://image.tmdb.org/t/p/original'

export const GEMINI_KEY='AIzaSyC6dHgfV7H9XuJEQvdsHW6HizvRNH2L3pw'
export const SEARCH_API='https://api.themoviedb.org/3/search/movie?include_adult=false&page=1'

// Pass the API key here
