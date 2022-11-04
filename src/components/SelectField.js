import React from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 

import { handleChangeCategory, handleChangeDifficulty, handleChangeType } from '../redux/actions';

function SelectField({ label, options }) {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
    switch(label) {
      case "Category":
        dispatch(handleChangeCategory(event.target.value))
        break;
      case "Difficulty":
        dispatch(handleChangeDifficulty(event.target.value))
        break;
      case "Type":
        dispatch(handleChangeType(event.target.value))
        break;
      default:
        break;
    }
  }

  return (
    <Box mt={3}>
      <FormControl size='small' fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map(option => (
            <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField