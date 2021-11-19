import React, { useState } from 'react';
import Question from '../Question/Question';
import Results from '../Results/Results';
import questionData from '../../data/questions.json';
import './Assessment.css'
import { Button } from '@mui/material';

export default function Assessment() {

  const questionDataDefault = questionData.map(obj => ({ ...obj, value: 4 }));
  const [questions, setQuestions] = useState(questionDataDefault);
  const [hasSubmit, setHasSubmit] = useState(false);
  const [categorySums, setCategorySums] = useState([]);

  const handleQuestionValueChange = (event, questionId) => {
    let newQuestions = [...questions];
    let matchingIndex = newQuestions.findIndex(x => x.id === questionId);
    newQuestions[matchingIndex].value = event.target.value;
    setQuestions(newQuestions)
  }

  const QuestionList = questions.map((question) => {
    return (<Question key={question.id} onSelectQuestionValue={handleQuestionValueChange} text={question.text} id={question.id} />)
  });

  const sumCategories = (questions) => {
    let categorySums = []
    const categories = ["Psychoanalytic", "Adlerian", "Behavioral", "Cognitive", "Reality", "Existential", "Person-Centered", "Gestalt", "Multicultural", "Feminist", "Family", "Solutions-Focused", "Narrative", "Strengths-Based", "Integrative"]
    let id = 1
    categories.forEach(category => {
      const items = questions.filter(question => question.category.indexOf(category) !== -1);
      const sum = { "id": id, "category": category, "sum": items.reduce((n, { value }) => n + value, 0) };
      categorySums.push(sum);
      id += 1;
    });
    return categorySums.sort((a, b) => parseFloat(b.sum) - parseFloat(a.sum));
  }

  const handleSubmit = () => {
    setCategorySums(sumCategories(questions))
    setHasSubmit(true);
  }

  return (
    <div className="content">
      <div className="assessment-container" >
        <div>
          This is an assessment to determine which counseling theory you align more with
        </div>
        <div>{QuestionList}</div>
        <div className="buttons-container">
          <Button onClick={handleSubmit} variant="contained" className="submit-button">Submit</Button>
        </div>
        <div className="category-sums">
          {hasSubmit &&
            <Results categorySums={categorySums}></Results>
          }
        </div>

      </div>
    </div>
  );
}
