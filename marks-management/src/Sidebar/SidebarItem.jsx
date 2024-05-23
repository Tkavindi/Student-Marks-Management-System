import React from "react";

const SidebarItem = (props) => {
  return (
    <div className="sidebarItem  text-center rounded p-1 m-1">
      <h6>{props.name}</h6>
    </div>
  );
};

export default SidebarItem;
