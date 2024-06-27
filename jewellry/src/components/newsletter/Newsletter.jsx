import React, { useReducer, useState } from 'react';
import '../newsletter/Newsletter.css';
import Arrow from '../../assets/left.png';





const Newsletter = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    const formInput = document.querySelector('#formInput');
setSubmitting(true);
setTimeout(() => {
  setSubmitting(false)
  formInput.value = '';
}, 3000)

};


  return (
    <div className='newsletter-container'>
        <h1>Join our List</h1>
        <p>Be the first to know about new collection and exclusive offers.</p>
        <form action="" onSubmit={handleClick}>
        <input type="email" id='formInput' placeholder='Email......'  />
        
        <img src={Arrow} alt="" onClick={()=>handleClick(event)}  />
        
        {submitting && <p>Sending.....</p> }
        </form>
       <p></p>
    </div>
  )
}

export default Newsletter