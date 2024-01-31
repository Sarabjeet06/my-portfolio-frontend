import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Sidemenu = ({menuClicked,setMenuClicked,closeClicked,setCloseClicked}) => {
  return (
    <div className={`side-menu ${menuClicked ? 'active' : ''} ${closeClicked ? 'not-active' : ''}`}>
        <CloseIcon className='close-button' onClick={() => {
          setCloseClicked(true);
          setMenuClicked(false);
        }} />
        <div className='side-menu-links'>
          <a href='#Home'>Home</a>
          <a href='#About'>About</a>
          <a href='#Education'>Education</a>
          <a href='#Projects'>Projects</a>
          <a href='#Contact'>Contact</a>
        </div>
      </div>
  )
}

export default Sidemenu