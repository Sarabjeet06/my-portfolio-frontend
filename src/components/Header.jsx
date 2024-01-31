import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({menuClicked,setMenuClicked,setCloseClicked,scrollDirection,isThresholdReached}) => {

  return (
    <div className={`header-container ${scrollDirection === 'up' ? 'navbar-up' : ''} ${scrollDirection === 'down' ? 'navbar-down' : ''} ${isThresholdReached ? 'change-nav' : ''}`}>
      <div className='Navbar-name'>
        Sarabjeet Singh
      </div>
      <div className={"headersection-1"}>
        <div className='navbar-toggle'>

        </div>
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Education'>Education</a>
        <a href='#Projects'>Projects</a>
        <a href='#Contact'>Contact</a>
      </div>
      <div className='navbar-toggle'>
        <MenuIcon className={`nav-icon ${menuClicked ? 'dont-show' : 'show'}`} onClick={() => {
          setMenuClicked(true);
          setCloseClicked(false);
          console.log(menuClicked);
        }} />

      </div>

    </div>
  )
}

export default Header