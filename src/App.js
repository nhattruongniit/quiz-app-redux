import { BrowserRouter, Routes, Route } from 'react-router-dom';

// mui
import { Box, Container } from '@mui/material';

// pages
import Settings from './pages/Settings';
import Question from './pages/Question';
import FinalScreen from './pages/FinalScreen';

function App() {
  return (
   <BrowserRouter>
    <Container maxWidth="sm">
      <Box mt={5}>
        <Routes>
          <Route path='/' element={<Settings />} />
          <Route path='/question' element={<Question />} />
          <Route path='/score' element={<FinalScreen />} />
        </Routes>
      </Box>
    </Container>
   </BrowserRouter>
  );
}

export default App;
