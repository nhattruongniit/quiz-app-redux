import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Chip from '@mui/material/Chip';

function createData(name, difficulty, number, score) {
  return {
    name,
    difficulty,
    number,
    score,
    history: [
      {
        question: 'lorem lorem lorem',
        answer: true,
        time: '3s'
      },
    ],
  };
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  let color = 'primary';
  if(row.difficulty === 'medium') {
    color = 'warning';
  }
  if(row.difficulty === 'hard') {
    color = 'error';
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right"><Chip label={row.difficulty} color={color} /></TableCell>
        <TableCell align="right">{row.number}</TableCell>
        <TableCell align="right">{row.score}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Question</TableCell>
                    <TableCell>Answer</TableCell>
                    <TableCell align="right">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.question}>
                      <TableCell component="th" scope="row">
                        {historyRow.question}
                      </TableCell>
                      <TableCell 
                        style={{
                          color: historyRow.answer ? 'green' : 'red'
                        }}
                      >
                        {historyRow.answer ? 'Correct' : 'Incorrect'}</TableCell>
                      <TableCell align="right">{historyRow.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('tony nguyen', 'easy', 5, 5),
  createData('hau nguyen', 'medium', 10, 3),
  createData('minh nguyen', 'hard', 10, 10),
];

function Leaderboard() {
  return (
    <Box>
      <Typography variant="h4" textAlign="center">Leaderboard</Typography>
      <Box mt={5}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell align="right">Difficulty</TableCell>
                <TableCell align="right">Number Question</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
    </Box>
  )
}

export default Leaderboard