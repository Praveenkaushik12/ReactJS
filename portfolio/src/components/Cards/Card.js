import React from 'react';
import './Card.css'; // Make sure to import the CSS for the card if you have one


const Card = ({ backgroundImage, title, description }) => {
  return (
    <div className="card">
      <div className="card-image-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;



