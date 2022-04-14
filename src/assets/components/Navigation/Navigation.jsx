import React from 'react';
import Burger from '../Burger/Burger';
import NavList from '../NavList/NavList';
import './navigation.scss';

const Navigation = () => {
    return (
        <div>
            <Burger />
            <nav className="navigation">
                <NavList />
            </nav>
        </div>
    );
};

export default Navigation;