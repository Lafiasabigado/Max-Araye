import React from 'react'
import Navbar from './components/Nav'
import Presentation from './components/Presentation'
import Contact from './components/Contact'
import Skills from './components/Skills'

const Page = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <Navbar />
      <Presentation />
      <Skills />
      <Contact />
    </div>
  )
}

export default Page