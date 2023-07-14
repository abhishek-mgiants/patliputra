import React from 'react'
import './Clients.css'

const Clients = () => {
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
        },
        
        
      ]
  return (
    <div className='client-main'>
    <div className='clients-heading'>
      OVER <span>1000+ CLIENTS</span> ALL OVER INDIA 
     </div>
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
  )
}

export default Clients