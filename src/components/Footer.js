import './FooterStyles.css';
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>Resident of Ogden, Utah USA</p>
                        </div>
                    </div>
                    <div className='email'>
                        <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            < a href='mailto:Benjamin.R.Sokolik@gmail.com'>Benjamin.R.Sokolik@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='gitHub'>
                        <FaGithub size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <a href="https://github.com/aBraveNewURL">GitHub</a>
                        </div>
                    </div>
                    <div className='linkedIn'>
                        <FaLinkedin size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <a href="https://www.linkedin.com/in/benjamin-sokolik-1271a772/">LinkedIn</a>
                        </div>
                    </div>
                    <div className='faceBook'>
                        <FaFacebook size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <a href="https://www.facebook.com/ben.sokolik.7">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
