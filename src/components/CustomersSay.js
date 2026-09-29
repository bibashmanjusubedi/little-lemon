import React from 'react';

function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'Sara L.', rating: '5/5', text: 'Amazing food and atmosphere!', image: 'https://i.pravatar.cc/100?img=1' },
    { id: 2, name: 'John D.', rating: '5/5', text: 'The Bruschetta is unbeatable.', image: 'https://i.pravatar.cc/100?img=3' },
    { id: 3, name: 'Maria R.', rating: '5/5', text: 'Authentic Mediterranean flavors!', image: 'https://i.pravatar.cc/100?img=5' }
  ];

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="rating">Rating: {item.rating}</div>
            <div className="user-info">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
            <p>"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;