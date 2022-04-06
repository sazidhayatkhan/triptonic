import React from 'react'
import'./SearchPage.css'
import {Button} from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'> 
      <div className='searchPage_info'>
        <p>12 Stays . 10 april to 12 april . 2 guest </p>
        <h1>Stays nearby</h1>
        <Button
          variant='outlined'>Cancelation Flexibility</Button>
        <Button
          variant='outlined'>Type of Place</Button>
        <Button
          variant='outlined'>Price</Button>
        <Button
          variant='outlined'>Facilities</Button>
        <Button
          variant='outlined'>More filters</Button>
        <SearchResult
        img="./images/Bandarban.png"
        location='pRIVATE PLACE FOR YOU'
        title='Hill top Bandarban'
        description='23 peolpel last ught stayed theere'
        star={4.3}
        price='30doller/night'
        total='117 taka'
        />
        
      </div>
    
    
    </div>
  )
}

export default SearchPage