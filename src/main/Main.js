import React from 'react';
import Header from '../share/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';
import LeftSide from '../componant/leftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <div className=''>
                <div className='columns-md'>
                    <LeftSide></LeftSide>
                </div>
                <Outlet></Outlet>
            </div> */}

            <Footer></Footer>
        </div>
    );
};

export default Main;