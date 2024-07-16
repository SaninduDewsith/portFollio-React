

import React from 'react';
import './style.css'; 
import profilePicture from './profile4to.jpg'; 

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={profilePicture} alt="Profile Picture" />
            </div>
            <div className="about-text">
                <h2>About <span>Me</span></h2>
                <h4>Full Stack Developer</h4>
                <p>
                    I'm a full-stack developer with expertise in both front-end and back-end development,
                    as well as web design. I have experience building responsive, user-friendly web applications
                    and creating visually appealing interfaces. My skill set includes HTML, CSS, JavaScript, and
                    various front-end frameworks like React and Angular. On the back end, I am proficient in languages
                    such as Node.js, Python, and PHP, along with database management using SQL and NoSQL databases.
                </p>
                <a href="#skills" className="btn-box">My Skills</a>
            </div>
        </section>
    );
}

export default About;
