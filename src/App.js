import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import ContactDetails from './Components/ContactDetails';
import Signup from './Components/Signup';

function App() {
  return (
    
      <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Follow-ups" element={< ContactDetails/>} />
        <Route path="/Create Staff" element={<Signup />} />
        </Routes>
        </Router>
      </div>
 
  );
}

export default App;
