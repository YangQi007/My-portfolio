import React from 'react'
import './leftSidebar.css'
import ME from '../../assets/yang.jpeg'
import CircleNav from '../circleNav/CircleNav'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const LeftSidebar = () => {
  return (
    <div className='left__sidebar'>
      <div className="sidebar__content">
        <div className="hero__intro">
          <h1>Yang Qi</h1>
          <h5 className="text-light">Fullstack Developer</h5>
        </div>
        
        <CircleNav />
        
        <div className="sidebar__socials">
          <a href="https://www.linkedin.com/in/yangqi007/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/YangQi007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        
        <div className="hero__image">
          <img src={ME} alt="Yang Qi" />
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar 