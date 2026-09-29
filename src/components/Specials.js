import React from 'react';

function Specials() {
  const specialsData = [
    {
      id: 1,
      title: 'Greek salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Bruschetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="btn-yellow">Online Menu</button>
      </div>
      <div className="cards-grid">
        {specialsData.map((item) => (
          <article key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <a href="#order" className="order-link">Order a delivery 🚴</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;