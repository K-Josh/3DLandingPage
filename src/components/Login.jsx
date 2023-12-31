import React, { useState } from 'react'
import bridge from "../assets/bridge.png";
import shadow from "../assets/shadow.png";
import line from "../assets/line2.png";
import { Link } from 'react-router-dom';
import {BsApple} from 'react-icons/bs';
import google from "../assets/googleIcon.png";
import WorkEmail from './WorkEmail';

const Login = () => {
  const [bigScreen, setBigScren] = useState(false);
  return (
    <div className='mx-auto welcome overflow-x-hidden' id='login'>
      <div className='mx-auto h-screen w-screen'>
        <div className='flex items-center justify-between'>
          <img src={bridge} alt='' className='-rotate-45 opacity-80 -my-8 lg:w-[10rem]'/>
        
          <img src={line} alt='' className='rotate-45 -my-8 w-[6rem] -mx-[4rem] lg:-mx-[2rem]'/>
        </div>
    {/* sign in */}
        <div className='flex flex-col items-center mt-[8rem]'>
          <h3 className='text-3xl font-primary font-bold mb-[3rem]'>Sign in</h3>
          <Link to='/login' 
           className='text-black font-semibold mb-8 lg:mb-8 hover:scale-110'>
            <div className='flex items-center '>
             <span><BsApple className=''/></span>
              <button className='lg:btn lg:btn_3 px-12 py-4 rounded-2xl border-0 -mx-10 font-bold shadow-md  text-black font-primary'>
               Sign in with Apple
              </button>
           </div>
         </Link>

         <Link to='/login' 
           className='text-black font-semibold mb-8 lg:mb-8 hover:scale-110'>
            <div className='flex items-center '>
             <span><img src={google} alt='google' className='w-6 h-6'/></span>
              <button className='lg:btn lg:btn_3 px-12 py-4 rounded-2xl border-0 -mx-10 font-bold shadow-md  text-black font-primary'>
               Sign in with Google
              </button>
           </div>
         </Link>
   {/* shadow and text */}
        <div className='flex items-center -mt-14 lg:-mt-36 lg:space-x-[62rem] lg:space-y-4 space-y-4'>
          <div>
            <img src={bridge} alt='design' className='fixed rotate-45 opacity-80 blur-xl lg:mx-[0rem] lg:-mt-6 px-[2rem] lg:w-[24rem] -mx-[24rem] ' />
          </div>
            <div className={`${bigScreen ? "" : <WorkEmail />}`}></div>
         <div className='flex items-center flex-col'>
      <h4 className='text-secondary/75 lg:mt-32 cursor-default  px-[14rem] whitespace-nowrap '>
        <p className='mt-8 lg:-mx-[68rem] lg:mb-8'>or get a <Link to="/work_mail" className='text-black font-semibold'>Link</Link> emailed to you</p>
        </h4>
        <Link to='/banner' className='text-sm font-primary'>Visit our main page</Link>
         </div>
        </div>
    
     {/*Terms and conditions */}
      <div className='text-center font-secondary mt-12 lg:-mt-2'>
        <h3 className='text-gray-600/70'>You are completely safe</h3>
        <h5 className='text-secondary'>Read our Terms & Conditions.</h5>
      </div>
        </div>
        
      </div>
    </div>
  )
}
{/* <img src={google} alt='' /> */}
export default Login