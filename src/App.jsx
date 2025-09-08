import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import LeftSidebar from './components/leftSidebar/LeftSidebar'
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher'
import MobileNav from './components/mobileNav/MobileNav'
import './App.css'

const App = () => {
  return (
   <>
       <ThemeSwitcher />
       <div className="app__container">
         <LeftSidebar/>
         <div className="app__content">
           <About/>
           <Experience/>
           <Portfolio/>
         </div>
         <MobileNav />
       </div>
   </>
  )
}

export default App