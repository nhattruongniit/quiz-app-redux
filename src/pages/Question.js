import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decode } from 'html-entities';

import { Typography, Box, Button, CircularProgress } from '@mui/material'

import useAxios from '../hooks/useAxios'

import { handleChangeScore } from '../redux/actions';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

function Question() {
  const {  
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score
  } = useSelector(state => state.question);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if(question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if(question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty }`)
  }
  if(question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }

  const { response, loading } = useAxios({url: apiUrl });
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    if(response?.results.length) {
      const questions = response.results[questionIndex];
      let answers = [...questions.incorrect_answers];
      answers.splice(getRandomInt(questions.incorrect_answers.length), 0, questions.correct_answer);
      setOptions(answers)
    }
  }, [response, questionIndex])

  console.log({options})


  if(loading) {
    return (
      <Box mt={20} textAlign="center">
        <CircularProgress />
      </Box>
    )
  }

  const handleAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer) {
      dispatch(handleChangeScore(score + 1))
    }
    
    if(questionIndex + 1 < response.results.length) {
      setQuestionIndex(prevState => prevState + 1)
    } else {
      navigate('/score')
    }
  }

  return (
    <Box>
      <Typography variant="h4" textAlign="center">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>

      {options.map((name, index) => (
        <Box mt={2} key={index}>
          <Button variant="contained" fullWidth onClick={handleAnswer}>{decode(name)}</Button>
        </Box>
      ))}
    
      <Box mt={5}>
        Score: {score} / {response?.results.length}
      </Box>
    </Box>
  )
}

export default Question