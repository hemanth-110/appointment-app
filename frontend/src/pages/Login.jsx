import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitEvent = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className='flex flex-col px-14'>
        <p className='text-2xl text-center font-semibold'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        {
          state === 'Sign Up' && 
          <div className='flex flex-col py-2 w-2/5'>
            <label className='pb-1'>Full Name</label>
            <input onChange={(e) => setName(e.target.name)} value={name} className='border bg-gray-100 outline-none border-secondary-200 py-1' type="text" placeholder='Full Name' />
          </div>
        }
        
        <div className='flex flex-col py-2 w-2/5'>
          <label className='pb-1'>Email</label>
          <input onChange={(e) => setName(e.target.email)} value={email} className='border bg-gray-100 outline-none border-secondary-200 py-1' type="Email" placeholder='Email' />
        </div>
        <div className='flex flex-col py-2 w-2/5'>
          <label className='pb-1'>Password</label>
          <input onChange={(e) => setName(e.target.password)} value={password} className='border bg-gray-100 outline-none border-secondary-200 py-1' type="password" placeholder='Password' />
        </div>
        <div className='py-3'>
          <button className='text-medium border border-secondary-200 py-2 px-4 hover:bg-secondary rounded-xl hover:text-white'>
          { state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>
        </div>
        <div>
          <p>
            {state === 'Sign Up' ?
             <p>Already have an Account ? <span onClick={() => setState('Login')} className='text-blue-500 underline cursor-pointer'>Login</span></p> 
             : <p>Don't have an account ? <span onClick={() => setState('Sign Up')} className='text-blue-500 underline cursor-pointer'>Create account</span></p>}
            </p>
        </div>
      </div>
    </div>
  )
}

export default Login
