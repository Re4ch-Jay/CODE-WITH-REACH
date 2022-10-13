import { Avatar } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';

const heroDetails = {
  text: 'Portfolio &',
  br: 'Project',
  note: 'Simplicity is the soul of efficiency.',
  button: 'Contact Me',
  icon: <CallIcon/>
}

function ProjectHero() {
  return (
    <section id="intro" className='my-5'>
        <div className="container-xxl">
            <div className="row g4 justify-content-center align-items-center">
                <div className="col-md-5 text-center text-md-start">
                    <h1>
                        <div className="text-warning display-2 fw-bold">{heroDetails.text}<br/>{heroDetails.br} </div>
                    </h1>
                    <h4 className="text-muted py-3">{heroDetails.note}</h4>
                </div>

                <div className="col-md-6 d-none d-md-block">
                    <Avatar src="reach.jpg" alt="" sx={{ width: "400px", height: "400px" }} />
                </div>
            </div>            
        </div>
    </section>
  )
}

export default ProjectHero