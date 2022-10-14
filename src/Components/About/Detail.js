import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HomeIcon from '@mui/icons-material/Home';
function Detail() {
  return (
    <div className="text-start py-3">
        <h5><SchoolIcon/> Education </h5>
        <p className='text-muted'>
            I am a student at Cambodia Academy of Digital Technology. My careers and journey started from here.
        </p>
        <h5><CodeIcon/> Coding</h5>
        <p className='text-muted'>
            I am keen on coding and programming, I spent most of my hours in a day coding and programming and it became my hobby.
        </p>
        <h5><WorkOutlineIcon/> Job</h5>
        <p className='text-muted'>
            I am currently volunteering at CADT Coding Club. One of the student club at Cambodia Academy of Digital Technology.
        </p>
        <h5><HomeIcon/> Living</h5>
        <p className='text-muted'>
            I am currently a student, fullstack software developer based in Phnom Penh, Cambodia.
        </p>
        
    </div>
  )
}

export default Detail