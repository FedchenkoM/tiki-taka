import React from 'react';
import './app.scss';
import '../../assets/styles/reset.scss';
import '../../assets/styles/common.scss'
import Header from '../Header/Header';
import RouteComponent from '../Routes/RouteComponent';

const App = () => {
    return (
        <div className="app-wrapper">
            <div className="container">
                <Header />
                <RouteComponent />
            </div>
        </div>
    );
};

export default App;        