import { Avatar } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import { motion} from 'framer-motion/dist/framer-motion'


function ProjectHero() {
 
  return (
    <section id="intro" className='my-5'>
        <div className="container-xxl">
            <div className="row g4 justify-content-center align-items-center">
                <motion.div className="col-md-5 text-center text-md-start"
                variants={animateVariants}
                initial="title"
                animate="animateTitle"  
                >
                    <h1>
                        <div className="text-warning display-2 fw-bold">{heroDetails.text}<br/>{heroDetails.br} </div>
                    </h1>
                    <h4 className="text-muted py-3">{heroDetails.note}</h4>
                </motion.div>

                <motion.div className="col-md-6 d-none d-md-block"
                initial="image"
                animate="animateImage"
                variants={animateVariants}
                >
                    <Avatar src="reach.jpg" alt="" sx={{ width: "400px", height: "400px" }} />
                </motion.div>
            </div>            
        </div>
    </section>
  )
}

export default ProjectHero

//animation
const animateVariants = {
  title: {
    x: '-100vw'
  },
  image: {
    x: '100vw'
  },
  animateTitle: {
    type: 'tween',
    x: 0,
    transition: {
      duration: 0.5,
      stifness: 50
    }
  },
  animateImage: {
    x: 0,
    transition: {
      delay: 0.5, duration: 0.5
    }
  }
} 

const heroDetails = {
  text: 'Portfolio &',
  br: 'Project',
  note: 'Simplicity is the soul of efficiency.',
  button: 'Contact Me',
  icon: <CallIcon/>
}
