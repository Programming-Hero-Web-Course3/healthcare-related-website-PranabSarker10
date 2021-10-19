import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner d-flex flex-column justify-content-center" >
            <h1>Best Support for your health</h1>
            <div >
                <input className="input-field" placeholder="Search" type="text" />
                <button className="search-btn">Search</button>
            </div>
        </div>
    );
};

export default Banner;