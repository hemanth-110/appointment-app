import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-secondary rounded-lg px-6 md:px-10 py-5 md:py-5'>
      {/* Left */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto'>
        <p className='text-white text-3xl md:text-4xl font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointment <br/>
            With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center'>
            <img className='w-1/5 ' src={assets.group_profiles} alt="" />
            <p className='text-white px-2'>
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
            </p>
        </div>
        <Link className='bg-white py-3 px-5 rounded-full hover:scale-105 duration-300'>
            <div>
                <p className='font-medium'>Book Appointment</p>
            </div>   
        </Link>
      </div>

      {/* Right */}

      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
