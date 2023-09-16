import React, { useState } from 'react'
import Navbar from './Navbar';
import shapes from "../assets/Group.png";
import image from "../assets/Strip-Patterns2.png"
import {PiTelegramLogoThin, PiTwitterLogo, PiInstagramLogoLight, PiTelegramLogoFill } from 'react-icons/pi';
import {FaDribbble, FaBehance, FaFacebookF} from 'react-icons/fa'

const Banner = () => {
  const [background, setBackground] = useState(false)

  return (
    <div className={`banner ${background ? '': 'lg:bg-tertiary' } h-screen bg-no-repeat bg-cover lg:h-[60rem]`}>
        <div>
          <Navbar/>
        </div>
          {/*text &  image*/}
       <div className='container flex flex-col lg:flex-row justify-between items-center w-full '>
       <div className='-mx-6 lg:mx-0'>
         <h2 className=' font-tertiary font-bold text-xl px-12 lg:text-6xl lg:w-[38rem] w-[32rem] mb-6'>A massive library of free 3D  <span className='text-secondary'>shapes</span></h2>
         <p className='font-primary w-[32rem] mb-10 px-12'>Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries</p>
  {/* input button and socials */}
     <div className='flex items-center mb-24 px-12'>
        <input type='email'  
          className='rounded-3xl lg:w-[32rem] w-[14rem] p-3 border-0 placeholder:text-gray-500/60 placeholder:text-sm outline-1 outline-secondary  shadow-md hover:shadow-2xl shadow-slate-400/40'
          placeholder='Your email address here'
           />
           <div className='lg:-mx-[8rem] -mx-8'>
             <button type='submit' className='lg:bg-gradient-to-r lg:from-[#EC74E7] lg:to-[#8468F5] lg:rounded-3xl lg:bg-secondary lg:p-2 p-3 bg-primary rounded-bl-3xl rounded-tr-3xl text-white font-primary flex items-center hover:scale-110'>Download
             <PiTelegramLogoFill className='text-white' />
           </button>
           </div>
       </div>
        {/* socials */}
        <div className='flex space-x-3 items-center mb-8 px-16'>
            <div className='bg-secondary p-2 rounded-full'><FaFacebookF className='text-white'/></div>
            <div className='bg-secondary p-2 rounded-full'><PiTwitterLogo className='text-white'/></div>
            <div className='bg-secondary p-2 rounded-full'><PiInstagramLogoLight className='text-white'/></div>
            <div className='bg-secondary p-2 rounded-full'><FaBehance className='text-white'/></div>
            <div className='bg-secondary p-2 rounded-full'><FaDribbble className='text-white'/></div>
           </div>
         </div>
          
        <img src={shapes} alt='' className='lg:-mx-[4rem] hover:scale-110 lg:w-[46rem]'/>
       </div>
    </div>
  )
}

export default Banner