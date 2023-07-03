import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className="footer-container">
        <p className='footer-subscription-heading'>
            Join the adventure newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">
            You can subscribe at any time
        </p>
        <div className="input-areas">
            <div className="social-links">
                <Link><i className="fa-brands fa-square-facebook"></i></Link>
                <Link to='https://twitter.com/KelvinHawks35' target='blank'><i class="fa-brands fa-square-twitter"></i></Link>
                <Link to='/'><i class="fa-brands fa-square-instagram"></i></Link>
                <Link to='/'><i class="fa-brands fa-linkedin"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer