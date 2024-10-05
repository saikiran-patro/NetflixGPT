import React, { useState } from "react";
import { motion, stagger, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const StaggerAnimation = () => {
 
  const  movieList=useSelector( store => store.suggestedMovie.recommendedMovieNameList)
  const  recommendedMovieList = useSelector( store => store.suggestedMovie.recommendedMovieList)
  console.log("movei list",movieList)
    return (
        <AnimatePresence>
    <motion.div
    
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 1 }}
    exit={{ scaleY: 0, opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    style={{ transformOrigin: "center", overflow: "hidden" }} // Center the bulge effect
    className=" h-[90%] w-[80%] flex justify-center items-center"
    >
    
       
     <div className=" suggestionsContainer  p-4 bg-transparent rounded-lg w-[80%] h-[80vh] overflow-y-scroll   top-52">
      {
        movieList && movieList.map((movieItem,i)=>{
           return <MovieList key={movieItem} title={movieItem} data={recommendedMovieList[i]} ></MovieList>
        })
      }
      </div>

      

      
        
    
     
      </motion.div>
      </AnimatePresence>
  );
};

export default StaggerAnimation;
