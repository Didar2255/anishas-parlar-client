import React from 'react';
import { Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <Row>
                <div className="col-md-5 social-media">
                    <p> <i className="fas fa-map-marker-alt"></i>H#000(5th Floor),Road #001</p>
                    <p>Adabor,MohammadPur,Dhaka-1207,Bangladesh</p>
                </div>
                <div className="col-md-2 footer">
                    <h2>Parlour</h2>
                    <ul>
                        <li>About</li>
                        <li>Project</li>
                        <li>Our Team</li>
                        <li>Terms Condition</li>
                        <li>Submit Listing</li>
                    </ul>
                </div>
                <div className="col-md-2 footer">
                    <h2>Quick Link</h2>
                    <ul>
                        <li>Quick Links</li>
                        <li>Rental</li>
                        <li>Treatment</li>
                        <li>Contact</li>
                        <li>Our Blog</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2>About Us</h2>
                    <p style={{ textAlign: 'left' }}>Our design and philosophy work hand in hand. We are committed to providing healthy hair care with a low impact on the environment. Come see what you and your hair can do for the Earth.</p>
                    <div className=" social-media">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-snapchat"></i>
                    </div>
                </div>
            </Row>
            <hr />
            <p>&copy; copy right Didar Development</p>
        </div>
    );
};

export default Footer;