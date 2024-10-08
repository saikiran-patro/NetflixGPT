import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import SearchBar from './SearchBar';
import { Sling as Hamburger } from 'hamburger-react'
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';


const Header = () => {

  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false)

  // eslint-disable-next-line
  const path = location.pathname.split('/')[1];

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        navigate('/');
      })
      .catch((error) => {
        // Handle error
        toast.error('Error during sign out.');
      });
  };

  

  // eslint-disable-next-line
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Sanitize the user object by picking only serializable properties
        const sanitizedUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        };
        // eslint-disable-next-line
        navigate('/browse');
        setIsSignIn(sanitizedUser);
        dispatch(addUser(sanitizedUser)); // Dispatch sanitized user
      } else {
        setIsSignIn(null);
        if (path === 'browse') {
          // eslint-disable-next-line
          navigate('/');
        }
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  // eslint-disable-next-line 
  }, [dispatch]);

  return (
    <header style={isSignIn? {background: "linear-gradient(to right, black , transparent)"}: {background:"transparent"}} className='bg-black-important max-w-[100%] px-[3rem] py-[1.5rem] m-auto relative flex items-center max-md:p-5 max-lg:fixed max-lg:z-20  max-lg:w-full max-lg:pl-0 '>
      { isSignIn ? (
         <div className="hidden max-lg:flex justify-center items-center px-2">
         <Hamburger  duration={0.6} color="white" size={32}  easing="ease-in" toggled={isOpen} toggle={setOpen} direction="right" />
         </div>
      ):(null)}
     
      <div className='z-[2] box-border inherit h-auto max-lg:mx-auto max-lg:my-0 max-lg:flex max-lg:justify-center max-lg:items-center'>
        <img src={require('../utils/images/logo.svg').default} className="w-[130px] max-md:w-[70%]" alt="Logo" />
      </div>

      {isSignIn ? (
        <div className='flex justify-between w-full max-lg:hidden'>
          <div className='flex w-1/2 ml-10 items-center'>
            <ol className='flex w-full text-white text-lg gap-[9%]'>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>Now Playing</li>
            </ol>
          </div>
          <div className='flex w-1/2 gap-4  justify-end items-center'>
            <SearchBar />
            <img className="w-[42px] rounded-[5px]" src={require('../utils/images/ProfilePic.jpg')} alt="Profile" />
            <button className='text-white border-none outline-none' onClick={handleSignout}>Sign out</button>
          </div>
        </div>
      ) : (null)}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AnimatePresence>
     { isOpen && isSignIn ? ( <Menu callSignOut={handleSignout}/>) :(null)

    }
    </AnimatePresence>     
    </header>
  );
}

export default Header;
