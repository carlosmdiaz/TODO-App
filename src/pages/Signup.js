import React, { useRef} from 'react'
import Login from '../components/Login'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore'
import db from '../utils/firebase';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const register = async (e) => {
        //Try to sign up with email and password
        try {
            e.preventDefault();
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then( async (cred) => {
                await setDoc(doc(db, "users", `${cred.user.uid}`), {
                    // Pass in the fields of how you want to structure your data

                    tasks: [
                        {
                            text: "Create your first TODO",
                            status: true,
                        }
                    ]
                })
                if(cred) {
                    window.location = "/dashboard";
                }
            })
        } catch(error) {
            alert(error.message)
        }
    }

  return (
    <div>
        <Login 
            title = "Sign Up"
            button = "Sign Up"
            href = "/"
            link = "Sign In"
            headerStatement = "Have an account?"
            emailInput = {emailRef}
            passwordInput = {passwordRef}
            btnFunction = {register}
        />
    </div>
  )
}

export default Signup