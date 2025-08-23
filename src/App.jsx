import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import LeftSidebar from './components/leftSidebar/LeftSidebar'
import './App.css'

const App = () => {
  return (
   <>
       <div className="app__container">
         <LeftSidebar/>
         <div className="app__content">
           <About/>
           <Experience/>
           <Portfolio/>
         </div>
       </div>
   </>
  )
}

export default App