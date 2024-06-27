import React from 'react';
import '../reviews/Reviews.css';
import Heart from '../../assets/heart.png';


const Reviews = () => {
  return (
    <div className='review'>
        <h1>WHAT CUSTOMERS ARE SAYING</h1>
        <div className="customerreviws">
            <div className="customers">
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <p>Most unique pieces to be found. Luminique sources the best styles.</p>
                <h2><strong>Sarah V.</strong></h2>
            </div>

            <div className="customers">
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <p>I challenge you to find a store that takes better care of their customers!</p>
                <h2><strong>Valerie S.</strong></h2>
            </div>

            <div className="customers">
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <img src={Heart} alt="" />
                <p>I always feel confident and beautiful when I wear something from Luminique's store.</p>
                <h2><strong>Amanda B.</strong></h2>
            </div>

        </div>
    </div>
  )
}

export default Reviews