import React from 'react';
import '../about/About.css';
import { Link } from 'react-router-dom';
import Earrings1 from '../../assets/earring12.jpg';
import Earrings10 from '../../assets/earring26.jpg';
import Earrings11 from '../../assets/earring27.jpg';
import Necklaces1 from '../../assets/product1.jpg';
import Necklaces7 from '../../assets/necklace20.jpg';
import Necklaces10 from '../../assets/necklace14.jpg';




const About = () => {
  return (
    <section className='about'>
        <div className="aboutdetail">
        <h2>
        Welcome to Luminique Jewelry, where elegance meets craftsmanship. </h2>
        </div>
        <div className="welcomemessage">
       
<div className="aboutmessage">
<img  className='welcomeimage1' src={Necklace2} alt="" />

        <p>
At Luminique Jewelry, we believe in the artistry of jewelry-making and the timeless allure of precious metals 
and gemstones. Each piece in our collection is meticulously crafted to capture the essence of sophistication and luxury.</p>

            <p>Our vision at Luminique Jewelry is to inspire and adorn every individual with exquisite jewelry that
 reflects their unique style and personality. We aim to be the preferred choice for discerning customers 
seeking unparalleled quality and elegance in jewelry.</p>

            <p> Quality is at the heart of everything we do. From sourcing the finest materials to the intricate details 
of design and craftsmanship, we uphold the highest standards to ensure that every piece of jewelry meets our
 rigorous criteria.</p>
 </div>
 <img  className='welcomeimage' src={Necklace2} alt="" />

        </div>
<div className="collections">
    <h2 className='collection-title'>Our Collections</h2>
    <p>Explore our diverse collections, ranging from classic designs that withstand the test of
 time to contemporary pieces that resonate with modern trends. Whether you are celebrating a milestone,
 expressing love, or simply treating yourself, our collections offer something special for every occasion.</p>
 <div className="collection-details">

    <div className="detail">
        <img src={Earrings1} alt="" />
        <p></p>
        <h2></h2> 
        <button><Link to='/earrings'>
        Shop Now!!!
        </Link>
            </button>       
    </div>

    <div className="detail">
        <img src={Earrings10} alt="" />
        <p></p>
        <h2></h2> 
        <button><Link to='/earrings'>
        Shop Now!!!
        </Link>
            </button>       
    </div>


    <div className="detail">
        <img src={Earrings11} alt="" />
        <p></p>
        <h2></h2> 
        <button><Link to='/earrings'>
        Shop Now!!!
        </Link>
            </button>       
    </div>


    <div className="detail">
        <img src={Necklaces1} alt="" />
        <p></p>
        <h2></h2> 
        <button><Link to='/earrings'>
        Shop Now!!!
        </Link>
            </button>       
    </div>

    <div className="detail">
        <img src={Necklaces10} alt="" />
        <p></p>
        <h2></h2> 
        <button><Link to='/earrings'>
        Shop Now!!!
        </Link>
            </button>       
    </div>

    <div className="detail">
        <img src={Necklaces7} alt="" />
        <p></p>
        <h2></h2> 
        <button><Link to='/earrings'>
        Shop Now!!!
        </Link>
            </button>       
    </div>


    
    
 </div>
</div>
    </section>
  )
}

export default About