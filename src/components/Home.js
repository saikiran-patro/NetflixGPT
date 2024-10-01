import React from 'react'
import Header from './Header'
import { FaChevronRight } from "react-icons/fa";
import Faq from './Faq';
import { Link } from "react-router-dom"

const Home = () => {

  const FaqData=[
     {
       question:'What is Netflix?',
       answer1:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
       answer2:"You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
     },
     {
       question:"How much does Netfix cost?",
       answer1:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
       answer2:""
     },
     {
        question:"Where can I watch?",
        answer1:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        answer2:"You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
     },
     {
        question:"How do I cancel?",
        answer1:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        answer2:""
     },
     {
        question:"What can I watch on Netflix?",
        answer1:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        answer2:""
     },
     {
        question:"Is Netflix good for kids?",
        answer1:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        answer2:"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
     }
  ]  

  return (
     <div className='bg-[#0D0D0E]'>
        <Header/>
      <div className="bg-[#0d0d0e] flex ">
        <div className="w-[70%] my-[40px] relative mx-auto flex justify-center items-center p-[20px_0px] bg-[#0d0d0e] border-[5.5px] border-[#961E26] rounded-[25px] shadow-[0_0_67px_#961E26]">
            <div className="w-full text-center flex justify-center items-center">
                <img className="w-full" src={require('../utils/images/NetflixHome.png')} />
            </div>
            <div className="text-white flex flex-col absolute bg-transparent w-[563px] leading-[50px] font-bold text-center">
                 <h1 className="text-[3.5rem]">Unlimited movies,TV shows and more!</h1>
                <p>Starts at ₹149. Cancel anytime.</p>
                <p>Ready to watch? Just Signup or Signin to see awesome content.</p>
                <Link to="/login"><button className="mx-auto flex justify-center items-center gap-[10px] bg-[#cd0613] px-[15px] rounded-[5px] text-[1.2rem] max-w-fit">Get Started <div className="pt-1"><FaChevronRight className='text-[15px]' /></div></button></Link>
            </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-white font-bold text-2xl my-12">
        <p>Seamless Streaming Anytime, Anywhere with the below features</p>
      </div>

      <div className="flex justify-center items-center gap-8 max-w-[1200px] mx-auto flex-wrap">
         <div className="flex flex-col gap-5 w-[250px] h-[330px] max-h-[330px] justify-between bg-gradient-to-r from-[#192247] to-[#210e17] p-5 rounded-[10px] mb-7 mt-15 max-lg:flex-[0_0_calc(45%-0.50rem)] max-lg:h-[250px]">
            <div className="text-white">
                 <h2 className="font-bold text-[1.5rem] mb-3">Enjoy on your TV</h2>
                 <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="flex justify-end ">
                <img src={require('../utils/images/feature1.svg').default} />
            </div>
         </div>

         <div className="flex flex-col gap-5 w-[250px] h-[330px] max-h-[330px] justify-between bg-gradient-to-r from-[#192247] to-[#210e17] p-5 rounded-[10px] mb-7 mt-15 max-lg:flex-[0_0_calc(45%-0.50rem)] max-lg:h-[250px]">
            <div className="text-white">
                 <h2 className="font-bold text-[1.5rem] mb-3">Download your shows to watch offline</h2>
                 <p>Save your favourites easily and always have something to watch.</p>
            </div>
            <div className="flex justify-end ">
                <img src={require('../utils/images/feature2.svg').default} />
            </div>
         </div>

         <div className="flex flex-col gap-5 w-[250px] h-[330px] max-h-[330px] justify-between bg-gradient-to-r from-[#192247] to-[#210e17] p-5 rounded-[10px] mb-7 mt-15 max-lg:flex-[0_0_calc(45%-0.50rem)] max-lg:h-[250px]">
            <div className="text-white">
                 <h2 className="font-bold text-[1.5rem] mb-3">Watch everywhere</h2>
                 <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
            </div>
            <div className="flex justify-end ">
                <img src={require('../utils/images/feature3.svg').default} />
            </div>
         </div>

         <div className="flex flex-col gap-5 w-[250px] h-[330px] max-h-[330px] justify-between bg-gradient-to-r from-[#192247] to-[#210e17] p-5 rounded-[10px] mb-7 mt-15 max-lg:flex-[0_0_calc(45%-0.50rem)] max-lg:h-[250px]">
            <div className="text-white">
                 <h2 className="font-bold text-[1.5rem] mb-3">Create profiles for kids</h2>
                 <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="flex justify-end ">
                <img src={require('../utils/images/feature4.svg').default} />
            </div>
         </div>
      </div>

       <div className="text-white flex justify-center items-center flex-col max-w-[1200px] px-[50px] mx-auto">  
            <p className="w-full max-w-[1200px] my-[20px] mx-auto text-[1.5rem] font-medium">Frequently Asked Questions</p>
            {
                 FaqData.map((obj, i) =>(
                    <Faq key={i} question={obj.question} answer1={obj.answer1} answer2={obj.answer2} />
                 ))
            }
       </div>
    </div>
  )
}

export default Home
