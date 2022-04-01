import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='Header'>
    <img 
    className='Header_icon'
    src='/images/Triptonic Logo white.png'>
    </img>
         <div className='Header_center'>
        <input type='text'/>
        <SearchIcon/>
        </div>

        <div className='Header_right'>
          <p>Become a Host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <AccountCircleIcon /> 
            
        </div>
    
    </div>
  )
}

export default Header