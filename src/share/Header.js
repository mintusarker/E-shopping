import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/Firebase.config';
import logo from '../assets/logo2.png'


const auth = getAuth(app)

const Header = () => {

    const handleSignOut = () => {
           signOut(auth)
           .then()
           .catch(err=>console.log(err))
    }
    return (

        <div className='header'>
            <div>
                <img className='w-24 m-6' src={logo} alt="" />
                
            </div>
            <div>
                <ul className='list'>
                    <li> <Link to='/login'> Login</Link> </li>
                    <li> <Link to='/signup'>Sign Up</Link> </li>
                    <li onClick={handleSignOut}> Sign Out</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;