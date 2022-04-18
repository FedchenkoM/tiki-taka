import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/mainPage' element={<MainPage/>} />
            <Route path='/players' element={<h1>Players</h1>} />
        </Routes>
    );
};

export default RouteComponent;