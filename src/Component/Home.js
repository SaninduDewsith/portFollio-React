

import React from 'react';
import './style.css'; 

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>SANINDU DEWSITH</h1>
                <h3>And I'm a <span className="text"></span></h3>
                <p>
                    I'm a web designer with extensive experience for over 1 year.<br />
                    My expertise is to create and design websites, front-end and back-end development.
                </p>
                <div className="home-sci">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                    <a href="#"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                </div>
                <a href="#about" className="btn-box">More About Me</a>
            </div>
        </section>
    );
}

export default Home;
