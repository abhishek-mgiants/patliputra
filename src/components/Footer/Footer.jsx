import './Footer.css'

const Footer = () => {
  return (
      <>
          <div className="footer-container">
              <div className="footer-boxes first">
                  <div className="first-items">
                      <h1>Address</h1> 
                  </div>
                  <div className="first-items">
                      <h1>You Trust, We Deliver</h1>
                  </div>
              </div>
              <div className="footer-boxes second">
                  <div className="second-item">
                      <h1>say hello !</h1>
                  </div>
                  <div className="second-item2">
                      follow us
                  </div>
              </div>
              <div className="footer-boxes third">
                  <div className="third-item1">
                      <div className="white-box">
                          
                      </div>
                  </div>
                  <div className="third-item2">
                      <div className="third-boxes third-one">
                          <input type="text" placeholder='Name' />
                          <input type="email" placeholder='Email' />
                          <button>Submit </button>
                      </div>
                      <div className="third-boxes">
                          <h1>send an email !</h1>
                          </div>
                  </div>
              </div>
      </div>
      </>
  )
}

export default Footer
