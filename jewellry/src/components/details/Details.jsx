import React from 'react'
import '../details/Details.css';
import Earring from '../../assets/bangle309.jpg';
import Earring2 from '../../assets/earrings8.jpg';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className='details'>
        <div className="detail1">
            <img src={Earring} alt="" />
            <div className="innerdetail1">
                <h1>Celestial Gold Series</h1>
                <p>Our modern jewelry collection is characterized by sleek and minimalist designs, setting the standard for contemporary elegance.</p>
                <button>
                  <Link to='/menu'>
                  Shop Now
                  </Link>
                  </button>
                  
            </div>
            
        </div>
        <div className="detail2">
            <div className="innerdetail">
                <h1>Stardust Collection</h1>
                <p>Timeless and versatile pieces with a modern edge, enhancing your look with a touch of style to any outfit.</p>
                <button>
                  <Link to='/menu'>
                  Shop Now
                  </Link>
                  </button>
            </div>
            <img src={Earring2} alt="" />
        </div>
    </div>
  )
}

export default Details