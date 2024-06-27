import React from 'react';
import '../home/Home.css'
import Heroimage from '../../assets/heroImage.jpg';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    <secion className='hero'>
        <div className="rightSide">
            <img src={Heroimage} alt="" />
        </div>
        <div className="leftSide">
        <h2>Discover Timeless Elegance</h2>
        <h5>Welcome to Our Exquisite Jewelry Collection!</h5>
        <button>
          <Link to='/menu'>
          Shop Now
          </Link>
          </button>
        </div>

    </secion>
    
  </>
  )
}

export default Home;