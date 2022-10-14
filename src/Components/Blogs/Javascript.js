import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
function Javascript() {
  return (
    <motion.section className="container-md"
      variants={animateVariants}
      initial="initial"
      animate="animate"
    >
        <div className = 'text-center text-warning py-5'>
            <h1>JavaScript</h1>
        </div>
        <div className="text-center pb-5 mb-5">
    
        <h5>"Front-End Champ!"</h5>
        
        JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.
        This page serves as a quick overview of various JavaScript language features, written for readers with background in other languages, such as C or Java.

 
        </div>
        
    </motion.section>
  )
}

export default Javascript


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