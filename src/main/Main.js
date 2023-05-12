import React from 'react';
import Header from '../share/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;