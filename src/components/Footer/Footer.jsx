import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="subContainer">
        <div className="footer-about-patliputra">
          <h3>About Patliputra</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean euismod bibendum laoreet.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Main Street, City, Country</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>info@example.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#service1">Service 1</a></li>
            <li><a href="#service2">Service 2</a></li>
            <li><a href="#service3">Service 3</a></li>
            <li><a href="#service4">Service 4</a></li>
            <li><a href="#service5">Service 5</a></li>
            <li><a href="#service6">Service 6</a></li>
          </ul>
        </div>
        <div className="footer-socialMedia">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
            <a href="mailto:info@example.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        
      </div>
  

        <div className="outer-container">
  <div className="inner-container">
  <i className="fa-solid fa-truck"></i>
  </div>
</div>

    </footer>
  );
};

export default Footer;
