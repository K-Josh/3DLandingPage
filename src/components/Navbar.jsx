import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='w-full'>
      <div className=' mx-auto mb-6'>
        <div className='flex flex-col lg:flex-row lg:space-y-0 space-y-10 lg:justify-between relative transition-all ease-in duration-500 '>
    {/* logo */}
          <img src={logo} alt='' className='w-24 lg:w-44 '/>
      {/* manu icons */}
      <div onClick={()=>setOpen(!open)} 
        className='absolute right-8 top-1 text-lg cursor-pointer lg:hidden '>
        {open ?<GiHamburgerMenu className='text-secondary'/> : <AiOutlineClose className='text-secondary'/>}
      </div>
    {/* nav links */}
        <ul className='space-y-4 flex items-center pl-8 font-tertiary justify-start  lg:bg-inherit w-full bg-tertiary lg:mx-48 m-2'>
           <div className={`flex lg:space-x-8 flex-col lg:flex-row lg:-my-8  lg:static  lg:mx-[28rem] mx-2 lg:bg-inherit  transition-all duration-500 ease-in items-center  lg:space-y-0 space-y-4 p-8 pl-1 ${open ? '-mt-[200rem] lg:mx-0' : ' lg:my-0'} space-y-3 `}>
             <li className='text-secondary hover:scale-110 font-semibold'><a href='#'>Home</a></li>
             <li className='hover:text-secondary font-bold hover:scale-110'><a href='#'>Products</a></li>
             <li className='hover:text-secondary font-bold hover:scale-110'><a href='#'>Support</a></li>
             <li className='hover:text-secondary font-bold hover:scale-110'><a href='#'>About</a></li>
             <button type='button' className='lg:px-5 px-7 py-1 bg-secondary rounded-xl text-white'>Quote</button>
            </div>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar