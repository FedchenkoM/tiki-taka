import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/mainPage' element={<MainPage />} />
            <Route path='/players' element={<h1>Players</h1>} />
            <Route path="*" element={<Navigate to='/mainPage' />} />
        </Routes>
    );
};

export default RouteComponent;  