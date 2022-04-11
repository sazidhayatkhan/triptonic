import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Banner.css'
import Search from './Search'
import { useHistory } from 'react-router-dom'

function Banner() {
  const history=useHistory();
  const[showSearch, setShowSearch]=useState
  (false);
  return (
    <div className='banner'>
      <div className='banner_search'>
        {showSearch && <Search/>}




          <Button onClick={()=> 
          setShowSearch(!showSearch)}
             className='banner_searchButton'
             varient='outlined'>
               {showSearch ? "Hide" :
               'Search Dates'}
               
               </
          Button>
         
      </div>
      
      <div className='banner_info'>
        <h1>Get out and search your destiny</h1>
        <h5>We create your memories</h5>
        <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>

      </div>
    </div>

      

    
  )
}

export default Banner