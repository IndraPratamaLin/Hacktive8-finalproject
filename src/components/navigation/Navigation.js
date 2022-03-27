import React, { useState, useEffect } from 'react'
import './Navigation.style.scss'
import { Link } from 'react-router-dom'

function Navigation() {

  const [isOpen, setIsOpen] = useState(false)

  // add sound for increase user experience
  const resetSound = new Audio(require('../audio/sound_reset.mp3'))
  const openSound = new Audio(require('../audio/sound_thatwasquick.mp3'))

  useEffect(() => {
    if (isOpen) {
      openSound.play()
    } else {
      resetSound.play()
    }
  }, [isOpen])

  return (
    <div className="navigation">
      <input type="text" className="navigation__checkbox" id='navi-toggle' onClick={() => setIsOpen(!isOpen)} />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className={`${isOpen ? 'navigation__background active' : 'navigation__background'}`}>&nbsp;</div>

      <nav className={`${isOpen ? 'navigation__nav active' : 'navigation__nav'}`}>
        <ul className="navigation__list">
          <li className="navigation__item"><Link to='/' className="navigation__link" onClick={() => setIsOpen(!isOpen)}><span>01</span>Home</Link></li>
          <li className="navigation__item"><Link to='/experience' className="navigation__link" onClick={() => setIsOpen(!isOpen)}><span>02</span>Life Passion</Link></li>
          <li className="navigation__item"><Link to='/skills' className="navigation__link" onClick={() => setIsOpen(!isOpen)}><span>03</span>Skills</Link></li>
          <li className="navigation__item"><Link to='/project' className="navigation__link" onClick={() => setIsOpen(!isOpen)}><span>04</span>Project</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Navigation;
