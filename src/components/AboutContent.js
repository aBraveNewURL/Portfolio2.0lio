import '../components/AboutContentStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import top1 from '../assets/top1.jpg';
// import bottom1 from '../assets/bottom1.jpg';
// import mug from '../assets/mug.jpg';



const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am an aspiring developer who loves to create fun and interesting content.</p>
                <p>In my spare time I enjoy travelling, trying new foods, and learning about new and exciting technologies.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>

            {/* <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={top1} className='img' alt="topRight"></img>
                    </div>
                    <div className='img-stack bottom'>
                        <img src={bottom1} className='img' alt="bottomRight"></img>
                    </div>
                    
                </div>
            </div> */}
        </div>
    )
}

export default AboutContent;