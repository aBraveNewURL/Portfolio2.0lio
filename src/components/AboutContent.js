import '../components/AboutContentStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import top1 from '../assets/top1.jpg';
import bottom1 from '../assets/bottom1.jpg';



const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am an aspiring front-end developer. I love to create fun and interesting content.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={top1} className='img' alt="topRight"></img>
                    </div>
                    <div className='img-stack bottom'>
                        <img src={bottom1} className='img' alt="bottomRight"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;