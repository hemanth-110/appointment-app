import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-4 items-start justify-between py-8'>
        {/* left */}

        <div className='w-2/5 flex flex-col gap-4'>
            <h1 className='text-3xl font-bold'>Health Plus</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In saepe quo commodi? Ex vero necessitatibus eos consequuntur aperiam placeat delectus dicta reiciendis minima velit voluptate, quam perferendis quasi corrupti rem neque, tempore ipsa, nesciunt atque! Qui aut minima eos necessitatibus.
            </p>
        </div>

        {/* */}

        <div className='flex flex-col'>
            <p className='font-semibold'>COMPANY</p>
            <ul>
                <Link>
                    <li className='font-light'>Home</li>
                </Link>
                <Link>
                    <li className='font-light'>About Us</li>
                </Link>
                <Link>
                    <li className='font-light'>Delivery</li>
                </Link>
                <Link>
                    <li className='font-light'>Privacy Policy</li>
                </Link>
            </ul>
        </div>

        {/* */}

        <div>
            <p className='font-semibold'>GET IN TOUCH</p>
            <ul>
                <Link>
                    <li className='font-light'>+91 987654321</li>
                </Link>
                <Link>
                    <li className='font-light'>healthplus@gmail.com</li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
