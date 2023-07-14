import './Whyus.css'
import Accordion from 'react-bootstrap/Accordion';
const Whyus = () => {
  return (
  <>
  <div className="whyusContainer">
     <img src="src/assets/scooter.png" alt="" />
     <div className="whyusDescription">
        <h3>
            Why Choose Us
        </h3>
        <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header> <h2>
        Plan It
         </h2></Accordion.Header>
        <Accordion.Body>
        Reduce costs
<br />Improve efficiency
<br />
Improve customer service
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
         <h2>
            Build It
         </h2>
         </Accordion.Header>
        <Accordion.Body>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ducimus!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" >
        <Accordion.Header> <h2>
            Run It
         </h2></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
     </div>
  </div>
  
  
  </>
  )
}

export default Whyus