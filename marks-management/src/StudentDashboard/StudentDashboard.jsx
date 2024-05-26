import React from "react";
import StudentSidebar from "../Sidebar/StudentSidebar";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./StudentDashboard.css";
import MarksTable from "./MarksTable";

const StudentDashboard = () => {
  return (
    <div className="d-flex vw-100 ">
      <StudentSidebar />
      <div className="w-100 ">
        <NavigationBar Role="Student" Name="Chamath Kaushalya" />

        <div className="">
          <div className="d-flex justify-content-between container p-5">
            <h6>Name: Chamath Kaushalya</h6>
            <h6>Student ID: 0000000</h6>
          </div>

          <MarksTable />

          <div className="text-center p-3">
          <h6>Toatal Marks: 91</h6>
            <h6>Average: 91</h6>
            <h6>Rank: 1</h6>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
