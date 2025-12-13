import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <div className="about__image-container">
                    <img src={Image} alt="" className='about__img' />
                    <p className="about__img-caption">Bella is presenting her work in NeurIPS 2025 CogInterp at San Diego</p>
                </div>

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Zihan (Bella), and I'm currently pursuing my Master of Computer Science at Brown University, specializing in AI and Machine Learning.<br /><br />
                            Fast-forward to today, I am deeply involved in both industry innovation and academic research. I currently work as a Founding AI Engineer at EcoForge building intelligent agent systems, while also researching Video LLMs at the LUNAR Lab. My focus these days is on architecting production-grade AI platforms.<br /><br />
                            Here are a few technologies I‘ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Python (Expert)</li>
                            <li>TypeScript</li>
                            <li>React & Next.js </li>
                            <li>FastAPI </li>
                            <li>LangChain & RAG </li>
                            <li>PyTorch </li>
                        </ul>
                        <button className="btn btn--cv" onClick={downloadResume}>Download CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About