import React from 'react';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper">
      <div className="hero-content-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button className="btn-yellow" onClick={() => navigate('/booking')}>
            Reserve a Table
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
          alt="Little Lemon restaurant food"
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default CallToAction;