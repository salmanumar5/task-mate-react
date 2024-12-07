/* eslint-disable no-unused-vars */
import React from 'react';
import GroupsPanel from './GroupPanel/GroupPanel';
import CustomRoutes from '../../Navigation/Routes';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import AppRoutes from '../../Navigation/AppRoutes';

const sidebarItems = [
  {
    name: "Dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    name: "Groups",
    icon: <BsListTask />,
  },
];

const Sidebar = () => {
  return (
    <div className="flex w-full h-[94vh]">
      {/* Sidebar Container */}
      <div className="flex flex-col justify-between p-4 w-48 min-h-full">
        <div>
          <h3 className="text-xs text-gray-300 font-light mb-4">OVERVIEW</h3>
          {sidebarItems.map((item, index) => (
            <Link to={`/app/${item.name.toLowerCase()}`}>
            <div
              key={index}
              className="flex items-center gap-2 p-2 mb-4 hover:bg-gray-300 rounded-lg cursor-pointer"
            >
              <div className="text-black">{item.icon}</div>
              <div className="font-semibold text-sm text-black">{item.name}</div>
            </div>
            </Link>
          ))}
        </div>

        {/* Settings Icon */}
        <div className="flex items-center gap-2 mb-5 p-4 hover:bg-gray-300 rounded-lg cursor-pointer">
          <div><IoIosSettings className="text-black w-6 h-6" /></div>
          <div className='font-semibold text-sm text-black'>Settings</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto">
        <AppRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
