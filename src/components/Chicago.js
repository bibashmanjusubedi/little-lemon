import React from 'react';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          A Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved
          to the United States to start their dream restaurant. Based in Chicago,
          their recipes blend traditional Italian roots with modern culinary techniques.
        </p>
      </div>
      <div className="chicago-images">
        <img
          src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=500&q=80"
          alt="Mario and Adrian"
          className="img-stacked-top"
        />
      </div>
    </section>
  );
}

export default Chicago;