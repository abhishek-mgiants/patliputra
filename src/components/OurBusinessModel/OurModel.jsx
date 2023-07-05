import React from 'react';
import './OurModel.css';

const OurModel = () => {
  return (
    <div className="our-model-container">
      <div className="heading">
        <h2>Our Business Model</h2>
      </div>
      <div className="business-flow">
        <div className="cell">
        <i class="fa-solid fa-cart-shopping model-icon"></i>
        </div>
        <div className="cell">
        <i class="fa-solid fa-arrow-right model-icon"></i>
        </div>
        <div className="cell">
        <i class="fa-solid fa-boxes-packing model-icon"></i>
        </div>
        <div className="cell"><i class="fa-solid fa-arrow-down model-icon"></i></div>
        <div className="cell"></div>
        <div className="cell"><i class="fa-solid fa-handshake model-icon"></i></div>
        <div className="cell"><i class="fa-solid fa-arrow-left model-icon"></i></div>
        <div className="cell"><i class="fa-solid fa-truck-fast model-icon"></i></div>
      </div>
    </div>
  );
};

export default OurModel;
