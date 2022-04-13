import React from 'react';
import './navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <ul className="navigation">
                <li><a href='#'>Чемпионаты</a></li>
                <li><a href='#'>Игроки</a></li>
                <li><a href='#'>Видео</a></li>
                <li><a href='#'>Любимая команда</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;