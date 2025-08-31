import React, { useState, useEffect } from 'react'
import './themeSwitcher.css'
import { HiColorSwatch } from 'react-icons/hi'

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('brutalist')
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    {
      id: 'brutalist',
      name: 'Neo-Brutalist',
      icon: '⚡',
      description: 'Bold & Unapologetic',
      colors: ['#FF0080', '#00FF41', '#000000']
    },
    {
      id: 'soft',
      name: 'Soft Minimalism',
      icon: '☁️',
      description: 'Gentle & Human',
      colors: ['#8B7CF6', '#F472B6', '#F8F9FA']
    },
    {
      id: 'cyber',
      name: 'Cyber Renaissance',
      icon: '🤖',
      description: 'AI-Age Futuristic',
      colors: ['#7C3AED', '#06FFA5', '#0F0715']
    },
    {
      id: 'biophilic',
      name: 'Biophilic Tech',
      icon: '🌿',
      description: 'Nature Meets Digital',
      colors: ['#059669', '#F59E0B', '#1F2937']
    }
  ]

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme') || 'brutalist'
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const applyTheme = (themeId) => {
    // Remove all theme classes
    document.body.classList.remove('theme-brutalist', 'theme-soft', 'theme-cyber', 'theme-biophilic')
    
    // Add the selected theme class
    document.body.classList.add(`theme-${themeId}`)
    
    // Update CSS custom properties based on theme
    const root = document.documentElement
    
    switch(themeId) {
      case 'brutalist':
        // Neo-Brutalist: Maximum contrast, bold statements
        root.style.setProperty('--color-bg', '#000000')
        root.style.setProperty('--color-bg-variant', '#111111')
        root.style.setProperty('--color-bg-secondary', '#1A1A1A')
        root.style.setProperty('--color-primary', '#FF0080')
        root.style.setProperty('--color-primary-variant', '#E6007A')
        root.style.setProperty('--color-accent', '#00FF41')
        root.style.setProperty('--color-white', '#FFFFFF')
        root.style.setProperty('--color-light', 'rgba(255, 255, 255, 0.9)')
        updateNameGradient('#FF0080', '#00FF41', '#FFFFFF')
        updateSidebarColors('#000000', '#111111', '#1A1A1A')
        updateSidebarBorder('#FF0080', 0.5)
        updateContentBackground('#FF0080', '#00FF41')
        updateHoverEffects('#FF0080')
        document.body.style.color = '#FFFFFF'
        break
      case 'soft':
        // Soft Minimalism: Gentle, human-centered design
        root.style.setProperty('--color-bg', '#F8F9FA')
        root.style.setProperty('--color-bg-variant', '#E9ECEF')
        root.style.setProperty('--color-bg-secondary', '#DEE2E6')
        root.style.setProperty('--color-primary', '#8B7CF6')
        root.style.setProperty('--color-primary-variant', '#7C6BF7')
        root.style.setProperty('--color-accent', '#F472B6')
        root.style.setProperty('--color-white', '#495057')
        root.style.setProperty('--color-light', 'rgba(73, 80, 87, 0.7)')
        updateNameGradient('#8B7CF6', '#F472B6', '#7C6BF7')
        updateSidebarColors('#F8F9FA', '#E9ECEF', '#DEE2E6')
        updateSidebarBorder('#8B7CF6', 0.3)
        updateContentBackground('#8B7CF6', '#F472B6')
        updateHoverEffects('#8B7CF6')
        // Special handling for light theme
        document.body.style.color = '#495057'
        break
      case 'cyber':
        // Cyber Renaissance: AI-age meets classical elegance
        root.style.setProperty('--color-bg', '#0F0715')
        root.style.setProperty('--color-bg-variant', '#1A0F2E')
        root.style.setProperty('--color-bg-secondary', '#2D1B47')
        root.style.setProperty('--color-primary', '#7C3AED')
        root.style.setProperty('--color-primary-variant', '#8B5CF6')
        root.style.setProperty('--color-accent', '#06FFA5')
        root.style.setProperty('--color-white', '#F7F4FF')
        root.style.setProperty('--color-light', 'rgba(247, 244, 255, 0.8)')
        updateNameGradient('#7C3AED', '#06FFA5', '#8B5CF6')
        updateSidebarColors('#0F0715', '#1A0F2E', '#2D1B47')
        updateSidebarBorder('#7C3AED', 0.3)
        updateContentBackground('#7C3AED', '#06FFA5')
        updateHoverEffects('#7C3AED')
        document.body.style.color = '#F7F4FF'
        break
      case 'biophilic':
        // Biophilic Tech: Nature-inspired with digital harmony
        root.style.setProperty('--color-bg', '#1F2937')
        root.style.setProperty('--color-bg-variant', '#374151')
        root.style.setProperty('--color-bg-secondary', '#4B5563')
        root.style.setProperty('--color-primary', '#059669')
        root.style.setProperty('--color-primary-variant', '#047857')
        root.style.setProperty('--color-accent', '#F59E0B')
        root.style.setProperty('--color-white', '#F0FDF4')
        root.style.setProperty('--color-light', 'rgba(240, 253, 244, 0.8)')
        updateNameGradient('#059669', '#F59E0B', '#047857')
        updateSidebarColors('#1F2937', '#374151', '#4B5563')
        updateSidebarBorder('#059669', 0.3)
        updateContentBackground('#059669', '#F59E0B')
        updateHoverEffects('#059669')
        document.body.style.color = '#F0FDF4'
        break
      default:
        break
    }
  }

  const updateNameGradient = (color1, color2, color3) => {
    const nameElements = document.querySelectorAll('.hero__intro h1')
    nameElements.forEach(el => {
      el.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`
      el.style.webkitBackgroundClip = 'text'
      el.style.webkitTextFillColor = 'transparent'
      el.style.backgroundClip = 'text'
    })
  }

  const updateSidebarColors = (bg, variant, secondary) => {
    const sidebar = document.querySelector('.left__sidebar')
    if (sidebar) {
      sidebar.style.background = `linear-gradient(145deg, 
        rgba(${hexToRgb(bg)}, 0.95) 0%, 
        rgba(${hexToRgb(variant)}, 0.95) 50%, 
        rgba(${hexToRgb(secondary)}, 0.95) 100%)`
    }
  }

  const updateSidebarBorder = (color, opacity = 0.3) => {
    const sidebar = document.querySelector('.left__sidebar')
    if (sidebar) {
      sidebar.style.borderRight = `1px solid rgba(${hexToRgb(color)}, ${opacity})`
      sidebar.style.boxShadow = `2px 0 30px rgba(${hexToRgb(color)}, ${opacity * 0.6})`
    }
  }

  const updateContentBackground = (primary, accent) => {
    // Update the pseudo-element gradient via CSS custom properties
    const root = document.documentElement
    root.style.setProperty('--content-gradient-start', `rgba(${hexToRgb(primary)}, 0.02)`)
    root.style.setProperty('--content-gradient-end', `rgba(${hexToRgb(accent)}, 0.02)`)
  }

  const updateHoverEffects = (primary) => {
    const root = document.documentElement
    root.style.setProperty('--hover-bg-color', `rgba(${hexToRgb(primary)}, 0.08)`)
    root.style.setProperty('--hover-shadow-color', `rgba(${hexToRgb(primary)}, 0.3)`)
  }

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
      '0, 0, 0'
  }

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId)
    applyTheme(themeId)
    localStorage.setItem('portfolioTheme', themeId)
    setIsOpen(false)
  }

  return (
    <div className="theme-switcher">
      <button 
        className="theme-switcher__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme switcher"
      >
        <HiColorSwatch />
      </button>
      
      {isOpen && (
        <div className="theme-switcher__dropdown">
          <div className="theme-switcher__header">
            <h4>Choose Theme</h4>
          </div>
          
          <div className="theme-switcher__options">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                onClick={() => handleThemeChange(theme.id)}
              >
                <div className="theme-option__icon">{theme.icon}</div>
                <div className="theme-option__info">
                  <span className="theme-option__name">{theme.name}</span>
                  <span className="theme-option__description">{theme.description}</span>
                </div>
                <div className="theme-option__colors">
                  {theme.colors.map((color, index) => (
                    <div
                      key={index}
                      className="color-swatch"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {isOpen && (
        <div 
          className="theme-switcher__overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default ThemeSwitcher
