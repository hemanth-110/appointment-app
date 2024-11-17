import React from 'react'
import assets from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='pt-5 ob-10'>
        <p className='text-center text-2xl font-bold py-3'>CONTACT US</p>
        <div className='flex flex-col md:flex-row justify-center py-4'>

          <div>
            <img className='w-full md:w-[360px]' src={assets.contact_image} alt="" />
          </div>
          <div className='px-4'>
            <p className='text-2xl font-semibold py-2'>OUR OFFICE</p>
            <p className='font-light py-2'>
              16-45/32, Rojit Plaza<br />
              Panjagutta,Hyderabad
            </p>
            <p className='font-light py-2'>
              Email: healthplus@gmail.com
            </p>
            <p className='font-medium py-2'>Careers at Health Plus</p>
            <p className='font-light py-2'>Learn more</p>
            <p className='font-light py-2 text-black border border-secondary-200 text-center cursor-pointer'>Explore</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
