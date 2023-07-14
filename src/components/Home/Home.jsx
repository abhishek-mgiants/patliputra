
import './Home.css';

const Home = () => {
  const clientsData = [
    {
      id: 1,
      clientName: 'Amazon',
      imgPath:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      clientName: 'Amazon',
      imgPath:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      clientName: 'Amazon',
      imgPath:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      clientName: 'Amazon',
      imgPath:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      clientName: 'Amazon',
      imgPath:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      clientName: 'Amazon',
      imgPath:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ]
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
        <div className="clients-container">
          {
            clientsData.map((client) => (
              <div key={client.id} className="clients-card">
            <img src={client.imgPath} alt="" />
                <div className="client-name">{ client.clientName}</div>
           </div>
            ))
          }
        </div> 
     
    </div>
    </>
  );
};

export default Home;
