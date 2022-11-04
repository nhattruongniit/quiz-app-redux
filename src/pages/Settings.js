import React from 'react'
import { useNavigate } from 'react-router-dom';
// mui
import { Button, Typography, Box, CircularProgress } from '@mui/material'

// components
import SelectField from '../components/SelectField';
import TextFieldCom from '../components/TextFieldCom';

// hooks
import useAxios from '../hooks/useAxios';

const difficultyOptions = [
  { id: 'easy', name: 'Easy'},
  { id: 'medium', name: 'Medium'},
  { id: 'hard', name: 'Hard'}
]
const typeOptions = [
  { id: 'multiple', name: 'Multiple Choice'},
  { id: 'boolean', name: 'True/False'},
]

function Settings() {
  const { response, error, loading } = useAxios({ url: "api_category.php"});
  const navigate = useNavigate();
 
  console.log({response})

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/question')
  }

  return (
    <Box>
      <Typography variant='h2' fontWeight="bold" textAlign="center">Quiz App</Typography>
      <br />

      {loading && (
        <Box mt={20} textAlign="center">
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box mt={20} textAlign="center">
          <Typography variant="h6" mt={20} color="red">
            Some Went
          </Typography>
        </Box>
      )}

      {!loading && !error && (
        <form onSubmit={handleSubmit}>
          <SelectField label="Category" options={response.trivia_categories} />
          <SelectField label="Difficulty" options={difficultyOptions} />
          <SelectField label="Type" options={typeOptions} />

          <TextFieldCom />

          <Box mt={3} width="100%" textAlign="center">
            <Button variant='contained' type="submit">
              Get Started
            </Button>
          </Box>
        </form>
      )}

     
    </Box>
  )
}

export default Settings