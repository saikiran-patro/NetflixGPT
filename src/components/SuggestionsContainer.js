import React from 'react'
import Stag from './Stag'
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { toggleWindow } from '../utils/suggestedMoviesSlice';
const SuggestionsContainer = () => {
    
    const dispatch=useDispatch()
    const closeWindow=()=>{
          
        dispatch(toggleWindow())
   
    }
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-center items-center absolute top-0 backdrop-blur-2xl z-30">
        <div className="flex justify-end items-center w-[80%] text-white text-3xl cursor-pointer" onClick={closeWindow}><IoCloseOutline /></div>
        <div className="flex justify-center items-center text-white font-bold text-[2rem] ">Recommend Movies</div>
        <Stag /></div>
  )
}

export default SuggestionsContainer