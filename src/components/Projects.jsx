import React from 'react'
import project1 from '../assets/images/To_do_list_photo.png'

const Projects = () => {
    return (
        <div className='each-container' id='Projects'>
            <div className='section-container'>
                <div className='sub-heading'>Projects</div>
                <div className='horizontal-line'></div>
                <div className='project-section proj-img-left'>
                    <img src={project1} alt='to_do_project' />
                    <div className='project-info'>
                        <div className='project-name'>To Do List Project</div>
                        <div className='project-details'>
                        I developed a user-friendly to-do list application, emphasizing seamless task management. The project includes robust features for creating and deleting tasks, ensuring a streamlined user experience. By prioritizing an intuitive design, I aimed to enhance personal productivity. This endeavor showcases my proficiency in both front-end and back-end development, providing a practical solution for efficient task organization.
                        </div>
                        <div className='Tech-stack'>
                            <div className='tech'>HTML</div>
                            <div className='tech'>CSS</div>
                            <div className='tech'>JavaScript</div>
                            <div className='tech'>Node Js</div>
                            <div className='tech'>Express Js</div>
                            <div className='tech'>MongoDb</div>
                        </div>
                        <div className='github-link'>
                        <button><a href='https://github.com/Sarabjeet06/To_Do_List_Project' target='_blank' rel="noopener noreferrer" >Github Link</a></button>
                        </div>
                    </div>
                </div>
                <div className='project-section proj-img-right'>
                    <div className='project-info'>
                        <div className='project-name'>Weather Information Project</div>
                        <div className='project-details'>
                        I developed an intuitive weather app enabling users to input a city name for localized forecasts. The user-friendly search feature accesses a vast global database, and APIs from leading weather providers ensure accurate and up-to-date information, showcasing my expertise in user-centric app design and data integration.
                        </div>
                        <div className='Tech-stack'>
                            <div className='tech'>HTML</div>
                            <div className='tech'>CSS</div>
                            <div className='tech'>JavaScript</div>
                            <div className='tech'>Node Js</div>
                            <div className='tech'>Express Js</div>
                            <div className='tech'>API</div>
                        </div>
                        <div className='github-link'>
                        <button><a href='https://github.com/Sarabjeet06/weather_info_project' target='_blank' rel="noopener noreferrer">Github Link</a></button>
                        </div>
                    </div>
                    <img src={project1} alt='to_do_project' />
                </div>
            </div>
        </div>
    )
}

export default Projects