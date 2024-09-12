import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <motion.img src={img1} alt="Gallery 1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
      <motion.img src={img2} alt="Gallery 2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} />
      <motion.img src={img3} alt="Gallery 3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} />
    </section>
  );
};

export default Gallery;
