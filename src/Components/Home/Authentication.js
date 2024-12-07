import React from 'react'
import { Link } from 'react-router-dom'

const Authentication = () => {
  return (
    <div className='flex w-full h-screen'>
        <div className='flex h-screen w-2/3 items-center bg-[#000f89]'>
            <div className='ml-5'>
                <h1 className='font-bold text-4xl text-white'>Coffee in hand?</h1>
                <h3 className='font-semibold text-lg text-white'>You’re ready to take on the world.</h3>
            </div>
        </div>
        <div className='bg-black flex flex-col items-center justify-center h-screen w-1/3'>
            <div className='font-bold text-4xl text-white'>Get Started</div>
            <div className='flex gap-4 w-full mt-1'>
                <div className='text-white px-2 py-2 text-lg font-semibold bg-[#0000FF] flex items-center justify-center ml-4 w-1/2 rounded-md'>
                    <Link className='cursor-pointer ' to={'/login'}>Login</Link>
                </div>
                <div className='text-white px-2 py-2 text-lg font-semibold bg-[#0000FF] flex items-center justify-center mr-4 w-1/2 rounded-md '>
                <Link className='cursor-pointer' to={'/signup'}>Signup</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Authentication