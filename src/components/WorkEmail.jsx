import React from 'react'
import { Link } from 'react-router-dom'
import bridge from "../assets/bridge.png";

const WorkEmail = () => {
  return (
    <div className='banner bg-cover bg-no-repeat h-screen bg-tertiary mx-auto lg:h-[42rem] py-[20rem] overflow-x-hidden overflow-y-hidden' id='work_mail'>
        <div className='container -mt-[8rem] lg:-mt-[14rem]' >
             {/* work-email and button and shdow*/}
             <div className='lg:mt-6 mt-8 flex flex-col lg:mb-20 lg:space-y-8 space-y-3 items-center border lg:mx-[20rem] mx-14 p-12 w-[22rem] lg:w-[44rem]'>
                <h1 className='text-2xl font-secondary text-secondary/100 mb-6'>Your work email</h1>
              <input
                type='email' 
                className='px-6 rounded-2xl p-3 border-0 -mx-10 font-bold shadow-md outline-1 outline-secondary  text-black placeholder:text-gray-500/75 font-primary hover:shadow-lg w-[16rem] lg:w-[24rem]'
                placeholder='work email address'
              />
              <div>
              <button 
                type='submit' 
                className='btn lg:btn_2 btn_3_5 mt-8 bg-secondary border-0 -mx-10 font-bold   text-white font-primary hover:text-black '>
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