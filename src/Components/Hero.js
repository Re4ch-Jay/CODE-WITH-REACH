import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import ModalContact from './Modal';
import { motion} from 'framer-motion/dist/framer-motion'

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
                    <motion.h1  initial={{x: '-100vw'}}
                                animate={{x: 0}}
                                transition={{delay: 0.5}}>
                        <div className="text-warning display-2 fw-bold">{heroDetails.text}</div>
                    </motion.h1>
                    <motion.h3 
                    initial={{x: '100vw'}}
                    animate={{x: 0}}
                    transition={{delay: 1}}
                    className="text-warning fs-1 fw-bold">{heroDetails.br}</motion.h3>
                    <motion.h4 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.5, duration: 0.3 }}
                    className="text-muted py-3">{heroDetails.note}</motion.h4>
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

                <motion.div 
                initial={{x: '100vw'}}
                animate={{x: 0}}
                transition={{delay: 0.5, duration: 0.5}}
                className="col-md-6 d-none d-md-block">
                    <Avatar src="reach3.jpg" alt="" sx={{ width: "400px", height: "400px" }} />
                </motion.div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero