import './Whyus.css'
import Accordion from 'react-bootstrap/Accordion';
const Whyus = () => {
  return (
  <>
  <div className="whyusContainer">
     <img src="https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/scooter.png?raw=true" alt="" />
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
        <ul>
          <li>Reduce Costs</li>
           <li>Improve Efficiency</li>
           <li>Improve Customer service</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
         <h2>
            Build It
         </h2>
         </Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Increasing Efficiency </li>
           <li>Reduced Risk</li>
           <li>Increased Compliance</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" >
        <Accordion.Header> <h2>
            Run It
         </h2></Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Right Delivery Model</li>
           <li>Partner with right suppliers</li>
           <li>Technology Advantage</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
     </div>
  </div>
  
  
  </>
  )
}

export default Whyus