import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Feedback from './components/Feedback'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Seção de Sobre com animação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <About />
      </motion.div>

      {/* Seção de Funcionalidades com animação */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Features />
      </motion.div>

      {/* Barra de Feedback */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Feedback />
      </motion.div>

      {/* Galeria */}
      <Gallery />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
