import './App.css';
import Assessment from './components/Assessment/Assessment';
import Home from './components/Home/Home';
import React from 'react';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";


function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path='/assessment' element={<Assessment/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
