import React from 'react'
import SkillverseProject from '../assets/images/SkillverseProject.png'
import WorkzenProject from '../assets/images/WorkzenProject.png'

const Projects = () => {
    return (
        <div className='each-container' id='Projects'>
            <div className='section-container'>
                <div className='sub-heading'>Projects</div>
                <div className='horizontal-line'></div>
                <div className='project-section proj-img-left'>
                    <img src={WorkzenProject} alt='to_do_project' />
                    <div className='project-info'>
                        <div className='project-name'>Workzen</div>
                        <div className='project-details'>
                            Developed a collaborative work management tool in a team of 4, featuring separate logins for employees and admins. The tool included a dashboard, calendar, and task board, with admin routes for task creation and assignment, enhancing team coordination and productivity. Served as a frontend developer, responsible for designing and implementing user interfaces using Next.js and Tailwind CSS.
                        </div>
                        <div className='Tech-stack'>
                            <div className='tech'>Next Js</div>
                            <div className='tech'>Taiwind CSS</div>
                            <div className='tech'>MongoDb</div>
                            <div className='tech'>Node Js</div>
                            <div className='tech'>Express Js</div>
                            <div className='tech'>Firebase</div>
                        </div>
                        <div className='github-link'>
                            <button><a href='https://work-zen.vercel.app/' target='_blank' rel="noopener noreferrer" >Website Link</a></button>
                        </div>
                    </div>
                </div>
                <div className='project-section proj-img-right'>
                    <div className='project-info'>
                        <div className='project-name'>SkillVerse</div>
                        <div className='project-details'>
                            Developed an innovative educational platform in a team of 4 to facilitate mentor-student interactions, peer-to-peer teaching, project collaboration, real-time chats for queries, and access to educational resources. Contributed as a developer, involved in designing and implementing frontend functionalities. Designed and developed the frontend of the resources and home pages, focusing on creating a user-friendly interface and enhancing the overall user experience.
                        </div>
                        <div className='Tech-stack'>
                            <div className='tech'>React Js</div>
                            <div className='tech'>CSS</div>
                            <div className='tech'>Javascript</div>
                            <div className='tech'>Node Js</div>
                            <div className='tech'>Express Js</div>
                            <div className='tech'>Firebase</div>
                        </div>
                        <div className='github-link'>
                            <button><a href='https://skill-verse.vercel.app/' target='_blank' rel="noopener noreferrer">Website Link</a></button>
                        </div>
                    </div>
                    <img src={SkillverseProject} alt='to_do_project' />
                </div>
            </div>
        </div>
    )
}

export default Projects