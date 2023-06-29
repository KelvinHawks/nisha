import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
      <img className="homeimage" src='./HomeImages/banner.avif' width='400px' alt='nisha'/>
      <div className="homepage-contents">
        <h1>A PERFECT SKIN CARE FOR YOU</h1>
      </div>
      <div className="banner-img-1">
        <img src="./HomeImages/nisha1.jpg" alt="" />
      </div>
      <div className="banner-img-2">
        <img src="./HomeImages/nisha1.jpg" alt="" />
      </div>
    </div>
  )
}

export default Homepage