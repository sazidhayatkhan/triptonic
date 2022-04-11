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
        img="./images/BandarbanSeacrhResult_1.png"
        location='Fill with joy and nature'
        title='The Green Trip to Bandarban'
        description='2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine'
        star={4.3}
        price='£65 / night'
        total='£480 total'
        />
        <SearchResult
        img="./images/BandarbanSeacrhResult_1.png"
        location='pRIVATE PLACE FOR YOU'
        title='Hill top Bandarban'
        description='2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine'
        star={4.3}
        price='£65 / night'
        total='£480 total'
        />

<SearchResult
        img="./images/BandarbanSeacrhResult_1.png"
        location='Fill with joy and nature'
        title='The Green Trip to Bandarban'
        description='2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine'
        star={4.3}
        price='£65 / night'
        total='£480 total'
        />

<SearchResult
        img="./images/BandarbanSeacrhResult_1.png"
        location='Fill with joy and nature'
        title='The Green Trip to Bandarban'
        description='2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine'
        star={4.3}
        price='£65 / night'
        total='£480 total'
        />

<SearchResult
        img="./images/BandarbanSeacrhResult_1.png"
        location='Fill with joy and nature'
        title='The Green Trip to Bandarban'
        description='2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine'
        star={4.3}
        price='£65 / night'
        total='£480 total'
        />
        
      </div>
    
    
    </div>
  )
}

export default SearchPage