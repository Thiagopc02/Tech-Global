import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Certifique-se de ter o arquivo de estilo para os ajustes

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="welcome-title"
      >
        Bem-vindo à TECH GLOBAL
      </motion.h1>
      <p className="about-text">
        Na TECH GLOBAL, estamos redefinindo o mercado de e-commerce com as
        tecnologias mais avançadas. Nosso objetivo é oferecer soluções
        inovadoras e uma experiência de compra incomparável. Explore o futuro
        conosco.
      </p>
    </section>
  );
};

export default About;
