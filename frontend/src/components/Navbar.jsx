import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
      <h1 className='cursor-pointer'>Health Plus</h1>
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <Link to="/">
            <li className='py-1'>HOME</li>
        </Link>
        <Link to="/doctors">
            <li className='py-1'>ALL DOCTORS</li>
        </Link>
        <Link to="/about">
            <li className='py-1'>ABOUT</li>
        </Link>
        <Link to="/contact">
            <li className='py-1'>CONTACT</li>
        </Link>
      </ul>
      <div className='flex items-center gap-4'>
        {
         token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} />
            <img className='w-2.5' src={assets.dropdown_icon} />
            <div className='absolute top-5 right-0 pt-4 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                  <Link to="/my-profile">
                  <p className='hover:text-black cursor-pointer'>My Profile</p>
                  </Link>
                  <Link to="my-appointments">
                  <p className='hover:text-black cursor-pointer'>My Appointments</p>
                  </Link>
                  <Link onClick={() => setToken(false)}>
                  <p className='hover:text-black cursor-pointer'>Logout</p>
                  </Link>
                </div>
            </div>
         </div> : 
         <Link to="/login">
            <button className='bg-secondary text-white px-8 py-3 rounded-full font-light hidden md:flex'>
              Create Account
            </button>
         </Link>
        }

        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 overflow-hidden`}>
          <div >
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 bg-white'>
            <Link tp="/">Home</Link>
            <Link to="/doctors">ALL DOCTORS</Link>
            <Link to="/about">ABOUT</Link>
            <Link tp="/contact">CONTACT</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
