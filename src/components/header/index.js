import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>Xpenser <i className="fi fi-sr-credit-card"></i></div>
            <div className='header-button'>
                <a href='https://github.com/shivanxshh' target='_blank' rel='noopener noreferrer'>
                <i className="devicon-github-original">Star</i>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Header