import React from 'react';
import { NavLink } from 'react-router-dom';


const NavList = () => {
    return (
        <ul>
            <li><NavLink to='/mainPage'>Главная</NavLink></li>
            <li><NavLink to='/players'>Игроки</NavLink></li>
        </ul>
    );
};

export default NavList;