import React from 'react'
import About from './About/About'
import Hero from './Hero'
import Language from './Language Icons/Language'
import Skills from './Skills/Skills'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Language/>
    </div>
  )
}

export default Home