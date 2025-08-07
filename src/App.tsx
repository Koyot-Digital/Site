import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Game from './components/Game';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onNavigateToTerms={() => setCurrentPage('terms')}
        onNavigateToPrivacy={() => setCurrentPage('privacy')}
      />
      <Hero />
      <About />
      <Game />
      <Footer 
        onNavigateToTerms={() => setCurrentPage('terms')}
        onNavigateToPrivacy={() => setCurrentPage('privacy')}
      />
    </div>
  );
}

export default App;