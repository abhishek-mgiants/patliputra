import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull} from 'tsparticles';
import './AboutUs.css'


export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (

      
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            "detectRetina": true, // Enable to detect retina and adjust the pixel ratio accordingly

            "fpsLimit": 60,
            "interactivity": {
              "events": {
                "onHover": {
                  "enable": true,
                  "mode": "repulse",
                },
                "onClick": {
                  "enable": true,
                  "mode": "push",
                },
              },
              "modes": {
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3,
                },
              },
            },
            "particles": {
              "number": {
                "value": 100,
                "density": {
                  "enable": true,
                  "value_area": 800,
                },
              },
              "color": {
                "value": "#ffffff",
              },
              "shape": {
                "type": "circle",
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false,
                },
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false,
                },
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#000000",
                "opacity": 0.4,
                "width": 2,
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200,
                },
              },
            },
            "retina_detect": true,
          }}
        
        />

  
  );
}