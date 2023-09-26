import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Professor from './Components/Professor';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Messages from './Components/Messages';
import Submission from './Components/Submission';
import Profile from './Components/Profile';
function App() {
  const lecturerData = {
    name: 'Madhura Vani',
    college: 'IIIT Sri City',
    role:"Associate Professor",
    email:'madhuravani15@gmail.com',
    skills: ['Pattern Recognition', 'DataMining', 'Algorithms'],
    ongoingProjects:['Project A','Project B','Project C']
  };
  return (
    <div className="App">
      <Router>
        <div className='side-content'>
        <Sidebar />
          <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/dashboard" exact element={<Dashboard/>} />
              <Route path="/messages" exact element={<Messages/>} />
              <Route path="/submission" exact element={<Submission/>} />
              <Route path="/messages" exact element={<Messages/>} />
              <Route path="/profile" exact element={<Profile/>} />
          </Routes>
        </div>
        </Router>
      {/* <Professor {...lecturerData} /> */}
      <Footer/>
      
    </div>
  );
}

export default App;
