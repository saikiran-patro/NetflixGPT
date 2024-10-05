import React, { useRef, useState } from 'react'
import WordRotate from "./WordRotate";
import { BorderBeam } from "./border-beam.jsx";
import { FaSearchengin } from "react-icons/fa";
import { GEMINI_KEY } from '../utils/constant';
import { SEARCH_API, API_OPTIONS } from '../utils/constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { toggleWindow ,getRecommendedMovie , getRecommendedMovieNames} from '../utils/suggestedMoviesSlice'
const { GoogleGenerativeAI } = require("@google/generative-ai");

const SearchBar = () => {

 const [query, setQuery]= useState("")
 const placeHolderTextRef = useRef(null);
 const inputRef = useRef(null); // Reference for the input field
 const dispatch=useDispatch()

// Function to hide the placeholder text when input is focused
function hidePlaceHolder() {
    if (placeHolderTextRef.current) {
      placeHolderTextRef.current.style.display = "none";
    }
  }

  // Function to show the placeholder text when input is blurred (out of focus)
  function showPlaceHolder() {
    if (inputRef.current && inputRef.current.value === "") { // Show only if input is empty
      if (placeHolderTextRef.current) {
        placeHolderTextRef.current.style.display = "flex"; // Restore display
      }
    }
  }
  async function searchMovie() {

    // dispatch an action to show the recommended movie window;

    dispatch(toggleWindow())


    const genAI = new GoogleGenerativeAI(GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const promptPrefix = "suggest some movies for the query and utilise some movie rating sources like IMDB , TMDB for this query";
    const prompt = query;
    const promptPostfix = '. Only give me names of 5 movies and comma seperated like this example : Dhruva, Dookudu, RRR, Kill, Maharishi. Strictly follow this rule a word seperated by a comma.';
    
    // Generate content
    const result = await model.generateContent(promptPrefix + prompt + promptPostfix);
    const results = result.response.text().split(',').map((r) => {
        if (r.includes('not') || r.includes('Sorry') || r.includes('Unfortunately')) return null;
        return r.trim();
    });
    dispatch(getRecommendedMovieNames(results))

    if (results.length && results.filter(item => item === null).length!==results.length) {
        // Use only valid results for fetching
        const movieObjects = results.map(async (result) => {
            if (result) { // Ensure we only fetch valid movie names
                try {
                    let movieObj = await fetch(SEARCH_API + "&query=" + result, API_OPTIONS); // Include query parameter for the movie
                    let movieObjJson = await movieObj.json();
                    return movieObjJson.results; // Return the movie data
                } catch (error) {
                    console.error(`Error fetching movie data for ${result}:`, error);
                    return null; // Return null if there's an error
                }
            }
            return null;
        });

        // Wait for all movie fetches to complete
        console.log("-----------Movie-------------");
        const listMovies = await Promise.all(movieObjects);
        
        // Filter out any null results
        const validMovies = listMovies.filter(movie => movie !== null );
        console.log(validMovies)
        dispatch(getRecommendedMovie(validMovies))
    }
    else{

        toast.error("No Results Found")
    }
}


  return (
    <div className='flex rounded-[10px] backdrop-blur-custom justify-center items-center gap-4 relative '>
              <div className='flex justify-center align-center gap-5 rounded-[10px]'>
                <input
                  type="text"
                  value={query}
                  onInput={(e)=> setQuery(e.target.value)}
                  className="bg-transparent p-3 rounded-[10px] outline-none border-collapse border-none text-white"
                  onFocus={hidePlaceHolder} // Hide placeholder on focus
                  onBlur={showPlaceHolder}  // Show placeholder on blur
                  ref={inputRef} // Reference to the input field
                />
                <BorderBeam />
                <div ref={placeHolderTextRef} onClick={hidePlaceHolder} className='cursor-pointer  placeHolderText flex justify-center gap-2 absolute left-3 top-0 h-[100%] items-center italic text-[#E88D67] text-[18px]'>
                  Search Movies:
                  <WordRotate
                    className="text-[18px] font-bold italic text-[#E88D67] dark:text-white"
                    words={[
                      "Action", "Adventure", "Biography", "Comedy", "Crime",
                      "Drama", "Family", "Fantasy", "History", "Horror", "Mystery", "Romance", "Sci-Fi", "Sports", "Thriller"
                    ]}
                  />
                </div>
              </div>
              <div className='text-[26px] text-[#E88D67] px-5 cursor-pointer' onClick={()=>searchMovie()}><FaSearchengin /></div>

              <ToastContainer
              position="top-right"
              autoClose={10000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />

           
            </div>
  )
}

export default SearchBar