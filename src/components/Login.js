import React, { useState, useRef } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { validateSignIn } from '../utils/validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth}  from '../utils/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  // eslint-disable-next-line 
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = validateSignIn(emailValue, passwordValue);

    if (message) {
      setErrorMessage(message); // Set the validation error message
      toast.error(message); // Display the error message as a toast notification
      return false;
    }

    setErrorMessage(null); // Clear any existing error message
    // Proceed with form submission or other actions
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    // eslint-disable-next-line 
    const user = userCredential.user;
    toast.success('Login Successful!');
    navigate('/browse')


    // ...
  })
  .catch((error) => {
   

    toast.error('Incorrect Password')
  });


   
    return true;
  };

  return (
    <div className="relative">
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg')] bg-cover bg-center h-[100vh] w-full">
        <Header />

        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black tint effect on the page */}

        <div className="flex justify-center items-center h-[80vh] relative">
          <div className="max-w-[450px] text-white bg-[#000000b3] w-[450px] absolute z-10 p-[48px_68px] rounded-md">
            <h3 className="text-[2rem]">Sign In</h3>
            <form onSubmit={handleFormSubmit} method="post">
              <div className="border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md">
                <label>Email Address</label>
                <div>
                  <input ref={email} className="bg-inherit w-full border-none outline-none text-white leading-[1.5]" autoComplete="off" type="email" name="email" />
                </div>
              </div>
              <div className="border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md">
                <label>Password</label>
                <div>
                  <input ref={password} className="bg-inherit w-full border-none outline-none text-white leading-[1.5]" type="password" name="password" />
                </div>
              </div>
              <button className="btn bg-red-700 rounded-md text-center w-full my-5 p-4 text-[1.2rem]" type="submit">Sign In</button>
              <div className="mb-0 mt-4 m-0 p-0 text-white/70 text-base font-normal">
                <span>New to Netflix?</span><Link to="/signup" type="button"><span className='text-white font-bold cursor-pointer'>&nbsp;Sign up now.</span></Link>
              </div>
            </form>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
