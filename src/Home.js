import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'




function Home() {
  const tripList =[
    {
      img: "./images/image card 1.png",
      title:'Own Trip',
      description:'Unique activities you can do yourself, led by a world of hosts. '
    },
    {
      img: './images/image card 2.png',
      title:'Group Trip',
      description: 'Unique activities you can do yourself, led by a world of hosts'
    },
    {
      img:'./images/image card 3.png',
      title:'Custom Trip',
      description:'Unique activities you can do yourself, led by a world of hosts'
    }
    

  ]

  const placeList=[
    {
      img: "./images/Bandarban.png",
      title:'Bandarban',
      description:'Unique activities you can do yourself, led by a world of hosts.',
      price: '3000৳ - 5000৳'
    },
    {
      img: './images/Coxbazar.png',
      title:"Cox's Bazar",
      description: 'Unique activities you can do yourself, led by a world of hosts',
      price: '4000৳ - 7000৳'
    },
    {
      img:'./images/Saintmartin.png',
      title:'Saint Martin',
      description:'Unique activities you can do yourself, led by a world of hosts',
      price: '6000৳ - 9000৳'
    }
    
  ]
  return (
    <div className='home'>
     <Banner/>

    <div className='home_section'>
     {
       tripList.map((trip) => (<Card src={trip.img} title={trip.title} description={trip.description}/> ))
     }
     </div>

     <div className='home_section'>
      {
        placeList.map((place)=> (<Card src={place.img} title={place.title} description={place.description} price={place.price} /> ))
      }
      </div>
      
          
    </div>
    
  

  )
}

export default Home