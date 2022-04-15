
import React from 'react'
import '../styles/Login.css';


function Login({title, button, href, link, headerStatement, emailInput, passwordInput, btnFunction,}) {
    
  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-heading'>{title}</h1>
            <form className='form' onSubmit={btnFunction}>
                <input ref={emailInput} className='login-email' type="email" placeholder='Email'/>
                <input ref={passwordInput} className='login-password' type="password" placeholder='Password'/>
                <button className='login-button' type='submit' onClick={btnFunction}>{button}</button>
            </form>
            <div className='links'>
                <p>{headerStatement}</p>
                <a href={href}>{link}</a>
            </div>
        </div>
    </div>
  )
}

export default Login