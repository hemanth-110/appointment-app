import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import assets from '../assets/assets'

const MyAppointsments = () => {

  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p className='text-2xl py-4 font-semibold'>My Appointments</p>
      <div className='pb-10'>
        {
          doctors.slice(0,2).map((item, index) => (
            <div className='grid grid-col-[1fr_2fr] gap-4 justify-between sm:flex sm:gap-6 border-b py-2' key={index}> 
                <div className='flex '>
                  <div>
                    <img className='w-32' src={item.image} alt="" />
                  </div>
                  <div>
                    <p className='font-semi bold'>{item.name}</p>
                    <p className='text-sm'>{item.speciality}</p>
                    <p>Address:</p>
                    <p className='text-sm'>{item.address.line1}</p>
                    <p className='text-sm'>{item.address.line2}</p>
                    <p className='text-sm'><span>date & Time:</span></p>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <button className='border border-gray-200 my-1 p-2 hover:bg-secondary hover:text-white rounded-md'>Pay Online</button>
                  <button className='border border-gray-200 my-1 p-2 hover:bg-red-600 hover:text-white rounded-md'>Cancel Appointment</button>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointsments
