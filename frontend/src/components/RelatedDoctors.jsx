import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const RelatedDoctors = ({docId, speciality}) => {

    const {doctors} = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if(doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

  return (
    <div>
        <p className='text-center font-medium text-xl'>Related Doctors</p>
        <div className='w-full grid grid-cols-auto my-6 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
            relDoc.slice(0, 10).map((item, index) => (
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
    </div>
    
  )
}

export default RelatedDoctors
