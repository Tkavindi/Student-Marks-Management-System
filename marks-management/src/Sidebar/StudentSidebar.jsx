import React from "react";
import "./Sidebar.css";
import SidebarTitle from "./SidebarTitle";
import SidebarItem from "./SidebarItem";

const StudentSidebar = () => {
  return (
    <div className="sidebar">
      <SidebarTitle />

      <div className="pt-3">
        <SidebarItem name="Overview" />
      </div>
    </div>
  );
};

export default StudentSidebar;
