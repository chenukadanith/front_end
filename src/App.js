import './App.css';
import Home from './Home';
import NavBar from './component/common/NavBar';
import AddStudent from './component/student/AddStudent';
import StudentsView from './component/student/StudentsView';
import EditStudent from './component/student/EditStudent';
import StudentProfile from './component/student/StudentProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/view-students" element={<StudentsView />} />
                    <Route path="/add-students" element={<AddStudent />} />
                    <Route path="/edit-student/:id" element={<EditStudent />} />
                    <Route path="/student-profile/:id" element={<StudentProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
