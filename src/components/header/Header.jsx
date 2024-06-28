import React from 'react'
import logo from '../../assets/img/logo.svg.png'
import { LogoImg, SectionDiv } from './HeaderStyle'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Header() {
  return (
    <SectionDiv>
    
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>Listing</li>
            <li>Members</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
           
          </ul>
        
          <div className="brand">
            <LogoImg src={logo} />
          </div>
          <div className="contact">
            <CallOutlinedIcon />
            <p>+68 685 88666</p>
            <PermIdentityOutlinedIcon className='user' />
            <button>Add Property </button>

          </div>
          <li className='hamburger'><MenuOutlinedIcon/></li>
        </div>
      
    </SectionDiv>
  )
}

export default Header