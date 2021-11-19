import './Home.css';
import React from 'react';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="home-container">
      <div className="home-center-elements">
        <h2>Counseling Theory Assessment</h2>
        <p>Learn your theoretical orientation</p>
        <Button color="secondary" variant="contained" href="/assessment">Take the quiz</Button>
      </div>
    </div>
  );
}

export default App;
