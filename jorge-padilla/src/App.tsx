import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Footer />
      </main>
    </>
  );
};

export default App; 