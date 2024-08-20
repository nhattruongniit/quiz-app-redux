import { BrowserRouter, Routes, Route } from 'react-router-dom';

// mui
import { Container } from '@mui/material';

// pages
import Settings from './pages/Settings';
import Question from './pages/Question';
import FinalScreen from './pages/FinalScreen';
import MainLayout from './layouts/MainLayout';
import Leaderboard from './pages/Leaderboard';

// styles
import './index.css'

function App() {
  return (
   <BrowserRouter>
    <Container maxWidth="md">
      <Routes>
        <Route path='/' element={<MainLayout><Settings /></MainLayout>} />
        <Route path='/question' element={<MainLayout><Question /></MainLayout>} />
        <Route path='/score' element={<MainLayout><FinalScreen /></MainLayout>} />
        <Route path='/leaderboard' element={<MainLayout><Leaderboard /></MainLayout>} />
      </Routes>
    </Container>
   </BrowserRouter>
  );
}

export default App;
