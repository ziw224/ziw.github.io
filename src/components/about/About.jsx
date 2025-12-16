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
                        Hi! I'm Zihan (Bella) Wang, a Master's student in Computer Science at Brown University specializing in AI and Machine Learning.<br /><br />
                            I work at the intersection of research and real-world impact—currently researching LLM agents under Professor Randall and multimodal reasoning in Video LLMs under Professor Ellie Pavlick at Brown's LUNAR Lab, with recent work "<a href="https://arxiv.org/abs/2511.12868" target="_blank" rel="noopener noreferrer" >Video Finetuning Improves Reasoning Between Frames</a>" accepted to NeurIPS 2025 CogInterp.<br /><br />
                            As a Founding AI Engineer at EcoForge, I architect intelligent agent systems for industrial manufacturing that helped secure ¥2M in seed funding and trials with China's largest cement manufacturer.<br /><br />
                            Here are a few technologies I've been working with recently:
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