import React from 'react';
import '../promise/Promise.css';
import Heart from '../../assets/heart.png';
import { motion } from 'framer-motion';

const Promise = () => {
  return (
    <>
    <div className='promise'>
        <h1>Our Promise</h1>
        <div className="promises">
            <div className="promisedetail">
                <img src={Heart} alt="" />
                <p>Free worldwide shipping & returns </p>
            </div>

            <div className="promisedetail">
                <img src={Heart} alt="" />
                <p>Ethically sourced and crafted </p>
            </div>

            <div className="promisedetail">
                <img src={Heart} alt="" />
                <p> Recycled post-consumer gold </p>
            </div>

            <div className="promisedetail">
                <img src={Heart} alt="" />
                <p> Sustainable lab-grown diamonds </p>
            </div>
        </div>

    </div>
    <div className="promisemessage">
    <motion.p>ELEGANCE CRAFTED TO LAST | ELEGANCE CRAFTED TO LAST | ELEGANCE CRAFTED TO LAST | ELEGANCE CRAFTED TO LAST |
    ELEGANCE CRAFTED TO LAST 
     </motion.p>
</div>
</>
  )
}

export default Promise