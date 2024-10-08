import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const StaggerAnimation = () => {
 
  const  movieList=useSelector( store => store.suggestedMovie.recommendedMovieNameList)
  const  recommendedMovieList = useSelector( store => store.suggestedMovie.recommendedMovieList)

    return (
        <AnimatePresence>
    <motion.div
    
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 1 }}
    exit={{ scaleY: 0, opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    style={{ transformOrigin: "center", overflow: "hidden" }} // Center the bulge effect
    className=" h-[90%] w-[80%] flex justify-center items-center max-lg:w-[100vw]"
    >
    
       
     <div className=" suggestionsContainer  p-4 bg-transparent rounded-lg w-[80%] h-[80vh] overflow-y-scroll   top-52 max-lg:w-[100%]">
      {
        movieList && movieList.map((movieItem,index)=>{
           return recommendedMovieList[index] &&  <MovieList key={movieItem} title={movieItem} data={recommendedMovieList[index]} ></MovieList>
        })
      }
      </div>

      

      
        
    
     
      </motion.div>
      </AnimatePresence>
  );
};

export default StaggerAnimation;
