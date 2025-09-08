import React, { useEffect, useState } from 'react'
import './mobileNav.css'
import { AiOutlineUser } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { HiMenu } from 'react-icons/hi'

const sections = [
  { id: 'about', label: 'About', Icon: AiOutlineUser },
  { id: 'experience', label: 'Experience', Icon: FaAward },
  { id: 'portfolio', label: 'Projects', Icon: BiBook }
]

const MobileNav = () => {
  const [active, setActive] = useState('#about')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let activeHref = '#about'
      let minDistance = Infinity
      const viewportCenter = window.scrollY + (window.innerHeight / 2)

      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const elCenter = window.scrollY + rect.top + (el.offsetHeight / 2)
        const distance = Math.abs(elCenter - viewportCenter)
        if (distance < minDistance) {
          minDistance = distance
          activeHref = `#${id}`
        }
      })

      setActive(activeHref)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    setTimeout(handleScroll, 300)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActive(`#${id}`)
      setIsOpen(false)
    }
  }

  return (
    <div className="mobile-nav">
      <button 
        className="mobile-nav__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <HiMenu />
      </button>
      
      {isOpen && (
        <div className="mobile-nav__dropdown">
          <div className="mobile-nav__header">
            <h4>Navigation</h4>
          </div>
          
          <div className="mobile-nav__options">
            {sections.map(({ id, label, Icon }) => (
              <button
                key={id}
                className={`mobile-nav__item ${active === `#${id}` ? 'active' : ''}`}
                onClick={() => handleClick(id)}
              >
                <div className="mobile-nav__icon"><Icon /></div>
                <div className="mobile-nav__label">{label}</div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {isOpen && (
        <div 
          className="mobile-nav__overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default MobileNav


