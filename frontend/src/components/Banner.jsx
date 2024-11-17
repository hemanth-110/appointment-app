import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='flex px-6 sm:px-10 lg:px-12 my-20 text-white  bg-secondary rounded-lg'>
      <div className='flex-1 md:py-16 lg:py-24'>
        <h1 className='font-bold md:text-4xl'>
            Book Appointment <br />
            With 100+ Trusted Doctors
        </h1>
        <Link to="/login">
            <button className='bg-white text-black py-4 px-8 rounded-full my-5 hover:scale-105'>Create Account</button>
        </Link>
      </div>

      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
