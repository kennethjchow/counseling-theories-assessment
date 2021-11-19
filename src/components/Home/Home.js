import './Home.css';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/assessment')
  }

  return (
    <div className="home-container">
      <div className="home-center-elements">
        <h2>Counseling Theory Assessment</h2>
        <p>Learn your theoretical orientation</p>
        <Button color="secondary" variant="contained" onClick={handleClick}>Take the quiz</Button>
      </div>
    </div>
  );
}

export default App;
