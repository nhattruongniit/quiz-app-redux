import React from 'react'
import { useDispatch } from 'react-redux';

import { FormControl, TextField, Box } from '@mui/material';

import { handleChangeAmount } from '../redux/actions';

function TextFieldCom() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(handleChangeAmount(event.target.value))
  }

  return (
    <Box mt={3}>
      <FormControl fullWidth size="small">
        <TextField 
          label="Amout of Questions" 
          variant="outlined"
          type="number" 
          size="small"
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  )
}

export default TextFieldCom