import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'




function Home() {
  return (
    <div className='home'>
     
    
    <Banner/>

    <div className='home_section'>
      <Card
        src='./images/image card 1.png'
        title='Own Trip'
        description='Unique activities you can do yourself, led by a world of hosts. '
      />

      <Card
      src='./images/image card 2.png'
      title='Group Trip'
      description='Unique activities you can do yourself, led by a world of hosts'
      />
      <Card
      src='./images/image card 3.png'
      title='Custom Trip'
      description='Unique activities you can do yourself, led by a world of hosts'
      />
    </div>

    <div className='home_section'>
    <Card
        src='./images/Bandarban.png'
        title='Bandarban'
        description='Bandarban hill tracts steeped in isolated tradition of diverse indigenous minorities.'
      />

      <Card
      src='./images/Coxbazar.png'
      title='CoxsBazar'
      description='Unique activities you can do yourself, led by a world of hosts'
      />
      <Card
      src='./images/Saintmartin.png'
      title='Saint Martin'
      description='Unique activities you can do yourself, led by a world of hosts'
      />

          
    </div>
    
  

  

    </div>

  )
}

export default Home