import React from 'react'
import { Link } from 'react-router-dom';
import {BsArrowRightShort} from "react-icons/bs";
import Logo from "../assets/logo1.png"

const LogoPage = () => {
  return (
    <div className='bg-primary min-h-screen overflow-y-hidden'>
      <div className='container mx-auto'>
        <div className='flex lg:mx-[72rem] mx-[28rem] py-6'>
           <Link to='/welcome'
             spy={'false'}
            smooth={"true"}
            className=''>
              <BsArrowRightShort className='text-xl transition-all ease-out duration-700'/>
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