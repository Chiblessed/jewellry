import React from 'react';
import '../footer/Footer.css';
import Twitter from '../../assets/twitter.png'
import { Link } from 'react-router-dom';

import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';

const Footer = () => {
  return (
   
        <footer>
            <div className="link">
            <div className="links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="collect-links">
                <h3>Collection Links</h3>
                <ul>
                <li><Link to='/ring'>Ring</Link></li>
                <li><Link to='/bangle'>Bangles</Link></li>
                    <li><Link to='/earring'>Earrings</Link></li>
                    <li><Link to='/necklace'>Necklaces</Link></li>

                </ul>
            </div>
          
            </div>

            <div className="logo">
                <div className="social-links">
               <img src={Twitter} alt="" />
               <img src={Instagram} alt="" />
               <img src={Facebook} alt="" />
            </div>
                <h2 className='name'>Luminique Jewelry</h2>
                <div className="news">
                    <h2>Subscribe to our Newsletter</h2>
                    <input type="email" placeholder='Enter email......'  />
                    <button type='submit'>Send</button>
                </div>
            </div>
        </footer>
        
   
  )
}

export default Footer