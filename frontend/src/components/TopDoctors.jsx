import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='font-medium text-3xl'>Top Doctors to Book</h1>
      <p className='text-sm text-center'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
            doctors.slice(0, 10).map((item, index) => (
                <Link to={`/appointment/${item._id}`}  className='border border-secondary-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all' key={index}>
                    <img className='bg-green-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2'>
                            <p className='w-2 h-2 bg-secondary rounded-full'></p><p>Available</p>
                        </div>
                        <p className='font-medium'>{item.name}</p>
                        <p className='font-light'>{item.speciality}</p>
                    </div>
                </Link>
            ))
        }
      </div>
      <Link to="/doctors">
        <button className='bg-secondary py-4 px-8 text-white font-medium my-5 rounded-full'>
            More
        </button>
      </Link>
    </div>
  )
}

export default TopDoctors
