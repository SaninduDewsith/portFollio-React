// Skills.js

import React from 'react';
import './style.css'; // Make sure style.css is in the same directory

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h1 className="sub-title">My <span>Skills</span></h1>
            <div className="skills-wrapper">
                <div className="container1">
                    <h1 className="heading1">Technical Skills</h1>
                    <div className="Technical-bars">
                        <div className="bar"><i className="bx bxl-html5" style={{ color: '#c95d2e' }}></i>
                            <div className="info">
                                <span data-percent="90%">HTML</span>
                            </div>
                            <div className="progress-line html">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><i className="bx bxl-css3" style={{ color: '#147bbc' }}></i>
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><i className="bx bxl-javascript" style={{ color: '#b0bc1e' }}></i>
                            <div className="info">
                                <span>JavaScript</span>
                            </div>
                            <div className="progress-line javascript">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><i className="bx bxl-python" style={{ color: '#c32ec9' }}></i>
                            <div className="info">
                                <span>Python</span>
                            </div>
                            <div className="progress-line python">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><i className="bx bxl-react" style={{ color: '#69bcbc' }}></i>
                            <div className="info">
                                <span>React</span>
                            </div>
                            <div className="progress-line react">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container1" id="professional-skills">
                    <h1 className="heading1">Professional Skills</h1>
                    <div className="radial-bars">
                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">80%</div>
                            <div className="text">Creativity</div>
                        </div>
                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">90%</div>
                            <div className="text">Communication</div>
                        </div>
                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">75%</div>
                            <div className="text">Teamwork</div>
                        </div>
                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">68%</div>
                            <div className="text">Problem Solving</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
