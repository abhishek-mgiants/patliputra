import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-link"><a href="#home">Home</a></li>
            <li className="nav-link with-dropdown">
              <a href="#services">Services</a>
              <ul className="dropdown-menu">
                <li className="dropdown-item"><a href="#service1">Supply Chain Execution</a></li>
                <li className="dropdown-item"><a href="#service2">Supply Chain Advisory</a></li>
                <li className="dropdown-item"><a href="#service3">Distribution Network Management</a></li>
                <li className="dropdown-item"><a href="#service4">Supplier & Inventory Management</a></li>
                <li className="dropdown-item"><a href="#service5">Transportation Services</a></li>
                <li className="dropdown-item"><a href="#service6">Last Mile Delivery</a></li>
              </ul>
            </li>
            <li className="nav-link"><a href="#about">About Us</a></li>
            <li className="nav-link"><a href="#contact">Contact Us</a></li>
            <li className="brand-logo">
              <img src="https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/Patliputra_logistics.png?raw=true" alt="Brand Logo" />
            </li>
          </ul>
        </nav>

        <section className="home-heading-section">
          <h2 className="home-heading">You Trust We Deliver</h2>
          <p className="home-description">Moving is not an easy process and finding the right  moving  company can be crucial for avoiding problems like overcharging,  losing time and even having stolen or  damage item But now it's easy with us</p>
          <button className="cta-button">Contact Us</button>
        </section>
      </div> 
    </>
  );
};

export default Home;
