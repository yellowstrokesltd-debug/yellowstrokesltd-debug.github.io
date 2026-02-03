import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHashElement from './components/ScrollToHashElement';
import { PageLoader } from './components/PageLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import ContactPage from './pages/ContactPage';
import BetterHumanBeingsPage from './pages/BetterHumanBeingsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <PageLoader onLoadingComplete={() => setIsLoading(false)} />}
      <Router>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/better-human-beings" element={<BetterHumanBeingsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />


          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </>
  );
}
