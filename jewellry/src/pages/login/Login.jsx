import React from 'react';
import '../login/Login.css'

const Login = () => {

  const handleClick = event => {
    event.preventDefault();
    const inputName = document.querySelector('#inputname');
    const inputEmail = document.querySelector('#inputemail');
    const inputPassword = document.querySelector('#password');

inputEmail.value = '';
inputName.value = '';
inputPassword.value = '';

};
  return (
    <div className='logincontainer'>
      <h1>Login</h1>
      <div className="loginfield">
        <form action="">
       
            <input type="text" placeholder='Your Name...' id='inputname'/>
          
          
            <input type="email" placeholder='Your Email...' id='inputemail'/>
          
          
            <input type="password" placeholder='Your Password...' id='password'/>
          <div className="formbtn">
            
        <button type='submit' onClick={() => handleClick(event)}>Login</button>

          </div>
        </form>
      </div>
      <div className="signup">
      <p>Don't have an account?</p>
      <div className="signinbtn">
      <button>Sign up</button>
      <button>Sign In</button>

      </div>
</div>
    </div>
  )
}

export default Login