import React from 'react'
import './Clients.css'

const Clients = () => {
    const clientsData = [
        {
          id: 1,
          clientName: 'Amazon',
          imgPath:'https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png'
        },
        {
          id: 2,
          clientName: 'FlipKart',
          imgPath:'https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png'
        },
        {
          id: 3,
          clientName: 'CarlsBerg',
          imgPath:'https://1000logos.net/wp-content/uploads/2016/10/Carlsberg-logo.jpg'
        },
        {
          id: 4,
          clientName: 'Nestle',
          imgPath:'https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-Nestle-Logo.jpg'
        },
        {
          id: 5,
          clientName: 'Vishal',
          imgPath:'https://pbs.twimg.com/media/EMnRgEcU0AAftCT.png'
        },
       
        {
          id: 6,
          clientName: 'Prestige',
          imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHr8S2O9__ipufI7spZojWiybkVrGRZKVT-YQFWIv0A&s'
        },
        {
          id: 7,
          clientName: 'Bluedart',
          imgPath:'https://upload.wikimedia.org/wikipedia/commons/2/2d/Blue_Dart_logo_transparent.png'
        },
        {
          id: 8,
          clientName: 'arzooo',
          imgPath:'https://media.licdn.com/dms/image/C4E0BAQHqqHVBNWFVpQ/company-logo_200_200/0/1601550951931?e=2147483647&v=beta&t=pHLzpqCV1bk4oHa2adNIxfBdEA5lUJbffzYtdllJeHA'
        },
        {
          id: 9,
          clientName: 'big basket',
          imgPath:'https://logos-download.com/wp-content/uploads/2021/01/Bigbasket_Logo.png'
        },
        {
          id: 10,
          clientName: 'Alpex',
          imgPath:'https://alpexsolar.com/assets/LOGO.png'
        },
        
      ]
  return (
    <div className='client-main'>
    <div className='clients-heading'>
      OVER <span>1000+ CLIENTS</span> ALL OVER INDIA 
     </div>
  <div className="marquee">
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
        
    </div>
  )
}

export default Clients