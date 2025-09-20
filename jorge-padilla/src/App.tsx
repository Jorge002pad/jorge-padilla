// src/App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
    </>
  );
};

export default App;