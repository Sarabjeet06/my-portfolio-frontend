import React from 'react';
import developer from '../assets/images/developer.jpg';

const About = () => {
    return (
        <div className='each-container' id='About'>
            <div className='section-container'>
                <div className='sub-heading'>About</div>
                <div className='horizontal-line'></div>
                <div className='about-container'>
                    <div className='about-content'>
                        Welcome to my portfolio! I'm Sarabjeet Singh, a passionate B Tech student deeply immersed in software development. Proficient in <span>MERN</span>, I've successfully applied my expertise to projects, such as <span><a href='https://github.com/Sarabjeet06/To_Do_List_Project' target='_blank' rel="noopener noreferrer">To Do List</a></span> and <span><a href='https://github.com/Sarabjeet06/weather_info_project' target='_blank' rel="noopener noreferrer">Weather Information App</a></span>, highlighting my adept problem-solving and collaborative skills. I constantly explore new technologies and am committed to contributing innovative solutions to the ever-evolving software development landscape. My academic journey has provided a robust foundation, and my proactive learning approach ensures I stay ahead in this dynamic field. From crafting intuitive user interfaces to tackling intricate algorithms, I thrive on transforming ideas into impactful solutions. Join me on this coding journey, where curiosity meets dedication, as I strive to make a meaningful impact. Additionally, I've solved over <span>600+ problems </span> on <span><a href='https://leetcode.com/sarabjeet0601/' target='_blank' rel="noopener noreferrer">LeetCode</a></span> & <span><a href='https://auth.geeksforgeeks.org/user/sarabjeet0601' target='_blank' rel="noopener noreferrer">GeeksForGeeks</a></span> earned 5-star in C++ and problem solving on <span><a href='https://www.hackerrank.com/profile/sarabjeet0601' target='_blank' rel="noopener noreferrer" >HackerRank</a></span>, showcasing my commitment to continuous improvement and excellence.
                    </div>
                    <div>
                        <img src={developer} alt='developer-about'></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About