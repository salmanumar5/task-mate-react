import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearState } from '../../Redux/Action/actions';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUserId');
  
    dispatch(clearState());
  // Clear user-related state if using Redux
  // dispatch({ type: 'LOGOUT_USER' }); // Example action
  
  // Redirect to login page
  window.location.href = '/login'
  };

  return (
    <div className='flex justify-between items-center p-4 border-b-[1px]'>
      <div className='font-bold text-lg'>Task Mates</div>
      <div className='relative'>
        <img
          className='w-12 h-12 rounded-full border-[1px] border-black cursor-pointer'
          src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
          alt='Profile'
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className='absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50'>
            <ul className='py-2'>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Profile</li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Account</li>
              <li
                className='px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer'
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
