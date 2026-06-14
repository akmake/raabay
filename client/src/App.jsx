import { Routes, Route } from 'react-router-dom';
import ClassicPage from '@/pages/ClassicPage';
import WriteLetterPage from '@/pages/WriteLetterPage';
import PidyonPage from '@/pages/PidyonPage';
import WritePidyonPage from '@/pages/WritePidyonPage';
import LetterInfoPage from '@/pages/LetterInfoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClassicPage />} />
      <Route path="/write" element={<WriteLetterPage />} />
      <Route path="/pidyon" element={<PidyonPage />} />
      <Route path="/write-pidyon" element={<WritePidyonPage />} />
      <Route path="/mikhtav" element={<LetterInfoPage />} />
    </Routes>
  );
}

export default App;
