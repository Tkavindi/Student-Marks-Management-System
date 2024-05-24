import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import StudentSidebar from "./Sidebar/StudentSidebar";
import TeacherSidebar from "./Sidebar/TeacherSidebar";
import Login from "./Login/Login";

function App() {
  return (
    <div className="d-flex">
      <Login />
    </div>
  );
}

export default App;
