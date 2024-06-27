import React, { useContext, useState } from 'react'
import { ShopContext } from '../../components/necklace/ShopContext';
import '../menu/Menu.css'
import { Link } from 'react-router-dom';
import Item from '../../components/items/Item';
import allProducts from '../../assets/all-product';
import Footer from '../../components/footer/Footer';

const Menu = (props) => {
  const {allProducts} = useContext(ShopContext);
  const [menu, setMenu] = useState('home');
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='menu'>
      <div className='banner'>
        <img src={props.banner} alt="" />
      </div>
<div className="menubtn">
  <button className='btn1' onClick={() => {setMenu('necklace')}}>
    <Link to='/necklace'> Necklaces</Link>
    </button>
  <button className='btn2' onClick={() => {setMenu('earring')}}>
    <Link to='/earring'>
    Earrings
    </Link>
    </button>
  <button className='btn3' onClick={() => {setMenu('bangle')}}>
    <Link to='/bangle'>
    Bangles
    </Link>
  </button>
  <button className='btn4' onClick={() => {setMenu('ring')}}>
    <Link to='/ring'>
    Ring
    </Link>
  </button>
</div>




<div className="menuproducts">
  {allProducts.map((product, i) => {
    if(props.category === product.category){
      return <div
      key={i}
      id={product.id}
       className="menupro">
      <img src={product.image} alt="" />
      <p className='name'>{product.name}</p>
      <p className="price">${product.price}</p>
      <button onClick={() => {addToCart(product.id)}}>
        <Link to='/cart'>
        Add to Cart
        </Link>
        </button>
      </div>
    } else {
      return null;
    }
  })}
</div>
     
 
          



      
     
    </div>
  )
}

export default Menu