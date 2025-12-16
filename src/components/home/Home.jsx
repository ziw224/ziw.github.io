import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.png';
import Me2 from '../../assets/avatar-11.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Resume from '../../assets/resume.pdf';

const Home = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="home container" id='home'>
            <div className="intro">
                <div className="home__avatars">
                    <img src={Me} alt="" className='home__img' />
                    <img src={Me2} alt="" className='home__img home__img--second' />
                    {/* <div className="arrow-label">
                        <span className="arrow-label__text">Me and my cat Simba</span>
                        <span className="arrow-label__arrow">↷</span>
                    </div> */}
                </div>  
                <h1 className="home__name">Zihan (Bella) Wang</h1>
                <span className="home__education">I'm a Full Stack Software Engineer</span>

                <HeaderSocials />

                <div className="job-status">
                    <span className="job-status__badge">🎓 Graduating May 2026 • Seeking Full-time Opportunities 🚀</span>
                </div>

                <div className="home__buttons">
                    <a href="#contact" className="btn">Contact Me</a>
                    <button className="btn btn--cv" onClick={downloadResume}>Download CV</button>
                </div>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home