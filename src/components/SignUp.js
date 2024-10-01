import React, { useState, useRef } from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import { validateSignUp } from '../utils/validate'; // Ensure you have this function
import { ToastContainer, toast } from 'react-toastify';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth}  from '../utils/firebase'
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const navigate=useNavigate()
  const [errorMessage, setErrorMessage] = useState(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const rePassword = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const fullNameValue = fullName.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const rePasswordValue = rePassword.current.value;

    const message = validateSignUp(emailValue, passwordValue, rePasswordValue);

    if (message) {
      setErrorMessage(message);
      toast.error(message); // Display the error message as a toast notification
      return false;
    }

    setErrorMessage(null);
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
    // Signed up 
       const user = userCredential.user;
       console.log(user);

       navigate('/browse')
    
       // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error("Already registered User");
    // ..
  });

    console.log("Form submitted with:", fullNameValue, emailValue, passwordValue, rePasswordValue);
    return true;
  };

  return (
    <div className="relative">
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg')] bg-cover bg-center h-[100vh] w-full">
        
        <Header />

        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black tint effect on the page */}
        <div className="flex justify-center items-center h-[80vh] relative">
          <div className='max-w-[450px] text-white bg-[#000000b3] w-[450px] absolute z-10 p-[48px_68px] rounded-md'>
            <h3 className="text-[2rem]">Sign Up</h3>
            <form onSubmit={handleFormSubmit}>
              <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'>
                <label htmlFor="name" className="cursor-pointer">Full Name</label>
                <div>
                  <input
                    id="name"
                    ref={fullName}
                    className="bg-inherit w-full border-none outline-none leading-[1.5]"
                    type="text"
                    name="name"
                    autoComplete="off"  // Disable autocomplete
                  />
                </div>
              </div>
              <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'>
                <label htmlFor="email" className="cursor-pointer">Email Address</label>
                <div>
                  <input
                    id="email"
                    ref={email}
                    className="bg-inherit w-full border-none outline-none leading-[1.5]"
                    type="email"
                    name="email"
                    autoComplete="off"  // Disable autocomplete
                  />
                </div>
              </div>
              <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'>
                <label htmlFor="password" className="cursor-pointer">Password</label>
                <div>
                  <input
                    id="password"
                    ref={password}
                    className="bg-inherit w-full border-none outline-none leading-[1.5]"
                    type="password"
                    name="password"
                    autoComplete="off"  // Disable autocomplete
                  />
                </div>
              </div>
              <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'>
                <label htmlFor="re-password" className="cursor-pointer">Re-enter Password</label>
                <div>
                  <input
                    id="re-password"
                    ref={rePassword}
                    className="bg-inherit w-full border-none outline-none leading-[1.5]"
                    type="password"
                    name="re-password"
                    autoComplete="off"  // Disable autocomplete
                  />
                </div>
              </div>
              <button className="btn bg-red-700 rounded-md text-center w-full my-5 p-4 text-[1.2rem]" type="submit">Sign Up</button>
              <div className="mb-0 mt-4 m-0 p-0 text-white/70 text-base font-normal">
                <span>Already have an account?</span><Link to="/login"><span className='text-white font-bold cursor-pointer'>&nbsp;Sign In</span></Link>
              </div>
            </form>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
