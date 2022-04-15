import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import Login from '../components/Login';
import '../styles/Login.css';
import { auth } from '../utils/firebase';

function Signin() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const login = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        if (user) {
          window.location = "/dashboard";
        }
      } )
    } 
    catch(error) {
      alert(error.message);
    }
  }


  return (
    <div>
        <Login 
            title = "Sign In"
            button = "Sign In"
            href = "/signup"
            link = "Sign Up"
            headerStatement = "Need an account?"
            emailInput = {emailRef}
            passwordInput = {passwordRef}
            btnFunction = {login}
        />
    </div>
  )
}

export default Signin