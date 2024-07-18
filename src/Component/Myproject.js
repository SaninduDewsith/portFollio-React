import React from 'react';
import './style.css'; 

const MyProjects = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <h1 className="sub-title">My <span>Projects</span></h1>
                <div className="service-list">
                    <div>
                        <i className="bx bx-code-alt"></i>
                        <h2>Web Development</h2>
                        <p>Creating responsive and dynamic websites.</p>
                        <a href="#" className="read">Learn More</a>
                    </div>
                    <div>
                        <i className="bx bx-crop"></i>
                        <h2>UX/UI Design</h2>
                        <p>Designing user-friendly and appealing interfaces.</p>
                        <a href="#" className="read">Learn More</a>
                    </div>
                    <div>
                        <i className="bx bx-qr-scan"></i>
                        <h2>SEO Optimization</h2>
                        <p>Improving website visibility on search engines.</p>
                        <a href="#" className="read">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyProjects;
