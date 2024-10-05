import React, {useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import SearchBar from './SearchBar';


const Header = () => {

  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  

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
  }, [dispatch]);

  return (
    <header style={{background: "linear-gradient(to right, black , transparent)"}} className='max-w-[100%] px-[3rem] py-[1.5rem] m-auto relative flex items-center'>
      <div className='z-[2] box-border inherit h-auto'>
        <img src={require('../utils/images/logo.svg').default} className="w-[130px]" alt="Logo" />
      </div>

      {isSignIn ? (
        <div className='flex justify-between w-full'>
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
    </header>
  );
}

export default Header;
