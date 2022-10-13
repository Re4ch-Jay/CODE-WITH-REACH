import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import ModalContact from './Modal';

const heroDetails = {
    text: 'I am Reach,',
    br: 'Fullstack Software Developer',
    note: 'A Big Fan Of Algorithm In Turing Machine based in Phnom Penh',
    button: 'Contact Me',
    icon: <CallIcon/>
}
function Hero() {
    const [open, setOpen] = useState(false)

  return (
    <section id="intro" className='my-5'>
        <div className="container-xxl">
            <div className="row g4 justify-content-center align-items-center">
                <div className="col-md-5 text-center text-md-start">
                    <h1>
                        <div className="text-warning display-2 fw-bold">{heroDetails.text}</div>
                    </h1>
                    <h3 className="text-warning fs-1 fw-bold">{heroDetails.br}</h3>
                    <h4 className="text-muted py-3">{heroDetails.note}</h4>
                    <Button
                     variant='contained' 
                     endIcon={heroDetails.icon}
                     onClick={() => setOpen(true)}
                     sx={{color: 'white'}}
                     >
                        {heroDetails.button}
                    </Button>
                    <ModalContact open={open} setOpen={setOpen}/>
                </div>

                <div className="col-md-6 d-none d-md-block">
                    <Avatar src="reach3.jpg" alt="" sx={{ width: "400px", height: "400px" }} />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero