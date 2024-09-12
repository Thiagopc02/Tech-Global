import React from 'react';
import './Features.css'; // Caso tenha um arquivo CSS correspondente

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Nossas Principais Funcionalidades</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Inovação</h3>
            <p>Utilizamos tecnologia de ponta para proporcionar a melhor experiência aos nossos clientes.</p>
          </div>
          <div className="feature-item">
            <h3>Qualidade</h3>
            <p>Oferecemos produtos de alta qualidade e um serviço de excelência.</p>
          </div>
          <div className="feature-item">
            <h3>Atendimento ao Cliente</h3>
            <p>Nosso suporte ao cliente está disponível 24/7 para garantir a sua satisfação.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
