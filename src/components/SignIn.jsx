import React from 'react'
import { Link } from 'react-router-dom';
import cup from "../assets/cup.png";
import bridge from "../assets/bridge.png";
import line from "../assets/line.png";
import shadow from "../assets/shadow.png"

const SignIn = () => {
  return (
        <div className='mx-auto min-h-screen welcome overflow-hidden'>
           <div className=''>
                <div className='flex lg:justify-between items-center '>
                    <img src={cup} alt='cup' className='lg:h-[28rem] h-[14rem]'/>
                    <img src={shadow} alt='shadow' className='lg:h-[28rem] -mt-36 '/>
                   <img src={bridge} alt='cup' className='lg:h-[28rem] w-[24rem] h-[9rem] lg:mx-0 lg:-mt-[24rem] '/>
                </div>
            </div>
      {/* login  */}
        <div className='flex flex-col items-center justify-center flex-1 mt-40 lg:-mt-4'>
           <div className='flex items-center justify-center -mt-20 lg:-mt-[12rem] font-bold  mb-12 lg:mb-28'>
             <h1 className='text-3xl text-secondary font-primary'>Hi There!</h1>
            </div>
        <Link to=''>
          <button type='submit' className='btn btn_1 mb-6 lg:mb-12 font-primary'>Get Started
          </button>
        </Link>
         <Link to='/login' className='text-secondary font-semibold mb-8 lg:mb-12'>
           <button className='lg:btn lg:btn_3 px-32 py-3 rounded-3xl border-0 shadow-md hover:text-black/75 font-primary hover:shadow-2xl'>Login</button>
         </Link>
        <div className='flex space-x-3 font-primary mb-4 lg:mb-0'>
            <p className='text-gray-500'>New around here?</p>
            <Link to='register' className='text-secondary cursor-pointer'>Sign In</Link>
            
         </div>

          <div className='border-b border-gray-500 p-8 rounded-md'></div>  
     </div>
        {/* image */}
        <img src={line} alt='' className='-my-[4rem] lg:-mt-[8rem] lg:h-[26rem] h-[16rem]'/>
           </div>
           
  )
}

export default SignIn