import React, { useState } from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
// import ParticleBG from "../AboutUs/ParticleBG";

const aboutLeadershipData = [
  {
    id: 1, 
    name: "John Doe", 
    designation: "CEO",
    imgPath: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed turpis nec dui gravida pharetra.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "COO",
    imgPath: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Praesent id ipsum at purus eleifend eleifend. Maecenas dictum arcu nec nisi euismod placerat.",
  },
  {
    id: 3,
    name: "Jane singh",
    designation: "COO",
    imgPath: "https://images.unsplash.com/photo-1628251044951-04d21ef52677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description:
      "Praesent id ipsum at purus eleifend eleifend. Maecenas dictum arcu nec nisi euismod placerat.",
  },  {
    id: 4,
    name: "Jane oberoi",
    designation: "COO",
    imgPath: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Praesent id ipsum at purus eleifend eleifend. Maecenas dictum arcu nec nisi euismod placerat.",
  },  {
    id: 5,
    name: "Mark Smith",
    designation: "COO",
    imgPath: "/path/to/image2.jpg",
    description:
      "Praesent id ipsum at purus eleifend eleifend. Maecenas dictum arcu nec nisi euismod placerat.",
  },  {
    id: 6,
    name: "Lovely Smith",
    designation: "COO",
    imgPath: "/path/to/image2.jpg",
    description:
      "Praesent id ipsum at purus eleifend eleifend. Maecenas dictum arcu nec nisi euismod placerat.",
  },  {
    id: 7,
    name: "Om Smith",
    designation: "COO",
    imgPath: "https://images.unsplash.com/photo-1628251044951-04d21ef52677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description:
      "Praesent id ipsum at purus eleifend eleifend. Maecenas dictum arcu nec nisi euismod placerat.",
  },
];

const About = () => {
  AOS.init({duration:1000})
  const [currentProfile, setCurrentProfile] = useState(0);

  const handlePrevProfile = () => {
    setCurrentProfile((prevProfile) =>
      prevProfile === 0 ? aboutLeadershipData.length - 1 : prevProfile - 1
    );
  };

  const handleNextProfile = () => {
    setCurrentProfile((prevProfile) =>
      prevProfile === aboutLeadershipData.length - 1 ? 0 : prevProfile + 1
    );
 
  
  };

  return (
    <div className="about-container">
       
      <h1  className="about-heading">About Us</h1> 
      <div className="about-description">
        <div className="">
        <p data-aos='slide-right'>
        Patliputra Logistics is a logistics organization that was founded in 2013 with the goal of
simplifying the complex operational solutions faced by businesses in India. We are a client-
centric company that focuses on providing innovative, system-based logistics solutions that are
tailored to the specific needs of our customers. <br /> <br />
We are a company that is constantly innovating and evolving, and we are always looking for
new ways to improve our services. We are committed to providing our customers with the best
possible logistics experience, and we believe that we are the best company to help businesses
achieve their goals.
        </p>
        </div>
        
        <div className="column">
        
         <div className="aboutLogo">
         <img src="assets/P3.png" alt="" />
         </div>
      
        </div>
        <div data-aos="slide-left" className="column">
          <ul>
            <li> <h2>Plan it</h2>
            </li>
            <li> <h2>Build it</h2>
            </li>
            <li> <h2>Run it</h2>
            </li>
          </ul>
         
        </div>
      </div>
      <div className="staticSection">
      <h2>Our vision</h2>
       <div className="content">
       <p>
        To be the most Committed Company in Delivering a World Class Supply Chain Management Solutions.
        </p>
       </div>

                 
      </div>

      <div className="expertSolution">
        <h2>Expert Solution in 4 key Areas</h2>
        <div data-aos='fade-up'  className="iconContainer">
          <div  className="iconContent">
          <img  src="Descriptive.png" alt="" />
          <h3>Descriptive</h3>
          <span>(Value Mapping  Analytics) </span>
          </div>
          <div className="iconContent">
          <img  src="Prescriptive.png" alt="" />
          <h3>Prescriptive</h3>
          <span>(Performance  Analytics) </span>
          </div>
          <div className="iconContent">
          <img  src="control-tower.png" alt="" />
          <h3>Control Tower</h3>
          <span>(Optimization)</span>
          </div>
          <div className="iconContent">
          <img  src="Diagnostics.png" alt="" />
          <h3>Diagnostics</h3>
          <span></span>
          </div>
          
        </div>
      </div>
      <div className="about-leadership">
        <div className="arrowContainer">
          <h2>Our Team</h2>
          <div className="arrows">
            <span onClick={handleNextProfile}><i className="fa-solid fa-chevron-left"></i></span>
            <span onClick={handlePrevProfile}><i className="fa-solid fa-chevron-right"></i></span>
          </div>
        </div>
        <div className="leadershipContainer">
        <img 
            src={aboutLeadershipData[currentProfile].imgPath}
            alt={aboutLeadershipData[currentProfile].name}
          />
          <h3>{aboutLeadershipData[currentProfile].name}</h3>
          <p>{aboutLeadershipData[currentProfile].designation}</p>
          <p>{aboutLeadershipData[currentProfile].description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
