import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className=''>
        <p className='text-medium text-center text-2xl'>ABOUT <span className=' font-bold'>US</span></p>
        <div className='py-10'>
          <div className='flex flex-col sm:flex-row items-center p-4'>
            <img className='w-2/6' src={assets.about_image} alt="" />
            <div className='px-6 flex flex-col gap-3'>
              <p className='text-sm '>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
              <p className='text-sm '>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
              <p className='text-semibold text-gray-900'>Our Vision</p>
              <p className='text-sm '>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
            </div>
          </div>
        </div>

        <div className='py-10'>
          <p className='font-semibold text-2xl py-3'>WHY CHOOSE US</p>
          <div className='flex flex-col sm:flex-row'>
            <div className='flex flex-col justify-center px-10 py-10 md:px-16 border border-gray-200 hover:bg-secondary'>
              <p className='font-semibold py-2'>
                EFFICIENCY:
              </p>
              <p>
                Streamlined appointment scheduling that fits into your busy lifestyle.
              </p>
            </div>
            <div className='flex flex-col justify-center px-10 py-10 md:px-16 border border-gray-200 hover:bg-secondary'>
              <p className='font-semibold py-2'>
                CONVENIENCE:
              </p>
              <p>
                Access to a network of trusted healthcare professionals in your area.
              </p>
            </div>
            <div className='flex flex-col justify-center px-10 py-10 md:px-16 border border-gray-200 hover:bg-secondary'>
              <p className='font-semibold py-2'>
                PERSONALIZATION:
              </p>
              <p>
                Tailored recommendations and reminders to help you stay on top of your health.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About
