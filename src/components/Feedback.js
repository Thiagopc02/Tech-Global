import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Feedback.css';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [name, setName] = useState(''); // Campo para o nome
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o modal

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.trim() && name.trim()) {
      const updatedFeedbacks = [...feedbacks, `${name}: ${newFeedback}`];
      setFeedbacks(updatedFeedbacks);
      localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
      setNewFeedback('');
      setName(''); // Limpa o campo do nome
      setIsModalOpen(false); // Fecha o modal após o envio
    }
  };

  return (
    <div className="feedback-section">
      <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
        Deixe seu Feedback!
      </button>

      {isModalOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Deixe seu Feedback!</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                required
              />
              <input
                type="text"
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                placeholder="Escreva algo..."
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </motion.div>
        </motion.div>
      )}

      <div className="feedback-list">
        <h3>Feedbacks Recebidos:</h3>
        <ul>
          {feedbacks.map((feedback, index) => (
            <li key={index}>{feedback}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
