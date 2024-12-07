// src/Components/Layout/AppLayout.js
import React from 'react';
import Sidebar from '../App/Sidebar';
import Navbar from '../App/Navbar';

const AppLayout = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Sidebar/>
    </div>
  );
};

export default AppLayout;
