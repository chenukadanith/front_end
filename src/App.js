import './App.css';
import Home from './Home';
import NavBar from './component/common/NavBar'; // Use this single import for NavBar
import AddStudent from './component/student/AddStudent';
import StudentsView from './component/student/StudentsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditStudent from './component/student/EditStudent';
import StudentProfile from './component/student/StudentProfile';



function App() {
  return (
    <main className="container mt-2">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/view-students" element={<StudentsView/>}> </Route>
          <Route path="/add-students" element={<AddStudent/>}> </Route>
          <Route path="/edit-student/:id" element={<EditStudent/>}> </Route>
          <Route path="/student-profile/:id" element={<StudentProfile/>}> </Route>
        </Routes>
       
      </Router>
    </main>
  );
}

export default App;
