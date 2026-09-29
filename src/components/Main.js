import React from 'react';

function Main() {
  const specials = [
    {
      id: 1,
      title: 'Greek salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Bruchetta',
      price: '$ 5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: '$ 5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-content-container">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-yellow">Reserve a Table</button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" 
            alt="Little Lemon food plate" 
            className="hero-img"
          />
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials-section">
        <div className="specials-header">
          <h2>Specials</h2>
          <button className="btn-yellow">Online Menu</button>
        </div>

        <div className="cards-grid">
          {specials.map((item) => (
            <article key={item.id} className="card">
              <img src={item.image} alt={item.title} />
              <div className="card-body">
                <div className="card-header">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <a href="#order" className="order-link">
                  Order a delivery 🚴
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;