import React from 'react'
import './circleNav.css'
import {AiOutlineUser} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {useState, useEffect} from 'react'

const CircleNav = () => {
  const [activeNav, setActiveNav] = useState('#about')

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll container (app__content)
      const scrollContainer = document.querySelector('.app__content')
      if (!scrollContainer) {
        console.log('⚠️ Scroll container not found')
        return
      }
      
      const sections = [
        { id: 'about', href: '#about' },
        { id: 'experience', href: '#experience' },
        { id: 'portfolio', href: '#portfolio' }
      ]
      
      const scrollTop = scrollContainer.scrollTop
      const containerHeight = scrollContainer.clientHeight
      
      console.log('📊 Scroll Debug:', { scrollTop, containerHeight })
      
      // If we're at the very top
      if (scrollTop < 50) {
        console.log('🔝 At top, setting to #about')
        setActiveNav('#about')
        return
      }
      
      // Find which section is currently most visible
      let activeSection = '#about'
      let minDistance = Infinity
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          // Get element position relative to the scroll container
          const rect = element.getBoundingClientRect()
          const containerRect = scrollContainer.getBoundingClientRect()
          
          // Calculate the element's position relative to the container
          const elementTop = rect.top - containerRect.top + scrollTop
          const elementCenter = elementTop + (element.offsetHeight / 2)
          const containerCenter = scrollTop + (containerHeight / 2)
          
          // Find the section whose center is closest to the container center
          const distance = Math.abs(elementCenter - containerCenter)
          
          console.log(`📍 ${section.id}:`, { 
            elementTop, 
            elementCenter, 
            containerCenter, 
            distance,
            height: element.offsetHeight
          })
          
          if (distance < minDistance) {
            minDistance = distance
            activeSection = section.href
          }
        } else {
          console.log(`❌ Element not found: ${section.id}`)
        }
      })
      
      console.log(`🎯 Active section: ${activeSection}`)
      setActiveNav(activeSection)
    }

    // Get the scroll container
    const scrollContainer = document.querySelector('.app__content')
    if (scrollContainer) {
      console.log('✅ Scroll container found, adding listener')
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
      
      // Check initial position
      setTimeout(handleScroll, 500)
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    } else {
      console.log('❌ Scroll container not found during setup')
    }
  }, [])

  const handleNavClick = (href) => {
    console.log(`🖱️ Nav clicked: ${href}`)
    setActiveNav(href)
  }
  
  return (
    <div className='vertical__nav'>
      <a 
        href="#about" 
        onClick={() => handleNavClick('#about')} 
        className={`nav__item ${activeNav === '#about' ? 'active' : ''}`}
      >
        <AiOutlineUser className="nav__icon"/>
        ABOUT
      </a>
      <a 
        href="#experience" 
        onClick={() => handleNavClick('#experience')} 
        className={`nav__item ${activeNav === '#experience' ? 'active' : ''}`}
      >
        <FaAward className="nav__icon"/>
        EXPERIENCE
      </a>
      <a 
        href="#portfolio" 
        onClick={() => handleNavClick('#portfolio')} 
        className={`nav__item ${activeNav === '#portfolio' ? 'active' : ''}`}
      >
        <BiBook className="nav__icon"/>
        PROJECTS
      </a>
    </div>
  )
}

export default CircleNav 