import React, { useContext, useState } from 'react';
import '../cartItems/CartItems.css'
import { ShopContext } from '../necklace/ShopContext';







const CartItems = () => {
    const {cartCleared,getTotal,allProducts,cartItems,addToCart, removeFromCart} = useContext(ShopContext);
    const checkoutClicked = () => {
        alert('Thank you for your purchase');
        let clearCart = document.getElementsByClassName('cartitem')[0];
        console.log(clearCart.hasChildNodes)
      while(clearCart.hasChildNodes()){
        clearCart.removeChild(clearCart.firstChild)
      }
        getTotal()
    }
  
  return (
    <div className="cartdisplay">

{allProducts.map((e) => {
if(cartItems[e.id] > 0){
    return <div className="cartitem">
    <div className="cartitem-main">
    <div className="cartimage">
         <img src={e.image} alt={e.name} className='cart-icon' />
    </div>
   <div className="cart-details">
   <h2 >{e.name}</h2>
   <p>${e.price}</p>
   <div className="cart-quantity">
        <button className='cartitem-btn' onClick={() => {addToCart(e.id)}}>+</button>
        <button className='cartitem-quantity cartitem-btn'>{cartItems[e.id]}</button>
        <button className='cartitem-btn' onClick={() => { removeFromCart(e.id)}}>X</button>
        </div>
   </div>
    </div>
   
</div>
}
})}
<div className="cartitem-total">
 <div className="cartitems-total-item">
        <p>Subtotal</p>
        <p>${getTotal()}</p>
    </div>
    <hr />
    <div className="cartitems-total-item">
        <p>Shipping Fee</p>
        <p>Free</p>
    </div>
    <hr />
    <div className="cartitems-total-item">
        <h3>Total</h3>
        <h3>${getTotal()}</h3>
    </div>
    <button onClick={()=>cartCleared()}>Proceed to checkout</button>
    </div>

    </div>
  )
}

export default CartItems;