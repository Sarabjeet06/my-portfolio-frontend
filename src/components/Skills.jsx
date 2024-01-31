import React from 'react'
import cplusplusImage from '../assets/images/C++_image.png';
import javaImage from '../assets/images/java_Image.png'
import javascriptImage from '../assets/images/js_image.png';
import htmlImage from '../assets/images/HTML_Image.png';
import cssImage from '../assets/images/CSS_image.png';
import tailwindcssImage from '../assets/images/TailwindCss_image.png';
import reactImage from '../assets/images/React_image.png';
import nextjsImage from '../assets/images/nextjs_image.svg';
import nodejsImage from '../assets/images/nodejs_image.svg';
import expressjsImage from '../assets/images/Express_Image.png';
import mongodbImage from '../assets/images/MongoDb_image.png';
import postmanImage from '../assets/images/postman_image.svg';
import githubImage from '../assets/images/Github_Image.png';
import vsCodeImage from '../assets/images/vsCode_image.png';

const Skills = () => {
    return (
        <div className='each-container' id='Skills'>
            <div className='section-container'>
                <div className='sub-heading'>Skills</div>
                <div className='horizontal-line'></div>
                <div className='skill-subheading'>Languages</div>
                <div className='skill-images'>
                    <img src={cplusplusImage} alt='C plus plus logo' />
                    <img src={javaImage} alt='Java logo' />
                    <img src={javascriptImage} alt='Javascript logo' />
                </div>
                <div className='skill-subheading'>Others</div>
                <div className='skill-images'>
                    <img src={htmlImage} alt='HTML logo' />
                    <img src={cssImage} alt='CSS logo' />
                    <img src={tailwindcssImage} alt='Tailwind Css logo' />
                    <img src={reactImage} alt='react js logo' />
                    <img src={nextjsImage} alt='next js logo' />
                    <img src={nodejsImage}alt='node js logo' />
                    <img src={expressjsImage} alt='express js logo' />
                    <img src={mongodbImage} alt='mongoDb logo' />
                    <img src={postmanImage} alt='postman logo' />
                    <img src={githubImage} alt='github logo' />
                    <img src={vsCodeImage} alt='vsCode logo' />
                </div>
            </div>
        </div>
    )
}

export default Skills