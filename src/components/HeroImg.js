import './HeroImgStyles.css';
import HeroImgSands from '../assets/HeroImgSands.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="hero-img" src={HeroImgSands} alt="sandsBG"/>
            </div>
            <div className="content">
                <p>My name is Benjamin</p>
                <h1>Welcome to my portfolio.</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;