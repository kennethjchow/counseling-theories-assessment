import './App.css';
import Assessment from './components/Assessment/Assessment';
import Home from './components/Home/Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/assessment' element={<Assessment/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
