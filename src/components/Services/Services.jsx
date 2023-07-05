import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Supply Chain',
      imgpath: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Suppy chain ',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit aliquid sint aliquam sed. Vitae asperiores similique itaque nemo repudiandae repellat, blanditiis in. Nesciunt nemo quia voluptate? Quos esse nesciunt, accusantium modi aut maxime quibusdam rerum beatae sed saepe cupiditate officia aliquam repellendus? Consectetur voluptate minus laboriosam quasi nobis praesentium.',
    },
    {
      id: 2,
      name: 'Last mile delivery',
      imgpath: 'https://images.pexels.com/photos/7203788/pexels-photo-7203788.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: ' Last mile Heading',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit aliquid sint aliquam sed. Vitae asperiores similique itaque nemo repudiandae repellat, blanditiis in. Nesciunt nemo quia voluptate? Quos esse nesciunt, accusantium modi aut maxime quibusdam rerum beatae sed saepe cupiditate officia aliquam repellendus? Consectetur voluptate minus laboriosam quasi nobis praesentium.',
    },
    {
      id: 3,
      name: 'Distribution Network',
      imgpath: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: ' Distribution Network Heading',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit aliquid sint aliquam sed. Vitae asperiores similique itaque nemo repudiandae repellat, blanditiis in. Nesciunt nemo quia voluptate? Quos esse nesciunt, accusantium modi aut maxime quibusdam rerum beatae sed saepe cupiditate officia aliquam repellendus? Consectetur voluptate minus laboriosam quasi nobis praesentium.',
    },
    {
      id: 4,
      name: 'Transportation ',
      imgpath: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Transportation Heading',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit aliquid sint aliquam sed. Vitae asperiores similique itaque nemo repudiandae repellat, blanditiis in. Nesciunt nemo quia voluptate? Quos esse nesciunt, accusantium modi aut maxime quibusdam rerum beatae sed saepe cupiditate officia aliquam repellendus? Consectetur voluptate minus laboriosam quasi nobis praesentium.',
    },
    {
      id: 5,
      name: 'Supplier and Inventory',
      imgpath: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Inventory Heading',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit aliquid sint aliquam sed. Vitae asperiores similique itaque nemo repudiandae repellat, blanditiis in. Nesciunt nemo quia voluptate? Quos esse nesciunt, accusantium modi aut maxime quibusdam rerum beatae sed saepe cupiditate officia aliquam repellendus? Consectetur voluptate minus laboriosam quasi nobis praesentium.',
    },
    {
      id: 6,
      name: 'Supply Chain Advisory',
      imgpath: 'https://images.pexels.com/photos/4481529/pexels-photo-4481529.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Supply Chain Advisory Heading',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit aliquid sint aliquam sed. Vitae asperiores similique itaque nemo repudiandae repellat, blanditiis in. Nesciunt nemo quia voluptate? Quos esse nesciunt, accusantium modi aut maxime quibusdam rerum beatae sed saepe cupiditate officia aliquam repellendus? Consectetur voluptate minus laboriosam quasi nobis praesentium.',
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-navbar">
        {services.map((service) => (
          <button
            key={service.id}
            className={`service-link ${selectedService === service ? 'active' : ''}`}
            onClick={() => handleServiceClick(service)}
          >
            {service.name}
          </button>
        ))}
      </div>
      <div className="services-content">
        {selectedService ? (
          <div className="service-details">
            <div className="service-image">
              <img src={selectedService.imgpath} alt={selectedService.name} />
            </div>
            <div className="service-info">
              <h3>{selectedService.heading}</h3>
              <p>{selectedService.description}</p>
            </div>
          </div>
        ) : (
          <p>Select a service to view details</p>
        )}
      </div>
    </div>
   
  );
};

export default Services;
