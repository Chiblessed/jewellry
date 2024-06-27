import React, { useState, useRef, useContext } from 'react';
import { animate, motion, AnimatePresence } from "framer-motion";
import '../navbar/Navbar.css';
import Cart from '../../assets/Cart.png';
import { Link } from 'react-router-dom';
import MenuIcon from '../../assets/menu.png';
import { ShopContext } from '../necklace/ShopContext';

const Navbar = () => {
    const {getTotalItems} = useContext(ShopContext);
    const [position, setPosition] = useState({ 
left: 0,
width: 0,
opacity: 0
});

function handleToggle(){
const menuDetails = document.querySelector('.navbar_mobile_links')
menuDetails.classList.toggle('open')

}



const mobileLinks = {
    initial: {
        y: '30vh',
        transition: {
            duration: 0.5,

        },
    }, 
    open: {
        y: 0,
        transition:{
duration: 0.7
        }
    }
     

}
  return (
    <>
    <div className='navbar'>
        <div className="navbar_logo">
            <p>Luminique Jewelry</p>
        </div>
        <div className="navbar_links">
          <ul>
          < Cursor position={position}/>
            <Tabs setPosition={setPosition}> <Link to='/'> Home</Link></Tabs>
            <Tabs setPosition={setPosition} > <Link to='/menu' >Menu</Link></Tabs>
            <Tabs setPosition={setPosition}><Link to='/about'>About</Link></Tabs>
            <Tabs setPosition={setPosition}> <Link to='/contact'> Contact</Link></Tabs>
           


          
          </ul>
        </div>
     <div className="meunicon">
        <img src={MenuIcon} alt=""  id='menuicon' onClick={handleToggle} />
     </div>
<div 
        
        className="navbar_mobile_links">
           
          <ul>
          < Cursor position={position}/>
            <Tabs setPosition={setPosition}> <Link to='/'> Home</Link></Tabs>
            <Tabs setPosition={setPosition} > <Link to='/menu' >Menu</Link></Tabs>
            <Tabs setPosition={setPosition}><Link to='/about'>About</Link></Tabs>
            <Tabs setPosition={setPosition}> <Link to='/contact'> Contact</Link></Tabs>
           


          
          </ul>
          
            <button>
                <Link to='/login'>
                Login
                </Link>
                </button>
            <Link to='/cart'>
            <img src={Cart} alt="" className='cartimg' />
            </Link>
            <div className="moblienavcount">{getTotalItems()}</div>
        </div>

      

        <div className="navbar_btns">
            <button>
                <Link to='/login'>
                Login
                </Link>
                </button>
            <Link to='/cart'>
            <img src={Cart} alt="" className='cartimg' />
            </Link>
            <div className="navcartcount">{getTotalItems()}</div>
        </div>

    </div>
    </>
  )
}



const Tabs = ({children, setPosition}) => {
    const ref = useRef(null);
   
    return(
        <li 
        ref={ref}
        onMouseEnter={() => {
            if(!ref.current) return;
            const {width} = ref.current.getBoundingClientRect();

setPosition({
    width,
    opacity: 1,
    left: ref.current.offsetLeft,
})
        }}
        className='navabr_linkss'>
            {children}
        </li>
    )
}

const Cursor = ({position}) => {
    return(
        <motion.li className='cursor'
        animate={position}> </motion.li>
    )
}

export default Navbar;


