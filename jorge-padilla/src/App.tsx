// src/App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default App;