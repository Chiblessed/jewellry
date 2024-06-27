import React from 'react';
import '../display/Display.css';
import products from '../../assets/data';
import Item from '../items/Item';




const Display = () => {
  return (
    <section className='display'>
     <h1>Find your Perfect Jewelry</h1>
       <div className="displayitems">
        {products.map((product, i) => {
return <div className="displayitem">
<Item key={i} id={product.id} name={product.name} image={product.image} />
</div>
        })}
       </div>
    </section>
  )
}

export default Display