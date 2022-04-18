import React from 'react';
import loaderGif from '../../assets/images/loader.gif';
import './loader.scss'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loaderGif} alt="loader" />
        </div>
    );
};

export default Loader;