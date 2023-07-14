import './AboutUs.css'
const AboutUs = () => {
  return (
      <>
          <div className="aboutUs-container">
              <div className="aboutWareHouse">
                  <img src="src/assets/wareHouseLeft.png" alt="" />
                  <div className="aboutus-description">
                  <h2>About Us</h2>  
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt aliquam officiis atque exercitationem nam culpa asperiores vitae quibusdam delectus laudantium debitis ipsam repellendus, vero adipisci, error aperiam nihil cupiditate.</p>
                  <button className="about-cta">
                      Read More
                  </button>
                  </div>
                  <div className="roadRight">
                      <img src="src/assets/roadRight.png" alt="" />
                      <div className="scooter">
                      <img src="src/assets/scooter.png" alt="" />
                  </div>
                  </div>
                  
             </div>
        
          </div>
      </>
  )
}

export default AboutUs
