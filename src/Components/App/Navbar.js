import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 border-b-[1px]'>
      <div className='font-bold text-lg'>Task Mates</div>
      <div className='w-12 h-12'>
        <img className='rounded-full border-[1px] border-black' src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg' alt='img'/>
      </div>
    </div>
  )
}

export default Navbar