
import React,{useState} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
const SignUp = () => {

  return (
    <div className="relative ">
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg')] bg-cover bg-center h-[100vh] w-full">
        
     <Header/>
        
     <div className="absolute inset-0 bg-black opacity-50"></div>  {/* this for black tint effect on the page */}
      <div className="flex justify-center items-center h-[80vh] relative">
        <div className='max-w-[450px] text-white bg-[#000000b3] w-[450px] absolute z-10 p-[48px_68px] rounded-md'>
        <h3 className="text-[2rem]" >Sign Up</h3>
        <form>
           <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'  >
             <label for="name" className="cursor-pointer">Full Name</label>
             <div>
                <input id="name" className="bg-inherit w-full border-none outline-none leading-[1.5]" type="email" name="email" />
             </div>
           </div>
           <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'  >
             <label for="email" className="cursor-pointer">Email</label>
             <div>
                <input id="email" className="bg-inherit w-full border-none outline-none leading-[1.5]" type="email" name="email" />
             </div>
           </div>
           <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'  >
             <label for="phone" className="cursor-pointer" >Phone Number</label>
             <div>
               <input id="phone" className="bg-inherit w-full border-none outline-none leading-[1.5]" type="tel" name="phone" />
             </div>
           </div>
           <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'  >
             <label for="password" className="cursor-pointer">Password</label>
             <div>
                <input id="password" className="bg-inherit w-full border-none outline-none leading-[1.5]" type="password" name="password" />
             </div>
           </div>
           <div className='border-black transition ease-[.5s] bg-[#131313] px-5 mt-5 py-4 rounded-md'  >
             <label for="re-password" className="cursor-pointer">Re-enter Password</label>
             <div>
                <input id="re-password" className="bg-inherit w-full border-none outline-none leading-[1.5]" type="password" name="password" />
             </div>
           </div>
            <button className="btn bg-red-700 rounded-md text-center w-full my-5 p-4 text-[1.2rem]" type="submit" >SignUp</button>
            <div className="mb-0 mt-4 m-0 p-0 text-white/70 text-base font-normal">
                <span>Already have an account?</span><Link to="/login"><span className='text-white font-bold cursor-pointer'>&nbsp;SignIn</span></Link>
            </div>

        </form>  
        </div>
       </div>  
        
    </div>
    </div>
  )
}

export default SignUp