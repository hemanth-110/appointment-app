import React from 'react'
import { specialityData } from '../assets/assets'
import {Link} from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className='flex flex-col items-center gap-4 py-16 text-center'>
      <h1>Find by Speciality</h1>
      <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center gap-4 pt-4 w-full overflow-scroll'>
        {
            specialityData.map((item, index) => (
                <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center cursor-pointer text-xs flex-shrink-0' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 sm:w-24' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default SpecialityMenu
