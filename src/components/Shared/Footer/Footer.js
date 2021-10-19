import React from 'react';
import logo2 from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-3">
            <div className="container text-start py-3">
                <div className="row ">
                    <div className="col-md-5">
                        <div className="col-md-4">
                            <img className='img-fluid' src={logo2} alt="" />
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    
                </div>
                <div className="container text-start py-3">
                    <div className="row">
                        <div className="col-md-4">
                            <small>&copy; 2021 Pranab Sarker</small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <a href="">Privacy policy</a>
                            <a href="">Terms condition</a>
                            <a href="">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;