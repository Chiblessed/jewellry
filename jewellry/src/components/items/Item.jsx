import React from 'react';
import '../items/Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} onClick={window.scrollTo(0,0)} alt="" />
        <button>
            <Link to='/menu' >
            {props.name}
            </Link>

        </button>
        
    </div>
  )
}

export default Item