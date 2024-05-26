import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login/Login";
import Teacherdashboard from "./TeacherDashboard/Teacherdashboard";
import StudentDashboard from "./StudentDashboard/StudentDashboard";

function App() {
  return (
    <div className="d-flex">
     <StudentDashboard/>
      
    </div>
  );
}

export default App;
