import React, { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";

import './SignUp.css'
import app from '../../firebase/Firebase.config';


const auth = getAuth(app)

const SignUp = () => {

  const [user, setUser] = useState({})
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false)

  const provider = new GoogleAuthProvider();

  const handleProvider = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user)
      })
      .catch(error => console.log(error.message))
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;


    if (!/(?=.*?[A-Z])/.test(password)) {
      setError('must one Uppercase Letter');
      return;
    }

    if (!/(?=.*?[a-z])/.test(password)) {
      setError('must one lowercase')
      return;
    }

    if (!/.{6}/.test(password)) {
      setError('minimum 6 length');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setSuccess(true)
        event.target.reset('')
        emailVerify()
        handleUpdateProfile(name)
      })
      .catch(error => {
        console.log(error)
        setError(error.message)
      })

  };

  const emailVerify = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        alert('Check email and verify')
      })
  };

  const handleUpdateProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        // alert('profile updated')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='signup'>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="name">Name</label>
          <input className='input' placeholder='Name' type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input className='input' placeholder='Email' type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input className='input' placeholder='password' type="password" name="password" required />
        </div>
        <p style={{ color: 'red' }}>{error}</p>
        {
          success && <p style={{ color: 'green' }}>user created successfully</p>
        }
        <div className='button'>
          <button type="submit">Sign Up</button>
        </div>
        <div className='button'>
          <button onClick={handleProvider} type="submit">Google</button>
        </div>
      </form>

    </div>
  );
};

export default SignUp;
