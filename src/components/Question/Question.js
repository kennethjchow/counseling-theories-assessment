import React, { useState } from 'react';
import { Slider } from '@mui/material';
import './Question.css';
import { Box } from '@mui/system';

const marks = [
  {
    value: 1,
    label: 'Strongly Disagree',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: 'Neutral',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: 'Strongly Agree',
  }
];

const Question = (props) => {

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = (e) => { setIsFocused(true); }
  const handleBlur = (e) => { setIsFocused(false); }

  return (
    <Box sx={{ minWidth: 600 }} className="question-container" >
      <div className="question-text">
        {props.id}. <b>{props.text}</b>
      </div>
      <Box className="question-slider">
        <Slider
          aria-label="qSlider"
          defaultValue={4}
          step={1}
          marks={marks}
          valueLabelDisplay="auto"
          min={1}
          max={7}
          color={isFocused ? "secondary": "primary"}
          onFocus={handleFocus} onBlur={handleBlur}
          onChange={(e) => props.onSelectQuestionValue(e, props.id)}
        />
      </Box>
    </Box>
  );
}


export default Question;
