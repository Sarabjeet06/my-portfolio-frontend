import React from 'react'
import Yearcard from './Yearcard'

const Educationcard = ({classNumber, board, school, percentage, year}) => {
  console.log({percentage});
  return (
    <div className='Education-Card'>
      <div className='class-number'>{classNumber}</div>
      <div className='board'>{board}</div>
      <div className='school'>{school}</div>
      <div className='percentage'>
        <div className='yearContainer'>
          <Yearcard year={year}/>
        </div>
        <div className='circle'>{percentage}</div>
      </div>
    </div>
  )
}

export default Educationcard