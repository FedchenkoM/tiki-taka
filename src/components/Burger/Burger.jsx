import React, { useState } from 'react';
import NavList from '../NavList/NavList';
import './burger.scss';

const Burger = () => {
	let [isOpenBurgerMenu, setOpenBurgerMenu] = useState('')

	const handleOpenMenu = () => {
		!isOpenBurgerMenu
			? setOpenBurgerMenu('isOpen')
			: setOpenBurgerMenu('')
	}

	return (
		<div className={`burger-container ${isOpenBurgerMenu}`}
			onClick={handleOpenMenu}>
			<div className="burger-btn">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="burger-menu">
				<NavList />
			</div>
		</div>
	);
};

export default Burger;