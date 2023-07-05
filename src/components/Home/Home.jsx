import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="left-column">
        <h1 className="tagline">You Trust,<br/> We Deliver</h1>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="right-column">
        <img  src="https://images.pexels.com/photos/2091159/pexels-photo-2091159.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div> 
    <div className="aboutus-container">
        <section className='aboutus-catchyLine'>
            <h2> 
                Where We Come From
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint ex aspernatur eaque assumenda unde ullam minima, incidunt corrupti odio necessitatibus quasi ducimus delectus, cumque voluptas dicta iste, quaerat cum?
            </p>
            <button className='aboutus-cta'>Read More</button>
        </section>
        <div className="aboutus-clients">
            <div className="clients-heading">
                <h1>Our Clients</h1>
            </div>
  <div className="marquee">
    <span className="client-name">Amazon</span>
    <span className="client-name">Flipkart</span>
    <span className="client-name">Myntra</span>
    <span className="client-name">Ajio</span>
    <span className="client-name">Olx</span>
    <span className="client-name">Amazon</span>
    <span className="client-name">Flipkart</span>
    <span className="client-name">Myntra</span>
    <span className="client-name">Ajio</span>
    <span className="client-name">Olx</span>
    <span className="client-name">Amazon</span>
    <span className="client-name">Flipkart</span>
    <span className="client-name">Myntra</span>
    <span className="client-name">Ajio</span>
    <span className="client-name">Olx</span>
    <span className="client-name">Amazon</span>
    <span className="client-name">Flipkart</span>
    <span className="client-name">Myntra</span>
    <span className="client-name">Ajio</span>
    <span className="client-name">Olx</span>
    <span className="client-name">Amazon</span>
    <span className="client-name">Flipkart</span>
    <span className="client-name">Myntra</span>
    <span className="client-name">Ajio</span>
    <span className="client-name">Olx</span>

    
  </div>
</div>

    </div>
    </>
  );
};

export default Home;
