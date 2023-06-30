import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about-container'>
      <img src="./HomeImages/banner2.avif" alt="banner" />
      <div className="content">
        <h1>Reasons To Choose Us</h1>
        <ul>
          <p>Helps to protect from:</p>
          <li>Drying effect</li>
          <li>Drying wind</li>
          <li>Cold weather</li>
        </ul>
      </div>
    </div>
  )
}

export default About