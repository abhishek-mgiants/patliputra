import {useEffect} from 'react';
import './Home.css';

const Home = () => {

  useEffect(() => {
    const heading = document.getElementById('heading');
    const letters = heading.textContent.split('');

    heading.textContent = ''; // Clear the heading text

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0'; // Set initial opacity to 0
      span.style.animation = `appearFromBaseline 0.5s ease ${0.1 * index}s forwards`; // Apply the animation with a delay for each letter
      heading.appendChild(span);
    });
  }, []);
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
              <img src="assets/P3.png" alt="Brand Logo" />
            </li>
          </ul>
        </nav>

        <section className="home-heading-section">
        <div className="container">
    <h1 className="animated-heading" id="heading">You Trust, We  Deliver</h1>
</div>

          {/* <h2 className="home-heading">You Trust We Deliver</h2> */}
          <p className="home-description">Moving is not an easy process and finding the right  moving  company can be crucial for avoiding problems like overcharging,  losing time and even having stolen or  damage item But now it's easy with us</p>
          {/* <button className="cta-button">Contact Us</button> */}
          <button className="btn-fill-hover">Contact Us</button>
          

        </section>
      </div> 
    </>
  );
};

export default Home;
