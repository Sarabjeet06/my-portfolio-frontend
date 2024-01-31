import React from 'react'
import Educationcard from './Educationcard'
import Yearcard from './Yearcard'

const Education = () => {
    return (
        <div className='each-container' id='Education'>
            <div className='section-container'>
                <div className='sub-heading'>Education</div>
                <div className='horizontal-line'></div>
                <div className='education-timeline'>
                    <div className='left-card'>
                        <div className='arrow'></div>
                        <Educationcard classNumber={"B Tech"} board={"University- GGSIPU"} school= {"College-Guru Tegh Bahadur Institute of Technology"} percentage= {"86%"} year={"August-2024"}/>
                    </div>
                    <div className='right-year'>
                        <Yearcard year={"August 2024"}/>
                    </div>
                    <div className='right-card'>
                    <div className='arrow'></div>
                        <Educationcard classNumber={"Class- 12"} board={"Board- CBSE"} school= {"School-Guru Nana Public School"} percentage= {"87%"} year={"August-2020"} />
                    </div>
                    <div className='left-year'>
                        <Yearcard year={"August 2020"}/>
                    </div>
                    <div className='vertical-line'></div>
                    <div className='left-card'>
                    <div className='arrow'></div>
                        <Educationcard classNumber={"Class- 10"} board={"Board- CBSE"} school= {"School-Guru Nana Public School"} percentage= {"74%"} year={"August-2018"}/>
                    </div>
                    <div className='right-year'>
                        <Yearcard year={"August-2018"}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Education