import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import BoxPlay from '../Spring/BoxPlay';
function Nodejs() {
  return (
    <motion.section className="container-md"
      variants={animateVariants}
      initial="initial"
      animate="animate"
    >
        <div className = 'text-center text-warning py-5'>
            <h1>NodeJS</h1>
        </div>
        <div className="text-center pb-5 mb-5">
    
        <h5>"Best backend language"</h5>
        
        <strong> Describe the project or task the provider helped with:</strong><br />
        As a computer science student, I use NodeJs Development Services for building my web apps, and I find it very easy to use NodeJs as a backend language. It is easy to integrate, and it provides you a lot of different modules that you can use to make your app awesome.
        <div className="py-1"></div> 

        <strong> What do you like best about NodeJS?</strong><br />
       
        The best thing I like about NodeJs is that it is very easy to integrate. Also, It is trendy in the software development industry, which makes it an ideal choice to go for.
        <br />
        <strong> What do you dislike about NodeJS?</strong><br />
        The only thing that I don't like about NodeJs is that in comparison to yarn, it is slow in some of the fields. Sometimes, It is getting slow compared to other services, but overall it is still a good choice.
        <br />
        <strong>What problems is the provider solving and how is that benefiting you?</strong><br />
        Creating a simple but advanced service in the backend for my software is an ideal choice as it provides us with different modules, which helps in the easy integration of a lot of other functions.
        </div>
        <BoxPlay/>
    </motion.section>
  )
}

export default Nodejs


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