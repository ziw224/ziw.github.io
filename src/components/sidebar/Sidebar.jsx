import React, { useState } from "react";
import "./Sidebar.css";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiDraftLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <svg width="200" height="100" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', marginLeft: '-45px', marginTop: '-20px'}}>
                        <defs>
                            <linearGradient id="funGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{stopColor:"#FF9A9E", stopOpacity:1}} />
                                <stop offset="100%" style={{stopColor:"#FECFEF", stopOpacity:1}} />
                            </linearGradient>
                        </defs>

                        <path d="M50,100 Q80,20 200,40 T350,100 T200,180 T50,100" 
                            fill="url(#funGrad)" 
                            opacity="0.6"/>
                            
                        <circle cx="340" cy="50" r="8" fill="#4ECDC4" />
                        <circle cx="60" cy="150" r="5" fill="#4ECDC4" />

                        <text x="45%" y="50%" 
                            fontFamily="'Segoe Script', 'Comic Sans MS', 'Chalkboard SE', cursive" 
                            fontWeight="bold"
                            fontSize="70" 
                            fill="#333" 
                            textAnchor="middle">
                            Bella
                        </text>
                        
                        <text x="65%" y="85%" 
                            fontFamily="'Segoe Script', 'Comic Sans MS', 'Chalkboard SE', cursive" 
                            fontWeight="bold"
                            fontSize="70" 
                            fill="#FF6B6B" 
                            textAnchor="middle">
                            Wang
                        </text>
                        
                        <path d="M80,160 Q200,180 320,150" 
                            stroke="#4ECDC4" 
                            strokeWidth="4" 
                            fill="none" 
                            strokeLinecap="round"/>
                    </svg>
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <RiHome2Line /> Home
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <RiUser3Line /> About Me
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <RiFileList3Line /> Services
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#resume" className="nav__link">
                                    <RiBriefcase2Line /> Experiences
                                </a>
                            </li>
{/* 
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <RiStackLine /> Projects
                                </a>
                            </li> */}

                            <li className="nav__item">
                                <a href="#blog" className="nav__link">
                                    <RiDraftLine /> Blog Post
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <RiChat3Line /> Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
