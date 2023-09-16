import React from 'react'
import { Link } from 'react-router-dom'
import bridge from "../assets/bridge.png";

const WorkEmail = () => {
  return (
    <div className='banner bg-cover bg-no-repeat h-screen bg-tertiary mx-auto lg:h-[60rem] py-[20rem] overflow-x-hidden overflow-y-hidden' id='work_mail'>
        <div className='container -mt-[8rem] lg:-mt-[14rem]' >
             {/* work-email and button and shdow*/}
             <div className='lg:mt-6 mt-2 flex flex-col lg:mb-20 lg:space-y-8 space-y-3 items-center border lg:mx-[28rem] p-12 w-[18rem] lg:w-[28rem]'>
                <h1 className='text-2xl font-secondary text-secondary/100 mb-6 whitespace-nowrap'>Your work email</h1>
              <input
                type='email' 
                className='px-6 rounded-2xl p-3 border-0 -mx-10 font-bold shadow-md outline-1 outline-secondary  text-black placeholder:text-gray-500/75 font-primary hover:shadow-lg w-[14rem] lg:w-[24rem]'
                placeholder='work email address'
              />
              <div>
              <button 
                type='submit' 
                className='lg:btn lg:btn_2 px-8 py-3 rounded-2xl mt-8 bg-secondary border-0 -mx-10 font-bold   text-white font-primary hover:text-black '>
               Email me a sign up link
              </button>
              </div>
              <div className='lg:mb-6'>
              <img src={bridge} alt='design' className='fixed rotate-45 opacity-80 blur-xl lg:mx-[20rem] mx-[8rem] lg:mt-6 px-[8rem] lg:w-[24rem]' />
          </div>

          <Link to='/banner' className='text-secondary font-semibold'>To main page </Link>
           </div>

        </div>
    </div>
  )
}

export default WorkEmail