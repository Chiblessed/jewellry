import React,{useState} from 'react';
import '../contact/Contact.css';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png'

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);


function handleInputField(event){
  event.preventDefault()
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const textArea = document.querySelector('textarea');
setIsSubmitting(true)

setTimeout(() => {
  setIsSubmitting(false)
    nameInput.value = '';
  emailInput.value = ''
  textArea.value = '';
}, 3000)

}

  return (
    <>
          <h1>Wanna know more about us?</h1>

    <div className='contact'>
      <div className="details">
        <div className="number">
        <h2>Call us</h2>
        <p>+234 805 123 4567</p>
        <p>+234 817 987 6543</p>
        </div>
        <div className="socials">
        <h2>Follow us</h2>
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
        </div>
        <div className="location">
          <h2>Find us here</h2>
          <p>123 Abule Oja Street, Ikeja, Lagos, Nigeria</p>
        </div>
      
        
      </div>
      <div className="inputField">
        <h2>Write to us</h2>
        <input type="text" placeholder='Name' id='name' />
        <input type="email" placeholder='Email' id='email' />
        <textarea  id="message" placeholder='Write to us'></textarea>
        {isSubmitting && <p className='sentmessage'>Sent</p>}
        <button onClick={() => handleInputField(event)}>Send</button>
      </div>
    </div>
    </>
  )
}

export default Contact;