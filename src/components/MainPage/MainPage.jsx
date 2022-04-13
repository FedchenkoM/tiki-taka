import React from 'react';
import './main_page.scss';
import '../../assets/styles/reset.scss';
import '../../assets/styles/common.scss'
import Header from '../Header/Header';

const MainPage = () => {
    return (
        <div className="app-wrapper">
            <div className="container">
             <Header />
            </div>
        </div>
    );
};

export default MainPage;        