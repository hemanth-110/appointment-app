import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {Link} from 'react-router-dom'


const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoctor, setFilterDoctor] = useState([])

  const navigate = useNavigate()
  
  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if(speciality) {
      setFilterDoctor(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoctor(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600 font-medium py-2'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-10'>
        <div className='flex flex-col text-gray-600'>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className='border text-sm p-2 my-1 cursor-pointer'>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className='border text-sm p-2 my-1 cursor-pointer'>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className='border text-sm p-2 my-1 cursor-pointer'>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className='border text-sm p-2 my-1 cursor-pointer'>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className='border text-sm p-2 my-1 cursor-pointer'>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className='border text-sm p-2 my-1 cursor-pointer'>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoctor.map((item, index) => (
              <div key={item._id} className='border border-secondary-200 rounded-xl'>
                <Link to={`/appointment/${item._id}`}  className=' rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all' key={index}>
                    <img className='bg-green-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2'>
                            <p className='w-2 h-2 bg-secondary rounded-full'></p><p>Available</p>
                        </div>
                        <p className='font-medium'>{item.name}</p>
                        <p className='font-light'>{item.speciality}</p>
                    </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
