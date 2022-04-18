import React from 'react';
import  logo from '../../assets/images/logo.png';
import './header.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className="app-header">
            <div className="logo">
                <img src={logo} alt="Tiki-taka logo" /> 
            </div>
            <Navigation />
        </div>
    );
};

export default Header;