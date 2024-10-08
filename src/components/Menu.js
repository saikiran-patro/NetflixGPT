import React from 'react';
import SearchBar from './SearchBar';
import { MdExitToApp } from "react-icons/md";
import { motion } from 'framer-motion';

const Menu = ({callSignOut}) => {
  return (
    <motion.div 
      className="md:hidden  fixed top-[75px] z-30 bg-black w-[100vw] h-[calc(100vh-75px)] flex flex-col justify-between"
      initial={{ x: '-100%' }}    // Start off-screen to the left
      animate={{ x: '0%' }}       // Slide in to the left
      exit={{ x: '-100%' }}        // Slide out to the left when unmounted
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration
    >
       <div>
         <div className='flex w-full ml-10 items-center'>
            <ol className='flex w-full text-white text-lg  flex-col justify-center p-[15px] gap-[30px]'>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>Now Playing</li>
            </ol>
          </div>
       </div>
       <div className='text-white flex justify-center items-center text-[16px] pb-5 flex-col gap-5'> 
         <div><SearchBar/></div>
         <span onClick={callSignOut} className='flex justify-center items-center'><span className='transform rotate-180'><MdExitToApp /></span>&nbsp;&nbsp;SignOut</span>
       </div>
    </motion.div>
  );
};

export default Menu;
