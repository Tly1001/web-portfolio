import React from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import SideQuests from './components/SideQuests'
import Contact from './components/Contact'
// import ParallaxBg from './components/ParallaxBg'


const App = () => {
  const [scrollbar, setScrollbar] = React.useState('0%')

  React.useEffect(() => {
    const listenToScrollEvent = () => {
      document.addEventListener('scroll', () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const progressHeight = ((window.pageYOffset / totalHeight) * 100) + '%'
        setScrollbar(progressHeight)
      })
    }
    listenToScrollEvent()
  }, )

  return (
    <>
      <Navbar/>
      <main>
        <div id="progressbar" style={ { height: scrollbar } }></div>
        <div id="scrollPath"></div>
        {/* <ParallaxBg/> */}
        <About/>
        <Skills/>
        <SideQuests/>
        <Contact/>
      </main>
    </>
  )
}

export default App
