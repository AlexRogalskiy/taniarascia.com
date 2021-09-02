import React from 'react'
import { Link } from 'gatsby'

import { Hamburger } from '../assets/Hamburger'
import { Colors } from './Colors'
import moon from '../assets/moon.png'

export const FileHeader = ({ setCollapsed, onUpdateTheme, theme }) => {
  return (
    <header className="file-header">
      <Link to="/" className="file">
        <span>TaniaRascia.com</span>
      </Link>
      <div className="toolbar">
        <Colors />
        <button onClick={onUpdateTheme} className="theme-switcher">
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          <img src={moon} alt="Theme" />
        </button>
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="desktop-only"
        >
          <Hamburger />
        </button>
      </div>
    </header>
  )
}
