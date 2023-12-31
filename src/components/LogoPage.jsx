import React from 'react'
import { Link } from 'react-router-dom';
import {BsArrowRightShort} from "react-icons/bs";
import Logo from "../assets/logo1.png"

const LogoPage = () => {
  return (
    <div className='bg-primary min-h-screen overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex lg:mx-[72rem] mx-[16rem] py-6'>
           <Link to='/signin'
             spy={'false'}
            smooth={"true"}
            className=''>
              <BsArrowRightShort className='text-4xl transition-all ease-out duration-700 animate-bounce'/>
            </Link>
          </div>
        <div className='text-3xl flex items-center justify-center my-[10rem]'>
            <div className=''>
              <img src={Logo} alt='logo' className='h-[12rem] w-[12rem]'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LogoPage