import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.png';
import Image2 from '../../assets/blog-2.png'; // You'll need to add your paper thumbnail image

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts & Papers</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Research Paper</span></a>
                        <a href="https://arxiv.org/abs/2511.12868" target="_blank" rel="noopener noreferrer">
                            <img src={Image2} alt="Video Finetuning Paper" className='blog__img' />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Video Finetuning Improves Reasoning Between Frames</h3>
                        <div className="blog__meta">
                            <span>December 2025</span>
                            <span className="blog__dot">.</span>
                            <span>NeurIPS 2025 CogInterp</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Oracle Blockchain Blog</span></a>
                        <a href="https://blogs.oracle.com/blockchain/extending-cbdc-scalability-and-resilience-with-oracle-database-blockchain-tables" target="_blank" rel="noopener noreferrer">
                            <img src={Image1} alt="Oracle CBDC Blog" className='blog__img' />
                        </a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Extending CBDC Scalability and Resilience with Oracle Database Blockchain Tables</h3>
                        <div className="blog__meta">
                            <span>January 29, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Zihan Wang</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog