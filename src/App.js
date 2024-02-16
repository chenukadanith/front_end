



import './App.css';
import Home from './Home';
import Navbar from './component/common/NavBar';
import StudentsView from './component/student/StudentsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './component/common/NavBar';





function App() {
  return (
    <div className="App">
     
      <NavBar/>
      
      <StudentsView/>
      
    </div>
  );
}

export default App;
