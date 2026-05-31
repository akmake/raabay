import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ClassicPage from '@/pages/ClassicPage';
import AtmosphericPage from '@/pages/AtmosphericPage';
import ModernPage from '@/pages/ModernPage';
import WriteLetterPage from '@/pages/WriteLetterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/classic" element={<ClassicPage />} />
      <Route path="/atmospheric" element={<AtmosphericPage />} />
      <Route path="/modern" element={<ModernPage />} />
      <Route path="/write" element={<WriteLetterPage />} />
    </Routes>
  );
}

export default App;
