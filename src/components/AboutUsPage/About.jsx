import React, { useState } from "react";
import "./About.css";
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
       
      <h1 className="about-heading">About Us</h1>
      <div className="about-description">
        <div className="column">
          <h2>Column 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            turpis nec dui gravida pharetra.
          </p>
        </div>
        
        <div className="column">
          <h2>Column 2</h2>
          {/* Middle column content */}
        
      
        </div>
        <div className="column">
          <h2>Column 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            turpis nec dui gravida pharetra.
          </p>
        </div>
      </div>
      <div className="staticSection">

      </div>
      <div className="about-leadership">
        <div className="arrowContainer">
          <h2>Our Team</h2>
          <div className="arrows">
            <span onClick={handleNextProfile}><i class="fa-solid fa-chevron-left"></i></span>
            <span onClick={handlePrevProfile}><i class="fa-solid fa-chevron-right"></i></span>
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
