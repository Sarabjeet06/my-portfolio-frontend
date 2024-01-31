import React from 'react'
import Intro from './Intro'
import developer from '../assets/images/developer.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = () => {
  const mailId='sarabjeet0601@gmail.com';
  return (
    <div className='home-main-container' id='Home'>
      <div className='home-container'>
        <div className='socail-row'>
          <div className='social-detail'>
            <a href="https://github.com/Sarabjeet06" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className='icon' />
            </a>
            <div className='icon-detail detail-1'>sarabjeet06</div>
          </div>
          <div className='social-detail'>
            <a href={`mailto:${mailId}`} target="_blank" rel="noopener noreferrer">
              <MailIcon className='icon' />
            </a>
            <div className='icon-detail detail-2'>{mailId}</div>
          </div>
        </div>
        <div className='home-image'>
          <img src={developer} alt='developer-home'></img>
        </div>
        <div className='home-content'>
          <div className='hello-line'>Hello! My name is</div>
          <div className='my-name'>Sarabjeet Singh</div>
          <div className='intro-line'>
            <div className='intro-type'>I am a</div>
            <Intro />
          </div>
          <a href="https://drive.google.com/file/d/1UwvluS7TEaSGrf4RklCtv8w1SVB-GoQA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Check out Resume
          </a>
        </div>
        <div className='socail-row'>
          <div className='social-detail'>
            <a href="https://www.linkedin.com/in/sarabjeet06/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className='icon' />
            </a>
            <div className='icon-detail detail-3'>sarabjeet06</div>
          </div>
          <div className='social-detail'>
            <a href="https://www.instagram.com/sarabjeet0601/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className='icon' />
            </a>
            <div className='icon-detail detail-4'>sarabjeet0601</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home