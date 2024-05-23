import React from "react";
import SidebarTitle from "./SidebarTitle";
import SidebarItem from "./SidebarItem";

const TeacherSidebar = () => {
  return (
    <div className="sidebar">
      <SidebarTitle />

      <div className="pt-3">
        <SidebarItem name="Enter Marks" />
        <SidebarItem name="View Marks" />
      </div>
    </div>
  );
};

export default TeacherSidebar;
