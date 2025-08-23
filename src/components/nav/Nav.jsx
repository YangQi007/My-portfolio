import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#about')
  return (
    <nav>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook/></a>
    </nav>
   
  )
}

export default Nav