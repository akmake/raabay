import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ClassicPage from '@/pages/ClassicPage';
import WriteLetterPage from '@/pages/WriteLetterPage';
import PidyonPage from '@/pages/PidyonPage';
import WritePidyonPage from '@/pages/WritePidyonPage';
import LetterInfoPage from '@/pages/LetterInfoPage';
import AccessibilityPage from '@/pages/legal/AccessibilityPage';
import PrivacyPage from '@/pages/legal/PrivacyPage';
import TermsPage from '@/pages/legal/TermsPage';

function App() {
  return (
    <Routes>
      {/* עמודים עם Layout (Navbar + Footer + נגישות) */}
      <Route element={<Layout />}>
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/mikhtav" element={<LetterInfoPage />} />
        <Route path="/pidyon" element={<PidyonPage />} />
      </Route>

      {/* עמודים עם Layout עצמאי */}
      <Route path="/" element={<ClassicPage />} />
      <Route path="/write" element={<WriteLetterPage />} />
      <Route path="/write-pidyon" element={<WritePidyonPage />} />
    </Routes>
  );
}

export default App;
