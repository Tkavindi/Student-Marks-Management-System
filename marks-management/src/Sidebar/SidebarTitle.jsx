import React from 'react';
import SchoolLogo from '../assets/schoollogo.jpg';

const SidebarTitle = () => {
  return (
    <div className="sidebtitle d-flex flex-column align-items-center p-3 text-center">
      <img src={SchoolLogo} alt="School Logo" width={100} className="rounded-circle" />
      <h3 className="text-light mt-2">ABC School</h3>
    </div>
  );
};

export default SidebarTitle;
