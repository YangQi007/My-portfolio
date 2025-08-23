import React from 'react'
import './topSocials.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
 
const TopSocials = () => {
  return (
    <div className='top__socials'>
        <a href="https://www.linkedin.com/in/yangqi007/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/YangQi007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </div>
  )
}

export default TopSocials 