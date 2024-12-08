import React from 'react'
import Load from './components/load/Load'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Load/>
      <Nav/>
      <Hero/>
      <About/>
      <Skill/>
      <Experience/>
      <Footer/>
    </>
  )
}

export default App