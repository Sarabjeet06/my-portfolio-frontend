import React from 'react'
import Typewriter from 'typewriter-effect';

const Intro = () => {
    return (
        <div >
            <Typewriter
                options={{
                    strings: ['Web developer ', 'Student ' , 'Learner '],
                    autoStart: true,
                    loop: true,
                }}
                
            />
        </div>
    )
}

export default Intro