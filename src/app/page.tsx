import React from 'react'
import Navbar from './components/Nav'
import Presentation from './components/Presentation'
import Contact from './components/Contact'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const Page = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <Navbar />
      <Presentation />
      <Projects />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Page