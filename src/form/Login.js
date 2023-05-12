import React, { useState } from 'react';
import './Login.css'
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/Firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app)


const Login = () => {

    const [success, setSuccess] = useState('');
    const [err, setErr] = useState('')
    const [userEmail, setUserEmail] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setSuccess(user)
                event.target.reset()
            }).catch(err => {
                console.log(err);
                setErr(err.message)

            })
    }


    const blurEmailSet = (event) => {
        const email = event.target.value;
        console.log(email);
        setUserEmail(email)
    }


    const resetPassword = () => {
        if(!userEmail){
            alert('Please input a valid email')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
        .then(() => {
            alert('password reset email sent to your mail. please check')
        }).catch(err => console.log(err))
    }

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="name">Email</label>
                    <input onBlur={blurEmailSet} className='input' placeholder='Email' type="email" name="email" id="" required />
                </div>
                <div>
                    <label htmlFor="name">Password</label>
                    <input className='input' placeholder='password' type="password" name="password" id="" required />
                </div>
                {
                    success && <p className='text-green-700'>Login success</p>
                }
                <p className='text-red-500'>{err}</p>
                <div className='button'>
                    <button type="submit">Login</button>
                </div>
                <div className='button'>
                    <button type="submit">Google</button>
                </div>
                <p>New to here! Please <Link className='text-blue-600 link' to='/signup'><span>Register</span></Link> </p>
                <p>Forget password please <span onClick={resetPassword} className='text-blue-600 link'>Reset</span></p>
            </form>

        </div>
    );
};

export default Login;