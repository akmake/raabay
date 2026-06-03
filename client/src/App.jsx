import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ClassicPage from '@/pages/ClassicPage';
import ModernPage from '@/pages/ModernPage';
import WriteLetterPage from '@/pages/WriteLetterPage';
import PidyonPage from '@/pages/PidyonPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/classic" element={<ClassicPage />} />
      <Route path="/modern" element={<ModernPage />} />
      <Route path="/write" element={<WriteLetterPage />} />
      <Route path="/pidyon" element={<PidyonPage />} />
    </Routes>
  );
}

export default App;
