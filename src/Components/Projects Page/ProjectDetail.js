import React from 'react'
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion/dist/framer-motion'

function ProjectDetail() {
   
  return (
    <motion.section className='container-xxl'
      variants={animateVariants}
      initial="initial"
      animate="animate"
    >
        <div className="text-center  py-5 text-warning">
            <h1>Project Detail</h1>
            <p className='text-muted'>About my project</p>
        </div>
        <Container>
          <div className="project-card">
            <Card fullWidth elevation={0}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Description
                  </Typography>
                  <Typography variant="body" >
                   <strong>ReactJS</strong> <br />
                  Well, it is not just a single project that react.JS has helped me with. React.js is my daily driver, being a front-end developer, 
                  I use it every day to code. Currently, I am working on a CRM and React.js is being used to develop the front-end.
                  ReactJS is easy to learn and that is one of the most important reasons to choose this library. As it does not
                  take much time to learn this technology, you can quickly begin to build things with it.
                  ReactJS is used by great companies and startups such as Facebook, Dropbox, Khan Academy, CodeAcademy, Netflix, Airbnb, PayPal,
                   Walmart, Tesla Motors, IMDb, and so on. There are many, many popular apps that use React.
                   <br /><br /><strong>NodeJS</strong> <br />
                   As a computer science student, I use NodeJs Development Services for building my web apps, and I find it very easy to use NodeJs as a backend language.
                   It is easy to integrate, and it provides you a lot of different modules that you can use to make your app awesome.
                  </Typography>
                </CardContent>
            </Card>
        </div>
        <div className='py-5'></div>
        </Container>
    </motion.section>
  )
}

export default ProjectDetail


//animation
const animateVariants = {
  initial: {
    x: '-100vw'
  },
  animate: {
    type: 'tween',
    x: 0,
    transition: {
      duration: 0.5,
      stifness: 50
    }
  },
} 