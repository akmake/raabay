import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import LocaleHtml from '@/components/LocaleHtml';
import LocaleBootstrap from '@/components/LocaleBootstrap';

import HomePage from '@/pages/HomePage';
import WritePage from '@/pages/WritePage';
import WritePidyonPage from '@/pages/WritePidyonPage';
import MikhtavPage from '@/pages/MikhtavPage';
import PidyonPage from '@/pages/PidyonPage';
import MaalaPage from '@/pages/MaalaPage';
import OhelPage from '@/pages/OhelPage';
import ContactPage from '@/pages/ContactPage';
import AccessibilityPage from '@/pages/legal/AccessibilityPage';
import PrivacyPage from '@/pages/legal/PrivacyPage';
import TermsPage from '@/pages/legal/TermsPage';

export default function App() {
  return (
    <>
      <LocaleHtml />
      <LocaleBootstrap />

      <Routes>
        {/* Standalone pages (each renders its own Navbar) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/write-pidyon" element={<WritePidyonPage />} />

        {/* Pages that share the Navbar + Footer + accessibility chrome */}
        <Route element={<Layout />}>
          <Route path="/mikhtav" element={<MikhtavPage />} />
          <Route path="/pidyon" element={<PidyonPage />} />
          <Route path="/maala" element={<MaalaPage />} />
          <Route path="/ohel" element={<OhelPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
