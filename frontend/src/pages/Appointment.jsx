import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from "../assets/assets"
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors, currencySymbol} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState([])
  const [docSlot, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocId = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  const getAvailableSlot = async () => {
    setDocSlots([])

    let today = new Date()

    for(let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      if(today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1: 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }

    
  }

  useEffect(() => {
    fetchDocId()
  },[doctors, docId])

  useEffect(() => {
    getAvailableSlot()
  },[docInfo])

  useEffect(() => {
    console.log(docSlot)
  }, [docSlot])

  return docInfo && (
    <div>
      <div className='flex flex-col md:flex-row items-start gap-4'>
        <div className='w-4/4 sm:w-3/4'>
          <img className='bg-secondary rounded-xl' src={docInfo.image} alt="" />
        </div>

        <div className='flex-col gap-4'>
          <div className='border border-gray-500 py-16 px-8 rounded-xl'>
            <div>
              <p className='text-3xl font-semibold'>{docInfo.name}</p>
            </div>
            <div className='flex items-center'>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='pl-2'>{docInfo.experience}</button>
            </div>
            <div className='flex items-center pt-4'>
              <p>About</p>
              <img className='pl-2' src={assets.info_icon} />
            </div>
            <div>
              <p className='pb-4'>{docInfo.about}</p>
            </div>
            <div>
              <p className='font-semibold'>Appointment fee: {currencySymbol}{docInfo.fees}</p>
            </div>
          </div>

          {/* slots */}

          <div className='text-gray-700 my-10 mb-20'>
            <p className='text-xl'>Booking Solts</p>
            <div className='flex gap-6 my-4'>
              { 
                docSlot.length && docSlot.map((item, index) => (
                  <div className='bg-secondary py-2 px-6 cursor-pointer rounded-xl text-white flex flex-col items-center' onClick={() => setSlotIndex(index)} key={index}>
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                ))
              }
            </div>

            <div className='flex items-center gap-2 my-4 overflow-x-scroll mt-4'>
              {
                docSlot.length && docSlot[slotIndex].map((item, index) => (
                  <p onClick={() => setSlotTime(item.time)} className='bg-secondary font-light flex-shrink-0 cursor-pointer text-sm py-2 px-4 rounded-xl text-white' key={index}>
                    {item.time.toLowerCase()}
                  </p>
                ))
              }
            </div>
            <button className='bg-secondary text-white rounded-full py-4 px-8'>Book Appointment</button>
          </div>

        </div>
      </div>
      
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment
