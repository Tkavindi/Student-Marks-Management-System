import React from "react";
import "./Navigation.css";
import ProfilePic from "../assets/profilepic.png";
import { IoIosLogOut } from "react-icons/io";

const NavigationBar = (props) => {
  return (
    //Role of the user, Name, Profile pic should dynamically load when login acording to that user
    <div className="d-flex p-3 Navigation px-5">
      <div className="Title">
        <h5 className="Role">{props.Role}</h5>
        <p className="Name text-secondary">{props.Name}</p>
      </div>

      <div className="ms-auto">
        <img
          src={ProfilePic}
          width={40}
          className="rounded-circle"
          alt="Profile"
        />
        <IoIosLogOut size={25} className="ms-3" />
      </div>
    </div>
  );
};

export default NavigationBar;
