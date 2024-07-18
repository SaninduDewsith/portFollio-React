import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-wrapper">
                <div className="contact-container">
                    <div className="contact-text">
                        <h2>Contact <span>Me</span></h2>
                        <h4>Let's Work Together</h4>
                        <p></p>
                        <ul className="contact-list">
                            <li><i className="bx bxs-map"></i>Sri Lanka</li>
                            <li><i className="bx bxs-phone"></i>+94 123456789</li>
                            <li><i className="bx bxs-envelope"></i>dewsith@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="contact-container">
                    <div className="contact-form">
                        <form action="#">
                            <input type="text" name="name" placeholder="Your Name" />
                            <input type="email" name="email" placeholder="Your Email" />
                            <textarea name="message" placeholder="Your Message"></textarea>
                            <button type="submit" className="send">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
