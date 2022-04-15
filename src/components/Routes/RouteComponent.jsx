import React from 'react';
import { Routes, Route } from 'react-router-dom';

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/mainPage' element={<h1>Main Page</h1>} />
            <Route path='/players' element={<h1>Players</h1>} />
        </Routes>
    );
};

export default RouteComponent;